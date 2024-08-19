<script>
	import "../styles/app.css";
	import "@fontsource-variable/oxanium";
	import "@fontsource-variable/quicksand"

	import Navbar from "$lib/components/custom/navbar.svelte";
</script>

<div
	class="content absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
>
	<Navbar />
	<slot />
</div>
