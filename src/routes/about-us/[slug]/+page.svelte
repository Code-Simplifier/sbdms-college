<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<section class="flex flex-col items-center justify-center pt-44">
	<h1 class="heading brand my-10 text-4xl font-thin uppercase md:text-7xl">
		{data.metadata.title}
	</h1>
	<div class="prose w-[90%] text-justify text-lg">
		<svelte:component this={data.content} />
	</div>
</section>
