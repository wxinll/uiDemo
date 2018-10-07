// import spies from 'chai-spies'
import Vue from 'vue'
import Button from '../src/Button'

Vue.config.productionTip = false
Vue.config.devtools = false

// chai.use(spies)

const should = chai.should()

describe('Button', () => {
	it('Button安按钮存在.', () => {
		Button.should.be.ok
	})

	it('设置图标，settings', () => {
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
	})

	it('设置图标，loading', () => {
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
	})

	it('设置图标状态，loading动画.', () => {
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
	})

	it('设置图标位置', () => {
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
	})

	it('绑定事件，click', () => {
		const Constructor = Vue.extend(Button)
		const vm = new Constructor({
			propsData: {
				icon: 'settings',
				iconPosition: 'right'
			}
		})
		// const spy = chai.spy();
		const spy = sinon.fake()
		vm.$mount()
		vm.$on('click', spy)
		vm.$el.click()
		spy.should.have.been.called
	})
})