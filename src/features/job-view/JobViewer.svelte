<script lang="ts">
	import Company from './Company.svelte'
	import Description from './Description.svelte'
	import Footer from './Footer.svelte'

	export let job: Job
</script>

<div class="flex flex-col gap-6">
	<Company {job} />
	<Description {job} />
	<Footer {job} />
</div>
