<script lang="ts">
	import Theme from '@/global/theme'
</script>

<p class="text-[16px] tracking-wide leading-7 {$Theme}">
	<slot />
</p>

<style>
	.dark {
		@apply text-gray-300;
	}

	.light {
		@apply text-gray-900;
	}
</style>
