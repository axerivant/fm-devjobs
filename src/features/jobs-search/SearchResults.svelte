<script lang="ts">
	// backend
	import { fetchDefaultJobs } from '@/backend'
	// comps
	import SearchResult from './SearchResult.svelte'

	const Jobs = fetchDefaultJobs()
</script>

<div class="flex justify-center flex-wrap gap-6">
	{#each Jobs as job}
		<SearchResult {job} />
	{/each}
</div>
