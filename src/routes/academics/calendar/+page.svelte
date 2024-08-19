<script lang="ts">
	import * as Table from "$lib/components/ui/table";
	import { oddSem, evenSem, vacations, impDates, holidays } from "$lib/content/constants/calendar";
</script>

<svelte:head>
	<title>Calendar</title>
</svelte:head>

<section class="flex flex-col items-center justify-center pt-44">
	<h1 class="heading brand my-10 text-4xl font-thin uppercase md:text-7xl">academic calendar</h1>
	<div class="w-[90%] -z-10">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<Table.Root class="border border-orange-400 bg-orange-400/10">
				<Table.Caption class="brand my-5 text-xl font-light uppercase">odd semester</Table.Caption>
				<Table.Header class="text-lg">
					<Table.Row class="brand font-medium ">
						<Table.Head>Event</Table.Head>
						<Table.Head class="text-right">Schedule</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each oddSem as { date, event }}
						<Table.Row class="text-base">
							<Table.Cell>{event}</Table.Cell>
							<Table.Cell class="text-right">{date}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
			<Table.Root class="border border-cyan-400 bg-cyan-400/10">
				<Table.Caption class="brand my-5 text-xl font-light uppercase">even semester</Table.Caption>
				<Table.Header class="text-lg">
					<Table.Row class="brand font-medium ">
						<Table.Head>Event</Table.Head>
						<Table.Head class="text-right">Schedule</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each evenSem as { date, event }}
						<Table.Row class="text-base">
							<Table.Cell>{event}</Table.Cell>
							<Table.Cell class="text-right">{date}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
		<br /><br />
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<Table.Root class="border border-cyan-400 bg-cyan-400/10">
				<Table.Caption class="brand my-5 text-xl font-light uppercase">vacations</Table.Caption>
				<Table.Header class="text-lg">
					<Table.Row class="brand font-medium ">
						<Table.Head>Name</Table.Head>
						<Table.Head class="text-right">Duration</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each vacations as { date, event }}
						<Table.Row class="text-base">
							<Table.Cell>{event}</Table.Cell>
							<Table.Cell class="text-right">{date}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
			<Table.Root class="border border-orange-400 bg-orange-400/10">
				<Table.Caption class="brand my-5 text-xl font-light uppercase"
					>important dates</Table.Caption
				>
				<Table.Header class="text-lg">
					<Table.Row class="brand font-medium ">
						<Table.Head>Event</Table.Head>
						<Table.Head class="text-right">Date</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each impDates as { date, event }}
						<Table.Row class="text-base">
							<Table.Cell>{event}</Table.Cell>
							<Table.Cell class="text-right">{date}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
		<br /><br />
        <Table.Root class="border border-orange-400 bg-orange-400/10">
            <Table.Caption class="brand my-5 text-xl font-light uppercase">holidays</Table.Caption>
            <Table.Header class="text-lg">
                <Table.Row class="brand font-medium ">
                    <Table.Head>Event</Table.Head>
                    <Table.Head class="text-right">Date</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {#each holidays as { date, event }}
                    <Table.Row class="text-base">
                        <Table.Cell>{event}</Table.Cell>
                        <Table.Cell class="text-right">{date}</Table.Cell>
                    </Table.Row>
                {/each}
            </Table.Body>
        </Table.Root>
	</div>
</section>
