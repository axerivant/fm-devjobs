<script lang="ts">
	import { getIdealBGColor } from './utils'

	export let path: string

	let logo: HTMLImageElement
	let bg: string
	const getBg = () => (bg = getIdealBGColor(logo))
</script>

<div
	class="h-12 w-12 p-2 rounded-xl relative -top-8"
	style:background-color={bg}
>
	<img
		on:load={getBg}
		bind:this={logo}
		src={path}
		alt=""
		class="h-full w-full object-contain bg-blend-color-burn"
	/>
</div>
