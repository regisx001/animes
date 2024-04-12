<script lang="ts">
	import { page } from '$app/stores';
	import { gogo, Loader, RecentAnimeCard, RecentAnimeSkeleton } from '$lib';
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';

	async function fetchAnimes(page: number = 1) {
		const data = await gogo.fetchRecentEpisodes(page);
		return data;
	}
	$: curr_page = 1;
	$: recentEpisodes = {};
	$: is_ready = false;
	$: loading_more = false;
	onMount(async () => {
		page.subscribe(({ url }) => {
			curr_page = Number(url.searchParams.get('page')) || 1;
		});

		await fetchAnimes(curr_page).then((val) => {
			setTimeout(() => {
				recentEpisodes = val;
				is_ready = true;
			}, 2000);
		});
	});
</script>

<svelte:head>
	<title>Home | Core Anime</title>
</svelte:head>

{#if is_ready}
	<section
		class="mx-[2.5%] mt-5 relative grid grid-cols-3 gap-3 md:mt-[1.25vw] md:grid-cols-6 md:gap-[1.5vw]"
	>
		{#each recentEpisodes?.results as episodes}
			<RecentAnimeCard anime={episodes} />
		{/each}
		<div
			class="absolute top-[65%] left-0 w-full h-5"
			use:inview
			on:inview_enter={() => {
				loading_more = true;
				fetchAnimes(curr_page + 1).then((data) => {
					loading_more = true;
					// @ts-ignore
					recentEpisodes.results = [...recentEpisodes.results, ...data.results];
					curr_page++;
					setTimeout(() => {
						loading_more = false;
					}, 1000);
				});
			}}
		/>
	</section>

	{#if loading_more}
		<Loader />
	{/if}
{:else}
	<section
		class="mx-[2.5%] mt-5 relative grid grid-cols-3 gap-3 md:mt-[1.25vw] md:grid-cols-6 md:gap-[1.5vw]"
	>
		{#each Array(15) as episodes}
			<RecentAnimeSkeleton />
		{/each}
	</section>
{/if}

<!-- <pre class="pre">
	{JSON.stringify(data, null, 2)}
</pre> -->
