<script lang="ts">
	import { onMount } from 'svelte'
	import { getIdealBGColor } from './utils'

	export let path: string
	export let size: 'nm' | 'xl' = 'nm'

	let bg: string

	onMount(() => {
		const img = document.createElement('img')
		img.src = path
		img.height = 50
		img.width = 50
		img.addEventListener('load', () => (bg = getIdealBGColor(img)))
	})
</script>

{#if size === 'nm'}
	<div
		class="h-12 w-12 p-2 rounded-xl relative -top-8"
		style:background-color={bg}
	>
		<img
			src={path}
			alt=""
			class="h-full w-full object-contain bg-blend-color-burn"
		/>
	</div>
{:else if size === 'xl'}
	<div class=" p-6 h-36 w-36 rounded my-3" style:background-color={bg}>
		<img
			src={path}
			alt=""
			class="h-full w-full object-contain bg-blend-color-burn"
		/>
	</div>
{/if}
