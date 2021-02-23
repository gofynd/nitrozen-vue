import strokeBtn from "./NStrokeBtn";
import flatBtn from "./NFlatBtn";
import clickOutside from "./NClickOutside";

// import Vue from 'vue';

// const directive = {
//     storkeBtn,
//     flatBtn
// }

// Vue.use(directive);
// Object.values(directive).forEach(ele => {
//     Vue.use(ele)
// })

const NitrozenDirectives = {
  install(app) {
    strokeBtn(app);
    flatBtn(app);
    clickOutside(app);
  }
};

export default NitrozenDirectives;
