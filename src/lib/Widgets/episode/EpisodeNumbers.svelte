<script lang="ts">
</script>

<episode-info class="col-span-12 flex flex-col gap-3 p-5 md:col-span-4 md:gap-[1.5vw] md:p-0">
	<header class="px-4 pt-10 flex items-center justify-between">
		<span class="text-lg font-bold md:text-[1.35vw]">Episodes</span>
		<button
			class="btn flex items-center gap-2 rounded bg-surface-500 px-3 py-2 text-xs font-semibold leading-none md:gap-[0.5vw] md:rounded-[0.35vw] md:px-[0.75vw] md:py-[0.5vw] md:text-[1vw]"
		>
			EPS: 1 - 60
			<svg xmlns="http://www.w3.org/2000/svg" class="w-3 md:w-[1vw]" fill="none" viewBox="0 0 24 24"
				><path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="3.5"
					d="M6 9L12 15L18 9"
				/></svg
			></button
		>
	</header>
	<episodes class="grid grid-cols-7 gap-2 p-4 md:grid-cols-6 md:gap-[0.75vw]">
		{#each [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] as item, index}
			<a
				href="#"
				class="bg-primary-600 btn rounded py-3 text-sm font-semibold leading-none md:rounded-[0.35vw] md:py-[0.75vw] md:text-[1.2vw]"
				>{index + 1}
			</a>
		{/each}
	</episodes>
</episode-info>
