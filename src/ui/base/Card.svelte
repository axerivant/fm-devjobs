<script lang="ts">
	import Theme from '@/global/theme'

	export let width: string = ''
	export let flex: 'row' | 'col' | '' = ''
	export let tw: string = ''
</script>

<div
	class="rounded p-3 px-6 gap-3 {$Theme === 'light'
		? 'bg-white'
		: 'bg-gray-800'}
        {flex && 'flex'} {flex === 'col'
		? 'flex-col'
		: 'flex-row items-center'} {tw}"
>
	<slot />
</div>
