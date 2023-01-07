<script lang="ts">
	export let job: Job
	import { Card } from '@/ui/base'
	import { Logo } from '@/ui/common'
	import { Heading } from '@/ui/typography'
</script>

<Card flex="row">
	<Logo size="xl" path={job.logo} />
	<Heading level="2">{job.company}</Heading>
</Card>
