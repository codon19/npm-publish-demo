import GuButton from './src/main.vue';

GuButton.install = function (Vue) {
  Vue.component(GuButton.name, GuButton);
};

export default GuButton;
