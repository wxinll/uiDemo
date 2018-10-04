<template>
	<div class="g-button-group">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		mounted () {
			for (let node of this.$el.children){
				let name = node.tagName.toLowerCase()
				if(name !== 'button') {
					return console.warn(`g-button-group中混入${name}`)
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.g-button-group{
		display: inline-flex;
		vertical-align: middle;
		>.g-button{
			&:not(:first-child){
				margin-left: -1px;
			}
			&:first-child{
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;			
			}
			&:last-child{
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;			
			}
			&:not(:first-child):not(:last-child){
				border-radius: 0;
			}
			&:hover{
				z-index: 1;
			}
		}
	}
</style>