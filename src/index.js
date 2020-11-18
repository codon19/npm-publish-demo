import MyButton from './components/MyButton.vue';

MyButton.install = function (Vue) {
  Vue.component(MyButton.name, MyButton);
};

export default MyButton;
