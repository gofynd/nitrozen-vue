import * as NitrozenComponents from './components';

let NitrozenVuePlugin ={
    install:(Vue)=>{
        Object.values(NitrozenComponents).forEach((NComponent) => {
          Vue.component(NComponent.name,NComponent)
        });
    }
}

export default NitrozenVuePlugin;
