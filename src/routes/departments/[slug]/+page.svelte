<script lang="ts">
	export let data;

	import * as Table from "$lib/components/ui/table";
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<section class="flex flex-col items-center justify-center pt-44">
	<h1 class="heading brand my-10 text-4xl font-thin uppercase md:text-7xl">
		{data.metadata.title}
	</h1>
	<div class="prose w-[90%] text-justify text-lg">
		<img src={data.metadata.thumbnail} alt={data.metadata.title} class="rounded-xl">
		<svelte:component this={data.content} />
	</div>
	<div class="my-10 grid w-[90%] grid-cols-1 md:grid-cols-6 gap-4">
		<div class="md:col-span-2">
			<Table.Root class="border  border-cyan-400 bg-cyan-400/10">
				<Table.Caption class="brand my-5 text-xl font-light uppercase">Courses</Table.Caption>

				<Table.Header class="text-lg">
					<Table.Row class="brand font-medium">
						<Table.Head>Title</Table.Head>
						<Table.Head class="text-right">Duration</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each data.metadata.courses as course}
						<Table.Row class="text-base">
							<Table.Cell>{course.title}</Table.Cell>
							<Table.Cell class="text-right">{course.duration} yrs</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
		<div class="md:col-span-4">
			<Table.Root class="border border-orange-400 bg-orange-400/10">
				<Table.Caption class="brand my-5 text-xl font-light uppercase">Faculity</Table.Caption>

				<Table.Header class="text-lg">
					<Table.Row class="brand font-medium ">
						<Table.Head>Name</Table.Head>
						<Table.Head>Designation</Table.Head>
						<Table.Head>Qualification</Table.Head>
						<Table.Head class="text-right">Profile</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each data.metadata.faculity as faculity}
						<Table.Row class="text-base">
							<Table.Cell>{faculity.name}</Table.Cell>
							<Table.Cell>{faculity.designation}</Table.Cell>
							<Table.Cell>{faculity.qualification}</Table.Cell>
							<Table.Cell class="text-right">{faculity.profile}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</div>
</section>
