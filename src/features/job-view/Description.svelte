<script lang="ts">
	import { Card } from '@/ui/base'
	import { Button } from '@/ui/interactive'
	import { Heading } from '@/ui/typography'
	import { Label } from '@/ui/typography'
	import { Text } from '@/ui/typography'

	export let job: Job
</script>

<Card flex="col" tw="py-12 px-12">
	<div class="flex items-center justify-between">
		<div>
			<div class="flex gap-3">
				<Label>{job.postedAt}</Label>
				<Label>{job.contract}</Label>
			</div>
			<Heading level="1">{job.position}</Heading>
			<p class="text-indigo-500 font-medium">{job.location}</p>
		</div>
		<Button label="Apply Now" />
	</div>
	<div class="h-6" />
	<div class="flex flex-col gap-6">
		<Text>{job.description}</Text>
		<Heading level="3">Requirements</Heading>
		<Text>{job.requirements.content}</Text>
		<Heading level="3">Role</Heading>
		<Text>{job.role.content}</Text>
	</div>
</Card>
