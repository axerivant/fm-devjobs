<script lang="ts">
	import Theme from '@/global/theme'

	export let placeholder: string
</script>

<input
	type="text"
	name=""
	id=""
	{placeholder}
	class="bg-transparent w-full outline-none {$Theme === 'light'
		? 'text-gray-800'
		: 'text-indigo-50'}"
/>
