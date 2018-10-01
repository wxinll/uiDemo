import Button from './Button.vue'
import Icon from './Icon.vue'
import Vue from 'vue'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)

new Vue({
	el: '#app'
})