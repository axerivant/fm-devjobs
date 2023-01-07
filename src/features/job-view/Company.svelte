<script lang="ts">
	import { Card } from '@/ui/base'
	import { Logo } from '@/ui/common'
	import { Button } from '@/ui/interactive'
	import { Heading, Label } from '@/ui/typography'

	export let job: Job
</script>

<Card flex="row" tw="justify-between">
	<div class="flex gap-16 items-center">
		<Logo size="xl" path={job.logo} />
		<div class="flex flex-col gap-1">
			<Heading level="2">{job.company}</Heading>
			<Label>{job.website}</Label>
		</div>
	</div>
	<div>
		<Button label="Company Site" type="secondary" />
	</div>
</Card>
