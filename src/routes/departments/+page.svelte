<script lang="ts">
	export let data;
	import Icon from "@iconify/svelte";
</script>

<svelte:head>
	<title>Departments</title>
</svelte:head>

<section class="flex flex-col items-center justify-center pt-44">
	<h1 class="heading brand my-10 text-4xl font-thin uppercase md:text-7xl">Departments</h1>
	<div class="grid w-[90%] grid-cols-1 md:grid-cols-3 gap-4">
		{#each data.departments as department}
			<a
				href={`/departments/${department.slug}`}
				class="relative flex h-[350px] w-full flex-col items-center justify-center rounded-xl border border-b-orange-400 border-t-cyan-400 bg-slate-900"
			>
				<div class="flex h-full items-center justify-center text-7xl">
					<Icon icon={department.icon} />
				</div>
				<div
					class="absolute bottom-3 w-[95%] rounded-lg flex justify-between items-center bg-slate-800 p-3 transition-all duration-200 hover:bottom-4"
				>
					<h1 class="text-xl font-thin">{department.title}</h1>
					<Icon icon="fluent:open-20-regular" font-size="30px" />
				</div>
			</a>
		{/each}
	</div>
</section>
