<script lang="ts">
	import Theme from '@/global/theme'

	// Comps
	import { Card } from '@/ui/base'
	import { Heading, Label } from '@/ui/typography'
	import Logo from '@/ui/common/Logo.svelte'

	export let job: Job
</script>

<a href="/job/{job.id}" class="w-3/12">
	<Card isInteractive flex="col">
		<Logo path={job.logo} />
		<div class="top-2 flex gap-6 -mt-8">
			<Label>{job.postedAt}</Label>
			<Label>{job.contract}</Label>
		</div>
		<Heading level="3">{job.position}</Heading>
		<Label>{job.company}</Label>
		<div class="h-12" />
		<p
			class="font-semibold{$Theme === 'light'
				? ' text-indigo-600'
				: ' text-indigo-400'}"
		>
			{job.location}
		</p>
	</Card>
</a>
