<script lang="ts">
	import { page } from '$app/stores'
	import { getJobByID } from '@/backend'
	import JobViewer from '@/features/job-view'

	const jobID = $page.params.jobID
	const job = getJobByID(jobID)
	console.log(job)
</script>

<div class="flex flex-col items-center">
	<div class="w-8/12">
		<JobViewer {job} />
	</div>
</div>
