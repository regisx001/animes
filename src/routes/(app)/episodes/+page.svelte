<script lang="ts">
	import { page } from '$app/stores';
	import { EpisodeIframe, EpisodeNumbers, gogo } from '$lib';
	import { onMount } from 'svelte';

	let episodeId: string;
	let animeId: string = '';
	$: anime = {};
	$: episode = {};
	$: isReady = false;
	$: isEpisodeReady = false;

	async function fetchResources(episodeId: string, animeId: string) {
		const [episode, anime] = await Promise.all([
			(await fetch(`https://api.consumet.org/anime/gogoanime/watch/${episodeId}`)).json(),
			gogo.fetchAnimeInfo(animeId)
		]);

		return { episode, anime };
	}
	onMount(async () => {
		page.subscribe(({ url }) => {
			episodeId = String(url.searchParams.get('id'));
		});
		animeId = await gogo.fetchAnimeIdFromEpisodeId(episodeId);

		await fetchResources(episodeId, animeId).then((value) => {
			anime = value.anime;
			episode = value.episode;
		});
		isReady = true;
		isEpisodeReady = true;
	});

	$: {
		new Promise(async (resolve, reject) => {
			isEpisodeReady = false;
			const episode = await (
				await fetch(`https://api.consumet.org/anime/gogoanime/watch/${episodeId}`)
			).json();
			resolve(episode);
		}).then((val) => {
			// @ts-ignore
			episode = val;
			isEpisodeReady = true;
		});
	}
</script>

<section class="flex flex-col lg:flex-row h-full w-full">
	{#if isReady}
		<div class="p-10 h-full w-full lg:w-[70%]">
			{#if isEpisodeReady}
				<EpisodeIframe
					{episode}
					title={anime.title + ' Episode ' + episodeId.split('-episode-')[1]}
				/>
			{/if}
		</div>

		<div class="h-full w-full lg:w-[30%]">
			<EpisodeNumbers {anime} />
		</div>
	{/if}
</section>

<!-- <pre class="pre">
	{JSON.stringify(data.anime?.episodes.slice(0, 60), null, 2)}
</pre> -->
