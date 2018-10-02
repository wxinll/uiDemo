import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './Button-group.vue'
import Vue from 'vue'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
	el: '#app'
})