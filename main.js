import Vue from 'vue/dist/vue.js';
import App from './App';
import {num1, num2, add} from "./App";
import './main.css';

// import * as obj from './App';

console.log(num1);
console.log(num2);
console.log(add(3, 10));

new Vue({
    el: '#app',
    components: {
        App
    },
    template: `
        <App></App>
    `
});
