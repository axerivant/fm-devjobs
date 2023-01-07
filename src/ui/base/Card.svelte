<script lang="ts">
	import Theme from '@/global/theme'

	export let flex: 'row' | 'col' | '' = ''
	export let tw: string = ''
	export let isInteractive: boolean = false
</script>

<div
	class="rounded p-3 px-6 gap-3 {$Theme === 'light'
		? 'bg-white'
		: 'bg-gray-800'}
        {flex && 'flex'} {flex === 'col' ? 'flex-col' : 'flex-row items-center'}
        {isInteractive &&
		'hover:brightness-105 hover:-translate-y-1 cursor-pointer transition-all active:translate-y-1'} {tw}"
>
	<slot />
</div>
