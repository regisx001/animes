<script lang="ts">
	import { searchStore } from '$lib';
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
	export let data: any;
</script>

<section
	class="grid px-2 py-2 max-h-[520px] lg:max-h-[700px] grid-cols-[repeat(auto-fill,minmax(230px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(270px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-2 overflow-y-scroll"
>
	{#each data?.results as anime}
		<a
			on:click={() => {
				$searchStore = 'no-data';
				modalStore.close();
			}}
			href="/anime?id={anime.id}"
		>
			<div class="flex flex-row hover:variant-glass-surface rounded-2xl p-2">
				<div
					style="background-image: url({anime.image});"
					class="relative rounded-xl shadow-xl w-[22rem] h-[15rem] lg:h-[17rem] bg-center bg-cover bg-no-repeat"
				/>

				<div class="flex flex-col h-[15rem] lg:h-[17rem] w-full mt-2 ml-5 justify-center">
					<div class="flex flex-row">
						<span class="mr-1 font-bold">Year :</span>
						<span class="rounded font-bold chip variant-glass-primary">
							<span>{anime.releaseDate}</span>
						</span>
					</div>

					<hr class="m-2 ml-0" />
					<h1 class="h3 mt-2 font-bold">
						{anime.title}
					</h1>

					<div class="flex flex-row w-full mt-auto mb-2">
						<span class="mr-1 font-bold">Type :</span>
						<span class="rounded ml-5 font-bold chip variant-glass-error">
							<span>{anime.subOrDub}</span>
						</span>
					</div>
				</div>
			</div>
		</a>
	{/each}
</section>
