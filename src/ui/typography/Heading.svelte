<script lang="ts">
	import Theme from '@/global/theme'

	export let level: string = '1'
</script>

{#if level === '1'}
	<h1 class="text-[28px] font-bold {$Theme}">
		<slot />
	</h1>
{/if}

{#if level === '2'}
	<h2 class="text-[24px] font-bold {$Theme}">
		<slot />
	</h2>
{/if}

{#if level === '3'}
	<h3 class="text-[20px] font-bold {$Theme}">
		<slot />
	</h3>
{/if}

{#if level === '4'}
	<h4 class="text-[14px] font-bold {$Theme}">
		<slot />
	</h4>
{/if}

<style>
	.dark {
		@apply text-white;
	}

	.light {
		@apply text-gray-900;
	}
</style>
