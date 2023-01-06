<script lang="ts">
	export let label: string
	export let isChecked = false
</script>

<div>
	<input type="checkbox" name="" id={label} bind:checked={isChecked} />
	<label class="" for={label}>{label}</label>
</div>
