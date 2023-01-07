<script lang="ts">
	import { Label } from '../typography'

	export let label: string
	export let isChecked = false
</script>

<div class="flex gap-3">
	<input type="checkbox" name="" id={label} bind:checked={isChecked} />
	<Label>
		{label}
	</Label>
	<!-- <label class="" for={label} /> -->
</div>
