<script lang="ts">
	import { ThemeToggle } from '@/ui/interactive'
	// assets
	import LogoSVG from '@/assets/desktop/logo.svg'
	import HeaderSVG from '@/assets/desktop/bg-pattern-header.svg'
</script>

<div class="flex justify-between">
	<!-- logo /-->
	<img src={LogoSVG} alt="" />
	<ThemeToggle />
</div>

<!-- bg /-->
<div class="fixed w-screen -z-10 top-0 left-0">
	<img
		src={HeaderSVG}
		alt=""
		class="w-full h-36 object-cover object-bottom"
	/>
</div>
