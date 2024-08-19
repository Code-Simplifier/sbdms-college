<script lang="ts">
	import Icon from "@iconify/svelte";
</script>

<div class="flex flex-col md:flex-row w-[90%] rounded-2xl bg-slate-900 p-2 shadow-xl">
	<div class="flex md:w-1/3 flex-col items-start border-b md:border-none p-3">
		<span class="text-xl font-thin text-slate-500">CGPA</span>
		<div class="brand flex w-full items-center justify-between text-4xl font-thin">
			<span class="heading">3.21 / 4</span>
			<Icon icon="fluent:ribbon-star-24-filled" />
		</div>
		<span class="italic text-slate-400">by NAAC</span>
	</div>
	<div class="flex md:w-1/3 flex-col items-start md:border-x p-3">
		<span class="text-xl font-thin text-slate-500">Potential of</span>
		<div class="brand flex w-full items-center justify-between text-4xl font-thin">
			<span class="heading">Excellence</span>
			<Icon icon="ph:trend-up-thin" />
		</div>
		<span class="italic text-slate-400">by GNDU</span>
	</div>
	<div class="flex md:w-1/3 flex-col items-start border-t md:border-none p-3">
		<span class="text-xl font-thin text-slate-500">Grade</span>
		<div class="brand flex w-full items-center justify-between text-4xl font-thin">
			<span class="heading">A</span>
			<Icon icon="fa6-solid:graduation-cap" />
		</div>
		<span class="italic text-slate-400">by NAAC</span>
	</div>
</div>
