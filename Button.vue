<template>
	<button class="g-button" 
    :class="{loading:loading}">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use xlink:href="#icon-settings"></use>
    </svg>
    <span class="content">
      按钮
    </span>
  </button>
</template>

<script>
	export default {
		props: ['icon','loading']
	}
</script>

<style scoped>

.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
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
</style>
