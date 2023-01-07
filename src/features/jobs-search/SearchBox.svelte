<script>
	// assets
	import SearchSVG from '@/assets/desktop/icon-search.svg'
	import LocationSVG from '@/assets/desktop/icon-location.svg'
	// comps
	import { Card } from '@/ui/base'
	import { Button, Checkbox, InputText } from '@/ui/interactive'
</script>

<Card flex="row" tw="justify-between">
	<div class="group w-6/12">
		<img src={SearchSVG} alt="" />
		<InputText placeholder="Filter by title, companies, expertise…" />
	</div>
	<div class="group">
		<img src={LocationSVG} alt="" />
		<InputText placeholder="Filter by location" />
	</div>
	<Checkbox label="Full Time Only" />
	<Button label="search" />
</Card>

<style>
	.group {
		@apply flex items-center gap-3;
	}
	img {
		@apply h-6;
	}
</style>
