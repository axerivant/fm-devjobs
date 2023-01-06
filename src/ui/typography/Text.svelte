<script lang="ts">
	import Theme from '@/global/theme'
</script>

<p class="text-[16px] {$Theme}">
	<slot />
</p>

<style>
	.dark {
		@apply text-white;
	}

	.light {
		@apply text-gray-900;
	}
</style>
