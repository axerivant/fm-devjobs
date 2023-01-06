<script lang="ts">
	import Theme from '@/global/theme'

	export let label: string
	export let type: 'primary' | 'secondary' = 'primary'
</script>

{#if type === 'primary'}
	<button
		class="bg-indigo-500 text-white hover:opacity-80 transition-all"
		on:click
	>
		{label}
	</button>
{/if}

{#if type === 'secondary'}
	<button
		class="
            {$Theme === 'light'
			? 'text-indigo-500 bg-indigo-100 hover:bg-indigo-200'
			: 'text-white bg-gray-600 hover:bg-gray-500'} 
            transition-all"
		on:click
	>
		{label}
	</button>
{/if}

<style>
	button {
		@apply font-semibold py-3 px-6 flex justify-center items-center rounded;
	}
</style>
