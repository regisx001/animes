<script lang="ts">
	import { page } from '$app/stores';
	import { gogo, RecentAnimePage, Carousel } from '$lib';
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';

	async function fetchAnimes(page: number = 1) {
		const data = await gogo.fetchRecentEpisodes(page);
		return data;
	}
	$: curr_page = 1;
	$: data = {};
	$: is_ready = false;
	$: loading_more = false;
	onMount(async () => {
		page.subscribe(({ url }) => {
			curr_page = Number(url.searchParams.get('page')) || 1;
		});

		await fetchAnimes(curr_page).then((val) => {
			data = val;
			is_ready = true;
		});
	});

	$: {
		new Promise(async (resolve, reject) => {
			const animes = fetchAnimes(curr_page);
			resolve(animes);
		}).then((val) => {
			// @ts-ignore
			data = val;
		});
	}
</script>

<svelte:head>
	<title>Home | Core Anime</title>
</svelte:head>

{#if is_ready}
	<Carousel />
	<RecentAnimePage {data} />
	<!-- <div
		class="w-full h-5 bg-red-600"
		use:inview
		on:inview_enter={() => {
			loading_more = true;
			fetchAnimes(curr_page + 1).then(({ results }) => {
				console.log('Loading Page ' + curr_page);
				// @ts-ignore
				data.results = [...data.results, ...results];
				curr_page++;
				loading_more = false;
			});
		}}
	/> -->

	{#if loading_more}
		<div class="font-bold absolute top-1/2 left-1/2 text-2xl h-10 bg-red-600">Loading Kbira</div>
	{/if}
{/if}

<!-- <pre class="pre">
	{JSON.stringify(data, null, 2)}
</pre> -->
