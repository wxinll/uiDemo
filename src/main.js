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

//chai 单元测试
import chai from 'chai'

const should = chai.should()

{
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'settings'
		}
	})
	vm.$mount()
	let useElement = vm.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	href.should.equal('#icon-settings')
	vm.$el.remove()
	vm.$destroy()
}

{
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'loading'
		}
	})
	vm.$mount()
	let useElement = vm.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	href.should.equal('#icon-loading')
	vm.$el.remove()
	vm.$destroy()
}

{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'loading',
			loading: true
		}
	})
	vm.$mount(div)
	let icon = vm.$el.querySelector('.icon')
	let animation = window.getComputedStyle(icon).animation
	animation.should.exist
	vm.$el.remove()
	vm.$destroy()
}

{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'settings',
			iconPosition: 'right'
		}
	})
	vm.$mount(div)
	let icon = vm.$el.querySelector('.icon')
	let order = window.getComputedStyle(icon).order
	order.should.equal('2')
	vm.$el.remove()
	vm.$destroy()
}