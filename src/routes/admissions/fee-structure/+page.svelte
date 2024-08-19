<script>
	import * as Table from "$lib/components/ui/table";
	import { fee } from "$lib/content/constants/fee";
</script>

<svelte:head>
	<title>Fee Structure</title>
</svelte:head>

<section class="flex flex-col items-center justify-center pt-44">
	<h1 class="heading brand my-10 text-4xl font-thin uppercase md:text-7xl">fee structure</h1>
	<div class="w-[90%]">
		<Table.Root class="border border-orange-400 bg-orange-400/10">
			<Table.Header class="text-lg">
				<Table.Row class="brand font-medium ">
					<Table.Head>Programme</Table.Head>
					<Table.Head>Quarter 1</Table.Head>
					<Table.Head>Quarter 2</Table.Head>
					<Table.Head>Quarter 3</Table.Head>
					<Table.Head>Quarter 4</Table.Head>
					<Table.Head class="text-right">Total Fee</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each fee as { progName, q1, q2, q3, q4 }}
					<Table.Row class="text-base">
						<Table.Cell>{progName}</Table.Cell>
						<Table.Cell>{q1.toLocaleString("en-IN")}</Table.Cell>
						<Table.Cell>{q2.toLocaleString("en-IN")}</Table.Cell>
						<Table.Cell>{q3.toLocaleString("en-IN")}</Table.Cell>
						<Table.Cell>{q4.toLocaleString("en-IN")}</Table.Cell>
						<Table.Cell class="text-right font-bold"
							>{(q1 + q2 + q3 + q4).toLocaleString("en-IN")}</Table.Cell
						>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</section>
