<script lang="ts">
	import * as Menubar from "$lib/components/ui/menubar";
	import * as Drawer from "$lib/components/ui/drawer";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

	import Icon from "@iconify/svelte";

	import { NavLinks } from "$lib/content/constants/navigation";
</script>

<div
	class="fixed z-10 mb-5 hidden w-full flex-col items-center justify-center space-y-3 backdrop-blur-lg md:flex"
>
	<a href="/"><img src="/img/image.png" alt="logo" class="mt-4 h-[100px]" /></a>
	
	<Menubar.Root class="border-none bg-transparent font-semibold text-slate-400">
		{#each NavLinks as navLink}
			<Menubar.Menu>
				<Menubar.Trigger class="mb-4 text-lg font-semibold uppercase tracking-wide"
					>{navLink.title}</Menubar.Trigger
				>
				<Menubar.Content>
					{#each navLink.sublinks as sublink}
						<a href={`/${navLink.title.replaceAll(" ", "-")}/${sublink.replaceAll(" ", "-")}`}>
							<Menubar.Item class="p-2 capitalize">
								{sublink}
							</Menubar.Item>
						</a>
					{/each}
				</Menubar.Content>
			</Menubar.Menu>
		{/each}
	</Menubar.Root>
</div>
<div class="flex md:hidden">
	<Drawer.Root>
		<div class="fixed flex w-full justify-between p-4 backdrop-blur-lg">
			<a href="/"><img src="/img/image.png" alt="logo" class="h-[40px]" /></a>
			<Drawer.Trigger class="">
				<Icon icon="clarity:menu-line" class="text-xl" />
			</Drawer.Trigger>
		</div>
		<Drawer.Content>
			<br />
			<div class="grid grid-cols-2">
				{#each NavLinks as navLink}
					<DropdownMenu.Root>
						<DropdownMenu.Trigger class="p-4 font-medium uppercase tracking-wide"
							>{navLink.title}</DropdownMenu.Trigger
						>
						<DropdownMenu.Content>
							{#each navLink.sublinks as sublink}
								<DropdownMenu.Group>
									<a
										href={`/${navLink.title.replaceAll(" ", "-")}/${sublink.replaceAll(" ", "-")}`}
									>
										<DropdownMenu.Item class="text-base capitalize">{sublink}</DropdownMenu.Item>
									</a>
								</DropdownMenu.Group>
							{/each}
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				{/each}
			</div>
		</Drawer.Content>
	</Drawer.Root>
</div>
