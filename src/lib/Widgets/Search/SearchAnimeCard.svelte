<script lang="ts">
	import { searchStore } from '$lib';
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
	export let data: any;
</script>

<!-- <pre>
    {JSON.stringify(data, null, 2)}
</pre> -->

<section class="flex flex-col gap-2 py-2 max-h-[580px] overflow-y-scroll">
	{#each data?.results as anime}
		<!-- <div>{JSON.stringify(anime, null, 2)}</div> -->
		<a
			on:click={() => {
				$searchStore = 'no-data';
				modalStore.close();
			}}
			href="/anime?id={anime.id}"
		>
			<div class="flex flex-row hover:variant-glass-surface rounded-2xl w-full h-[16rem] p-2">
				<!-- <img src={anime.image} alt="" srcset="" /> -->
				<div
					style="background-image: url({anime.image});"
					class=" rounded-xl shadow-xl w-[11rem] h-[15rem] bg-cover bg-no-repeat"
				/>

				<div class="flex flex-col gap-4 justify-center">
					<strong class="font-extrabold text-2xl">
						{anime.title}
					</strong>
					<strong class="font-extrabold">
						{anime.releaseDate}
					</strong>
				</div>
			</div>
		</a>
	{/each}
</section>
