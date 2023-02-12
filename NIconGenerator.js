const fs = require('fs')
const path = require('path')

const ASSETS_DIR = `${process.cwd()}/src/assets`
const PATH_REGEX = /d="(.*)" /
const icons = {}

/**
 * Generates icon objects with keyname and svg paths
 */
const generateIconPaths = async () => {
    try{
        let files = await fs.promises.readdir(path.resolve(`${ASSETS_DIR}/svgs`))
        for (let index = 0; index < files.length; index++) {
            const file = files[index];
            if(file.includes('ic_') && file.includes('.svg')){
                let svgFile = await fs.promises.readFile(path.resolve(`${ASSETS_DIR}/svgs/${file}`))
                let keyName = file.replace(`ic_`, '').replace('.svg', '')
                let result = PATH_REGEX.exec(svgFile)
                icons[keyName] = result.slice(1)[0]
            }
        }
    }catch(error){
        console.error(error)
    }
}

const exportIconPaths = async () => {
    await generateIconPaths()

    // Write to FS
    const ICONS_FILE_PATH = `${ASSETS_DIR}/icons.json`
    await fs.promises.writeFile(ICONS_FILE_PATH, JSON.stringify(icons), 'utf-8')
}
// generateIconPaths().then(() => {
//     console.log(icons)
// })

exportIconPaths().then(() => {
    console.log("Icons exported successfully")
})