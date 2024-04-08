<script lang="ts">
	import { page } from '$app/stores';
	import { gogo } from '$lib';
	import { onMount } from 'svelte';

	let id: string | null;
	$: anime = {};
	$: ready = false;
	// @ts-ignore
	$: genres = anime?.genres || [];

	onMount(async () => {
		page.subscribe(({ url }) => {
			id = url.searchParams.get('id');
		});

		// @ts-ignore
		gogo.fetchAnimeInfo(id).then((data) => {
			anime = data;
			ready = true;
		});
	});

	async function fetchAnimeInfo(id: string) {
		ready = false;
		// @ts-ignore
		return await gogo.fetchAnimeInfo(id);
	}
	$: {
		// @ts-ignore
		fetchAnimeInfo(id).then((data) => {
			anime = data;
			ready = true;
		});
	}
</script>

{#if ready}
	<section class="snap-y snap-mandatory h-full overflow-scroll">
		<section class="h-full snap-start flex flex-col justify-between">
			<section class="flex flex-row justify-between pt-12 mx-[2.5%]">
				<section class="flex flex-col gap-y-14 items-center w-1/4">
					<img
						class="shadow-xl h-96 w-64 rounded-2xl"
						src={anime.image}
						alt="anime manga japan {anime.title}"
					/>

					<div class="flex gap-y-4 font-semibold w-64 items-start flex-col">
						<span> Score: <span class="ml-1 text-warning-400"> 86 </span> </span>
						<span> Status: <span class="ml-1 text-warning-400">Watching</span> </span>
						<span> Episode: <span class="ml-1 text-warning-400">797/?</span> </span>
						<span> Your Score: <span class="ml-1 text-warning-400">Not rated</span> </span>
					</div>
				</section>

				<section class="w-1/2">
					<h1 class="h1 font-bold leading-[60px]">
						{anime?.title}
					</h1>
					<!-- <div>{@html anime.otherName}</div> -->
					<div class="flex flex-row gap-4 mt-10">
						{#each genres as genre}
							<span
								class="chip p-3 rounded-lg leading-5 text-black bg-warning-400 text-base font-medium"
							>
								{genre}
							</span>
						{/each}
					</div>

					<div class="font-semibold flex flex-row gap-4 mt-5">
						<span>
							{anime?.type}
						</span>

						<span>
							{anime?.totalEpisodes}+ eps
						</span>

						<span>
							{anime?.status}
						</span>

						<span>
							{anime?.releaseDate}
						</span>
					</div>

					<div class="mt-5 text-lg text-justify opacity-85">
						{@html anime?.description}
					</div>

					<div class="flex mt-8 flex-row justify-between gap-4">
						<button class="btn h-14 leading-6 text-black rounded-xl bg-warning-400 font-bold">
							<svg
								class="w-5 mr-2"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M12.9615 7.89235C13.1685 7.73214 13.3361 7.52665 13.4513 7.29164C13.5666 7.05663 13.6266 6.79834 13.6266 6.53658C13.6266 6.27482 13.5666 6.01653 13.4513 5.78152C13.3361 5.54651 13.1685 5.34102 12.9615 5.18081C10.2808 3.10657 7.28748 1.47165 4.09351 0.337231L3.50952 0.129752C2.39342 -0.266427 1.21383 0.488369 1.06269 1.64113C0.640479 4.89111 0.640479 8.18205 1.06269 11.432C1.21473 12.5848 2.39342 13.3396 3.50952 12.9434L4.09351 12.7359C7.28748 11.6015 10.2808 9.96659 12.9615 7.89235Z"
									fill="currentColor"
								/></svg
							>
							<span class="opacity-80"> Start Watching | Episode 01 </span>
						</button>

						<button class="btn h-14 leading-6 text-black rounded-xl bg-warning-400 font-bold">
							<svg
								class="w-5 mr-2"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M12.9615 7.89235C13.1685 7.73214 13.3361 7.52665 13.4513 7.29164C13.5666 7.05663 13.6266 6.79834 13.6266 6.53658C13.6266 6.27482 13.5666 6.01653 13.4513 5.78152C13.3361 5.54651 13.1685 5.34102 12.9615 5.18081C10.2808 3.10657 7.28748 1.47165 4.09351 0.337231L3.50952 0.129752C2.39342 -0.266427 1.21383 0.488369 1.06269 1.64113C0.640479 4.89111 0.640479 8.18205 1.06269 11.432C1.21473 12.5848 2.39342 13.3396 3.50952 12.9434L4.09351 12.7359C7.28748 11.6015 10.2808 9.96659 12.9615 7.89235Z"
									fill="currentColor"
								/></svg
							>
							<span class="opacity-80">
								Continue Watching | Episode {anime?.totalEpisodes}
							</span>
						</button>
					</div>
				</section>
				<section class="flex flex-col items-center gap-10 w-1/4">
					<button class="btn mt-10 h-14 leading-6 text-black rounded-xl bg-surface-500 font-bold">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class=""
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 4v16l13 -8z" /></svg
						>
						<span class="opacity-80"> Trailer/PV </span>
					</button>
					<div
						class="card p-6 gap-4 variant-glass-surface flex flex-col w-56 rounded-xl font-semibold"
					>
						<div class="flex flex-col">
							<span> Episode Duration </span>
							<span class="ml-1 text-warning-400"> 24 min </span>
						</div>
						<div class="flex flex-col">
							<span> Start Date </span>
							<span class="ml-1 text-warning-400"> Oct 20, 1999 </span>
						</div>
						<div class="flex flex-col">
							<span> End Date </span>
							<span class="ml-1 text-warning-400"> ? </span>
						</div>
						<div class="flex flex-col">
							<span> Source </span>
							<span class="ml-1 text-warning-400"> Manga </span>
						</div>
						<button class="btn mt-2 h-14 leading-6 rounded-xl variant-ghost-warning font-bold">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-info-square-rounded"
								><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9h.01" /><path
									d="M11 12h1v4h1"
								/><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></svg
							>
							<span class="opacity-80"> More details </span>
						</button>
					</div>
				</section>
			</section>
			<button
				class="btn animate-bounce opacity-85 flex gap-4 w-full py-10 justify-center items-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path
						d="M18 13l-6 6"
					/><path d="M6 13l6 6" /></svg
				>
				<span class=" font-semibold text-xl"> scroll below for all episodes </span>
			</button>
		</section>

		<section class="h-full snap-start">
			<header class="mx-[2.5%] flex flex-row justify-center items-center">
				<h1 class=" h1 font-bold">EPISODES</h1>
				<div class="w-full rounded-xl mt-2 mr-24 ml-10 h-3 bg-white" />
			</header>
		</section>
	</section>
{:else}
	Loading
{/if}

<!-- <pre class="pre">
	{JSON.stringify(id, null, 2)}
</pre>

<pre class="pre">
	{JSON.stringify(anime, null, 2)}
</pre> -->
