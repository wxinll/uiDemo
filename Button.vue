<template>
	<button class="g-button" 
		:class="{loading:loading,[`icon-${iconPosition}`]:true}"
		@click="$emit('click')">
		<g-icon v-if="icon" :icon="icon"></g-icon>
		<span class="content">
			<slot></slot>
		</span>
	</button>
</template>
<script>
export default {
	props: {
		icon: String,
		iconPosition: {
			type: String,
			default: 'left'
		},
		loading: {
			type: Boolean,
			default: false
		}
	}
}
</script>
<style lang="scss" scoped>
.g-button {
	font-size: var(--font-size);
	height: var(--button-height);
	padding: 0 1em;
	border-radius: var(--border-radius);
	border: 1px solid var(--border-color);
	background: var(--button-bg);
	display: inline-flex;
	justify-content: center;
	align-items: center;
	vertical-align: middle;
}

.g-button:hover {
	border-color: var(--border-color-hover);
}

.g-button:active {
	background-color: var(--button-active-bg);
}

.g-button:focus {
	outline: none;
}

.g-button {
	.content {
		order: 2;
	}

	.icon {
		order: 1;
		margin-right: .1em;
	}
}

.g-button.icon-right {
	.content {
		order: 1;
	}

	.icon {
		order: 2;
		margin-left: .1em;
	}
}

.g-button.loading {
	.icon {
		animation: rot 1.5s linear infinite;
	}
}

@keyframes rot {
	0% {
		transform: rotate(0)
	}

	100% {
		transform: rotate(360deg)
	}
}
</style>