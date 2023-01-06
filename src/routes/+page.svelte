<script lang="ts">
	import { Card } from '@/ui/base'
	import { Button, Checkbox, ThemeToggle } from '@/ui/interactive'
	import { Label, Heading, Text } from '@/ui/typography'
</script>

<div class="flex flex-col justify-center items-center p-36 bg-gray-700">
	<ThemeToggle />
	<Card flex="col" tw="justify-center items-left">
		<Heading level="1">Heading</Heading>
		<Label>Label</Label>
		<Text>Body</Text>
		<Button label="Button A" />
		<Button label="Button B" type="secondary" />
		<Checkbox />
	</Card>
</div>
