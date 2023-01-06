<script lang="ts">
	import Theme from '@/global/theme'

	export let width: string = ''
	export let flex: 'row' | 'col' | '' = ''
	export let tw: string = ''
</script>

<div
	class="rounded p-3 gap-3 {$Theme === 'light'
		? 'bg-white'
		: 'bg-gray-900'} {flex && 'flex'} {flex === 'col'
		? 'flex-col'
		: 'flex-row'} {tw}"
>
	<slot />
</div>
