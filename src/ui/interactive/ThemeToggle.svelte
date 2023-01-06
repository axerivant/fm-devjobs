<script lang="ts">
	// theme store
	import Theme, { toggleTheme } from '@/global/theme'
	// assets
	import SunSVG from '@/assets/desktop/icon-sun.svg'
	import MoonSVG from '@/assets/desktop/icon-moon.svg'

	let currentTheme = $Theme
	$: isToggled = currentTheme === 'dark'
</script>

<div class="flex gap-3 items-center">
	<img src={SunSVG} alt="" class="h-5" />
	<input
		type="checkbox"
		name=""
		id="theme"
		bind:checked={isToggled}
		on:change={toggleTheme}
	/>
	<label for="theme" class="hover:opacity-70" />
	<img src={MoonSVG} alt="" class="h-4" />
</div>

<style>
	#theme {
		opacity: 0;
		left: -99999px;
		top: -99999px;
		position: absolute;
	}
	#theme:focus + label::before {
	}

	#theme + label {
		display: flex;
		align-items: center;
		position: relative;
		cursor: pointer;
		transition: 150ms ease-in-out;
	}

	/* container */
	#theme + label::before {
		@apply bg-white;
		content: '';
		height: 1.25em;
		width: 2.5em;
		border-radius: 1em;
		margin-right: 0.5em;
	}

	/* circle */
	#theme + label::after {
		@apply bg-indigo-400;
		content: '';
		height: 0.9em;
		width: 0.9em;
		left: 0.3em;
		border-radius: 1em;
		margin-right: 0.5em;
		position: absolute;
		transition: 150ms ease-in-out;
	}

	#theme:checked + label::after {
		transform: translateX(100%);
	}

	#theme:checked + label {
		color: red;
	}
</style>
