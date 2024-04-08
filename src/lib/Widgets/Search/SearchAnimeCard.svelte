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
	class="max-h-[520px] lg:max-h-[700px] mt-5 grid grid-cols-3 gap-3 p-6 md:mt-[1.25vw] md:grid-cols-5 md:gap-5 overflow-y-scroll"
>
	{#each data.results as anime}
		<!-- content here -->
		<a
			on:click={() => {
				$searchStore = 'no-data';
				modalStore.close();
			}}
			href="/anime?id={anime.id}"
			class="relative col-span-1 flex flex-col gap-2 md:gap-[0.5vw]"
			><div class="relative" aria-expanded="false">
				<div class="h-60 w-full rounded-md object-cover object-center md:h-80 md:rounded-[0.35vw]">
					<img
						class="h-60 w-full rounded-md object-cover object-center md:h-80 md:rounded-[0.35vw]"
						src={anime.image}
						alt="The girl I like to forgot her name"
						style=""
						loading="lazy"
					/>
				</div>
				<anime-info
					class="absolute inset-x-0 bottom-0 rounded-b-lg backdrop-blur md:rounded-b-[0.5vw]"
					><div class="flex flex-col gap-1 bg-surface-900/90 p-3 md:gap-[0.35vw] md:p-[1vw]">
						<scroll-area
							class="block h-full w-full overflow-y-scroll overscroll-y-contain scrollbar-thin [scrollbar-color:_rgba(255,255,255,0.12)_transparent]"
							><div>
								<div
									class="text-sm font-semibold md:text-[1vw] md:leading-[1.35vw] md:max-h-[1.35vw] md:hover:max-h-[10vw] duration-300 overflow-hidden ease-in-out scrollbar-none hover:overflow-y-scroll"
								>
									<span
										class="line-clamp-1 md:line-clamp-none [&amp;:not(:hover)]:[mask-image:_linear-gradient(90deg,_rgba(7,5,25)_75%,_rgba(0,0,0,0)_100%)]"
										>{anime.title}</span
									>
								</div>
							</div></scroll-area
						>
						<anime_info
							class="flex items-center gap-2 text-xs leading-none text-surface-50 md:gap-[0.5vw] md:text-[0.8vw]"
						>
							<svg
								class="w-1 opacity-75 md:w-[0.25vw]"
								viewBox="0 0 10 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								><circle cx="5" cy="5" r="5" fill="currentColor" /></svg
							> <episodes_count> {anime.releaseDate}</episodes_count></anime_info
						>
					</div></anime-info
				>
			</div>
		</a>
	{/each}
</section>

<!-- <section
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
</section> -->
