'use strict';
const path = require('path');
const { optimize } = require('svgo');
const fsPromise = require('fs').promises;
const fs = require('fs');

const outputDir = path.join(__dirname, '../src/auto_gen');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const customPlugins = [
    'prefixIds',
    {
      name: 'preset-default',
      params: {
        overrides: {
          // customize options
          cleanupIDs: {
            remove: false,
            minify: false,
            prefix: 'svg',
            force: true,
          },
          // or disable plugins
          removeViewBox: false,
          // removeDimensions: false,
        },
      },
    },
  ];  

async function run(srcPath, destPath) {
    try {
        const basePath = srcPath;
        const allfiles = await fsPromise.readdir(basePath);

        //read all svg files
        const svgStreams = await allfiles.map(async (file) => {
            const fileStream = await fsPromise
                .readFile(path.join(basePath, file))
                .catch((err) => {
                    // console.error(err);
                    return true;
                });
            const fileName = file.replace('.svg', '');
            return {
                svgName: fileName,
                stream: await optimize(fileStream, {
                    plugins: customPlugins,
                }),
            };
        });
        const svgContent = await Promise.all(
            svgStreams.map((a) => a.catch((e) => console.error(e)))
        );
        //Create a single svg file with svg html
        let str = `"use strict";\nvar svgs={}; \n`;
        svgContent.forEach((fc, index) => {
            if (fc && fc.stream && fc.stream.data)
                str = str + `svgs["${fc.svgName}"] = '${fc.stream.data}';\n`;
            else console.error(`Error at ${index} with `, svgStreams[index]);
        });
        str = str + `module.exports = svgs;`;
        const writeFilePath = destPath;
        await fsPromise.writeFile(writeFilePath, str);
        console.log('SVGs generated at', destPath);
        return;
    } catch (err) {
        console.error(`Error while generating svgs ${destPath}`, err);
    }
}

//Generate common assets
const srcCommonAssetPath = path.join(__dirname, '../assets/svgs/');
const destCommonAssetPath = path.join(__dirname, '../src/auto_gen/svgs.js');//
run(srcCommonAssetPath, destCommonAssetPath);


