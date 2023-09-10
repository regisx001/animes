<script lang="ts">
	import { searchStore } from '$lib';
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
	export let data: any;
</script>

<!-- <pre>
    {JSON.stringify(data, null, 2)}
</pre> -->

<section
	class="grid max-h-[520px] lg:max-h-[700px] grid-cols-[repeat(auto-fill,minmax(140px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2 overflow-y-scroll"
>
	{#each data?.results as anime}
		<a
			on:click={() => {
				$searchStore = 'no-data';
				modalStore.close();
			}}
			href="/anime?id={anime.id}"
		>
			<div class="flex flex-col hover:variant-glass-surface rounded-2xl p-2">
				<div
					style="background-image: url({anime.image});"
					class="relative rounded-xl shadow-xl w-full h-[15rem] lg:h-[17rem] bg-center bg-cover bg-no-repeat"
				>
					<div class="variant-glass-primary rounded absolute -top-0 font-bold -right-0 z-10">
						<span class="chip variant-soft">
							<span>{anime.releaseDate}</span>
						</span>
					</div>
				</div>

				<div class="flex flex-col justify-center">
					<span class="font-bold">
						{anime.title}
					</span>
				</div>
			</div>
		</a>
	{/each}
</section>
