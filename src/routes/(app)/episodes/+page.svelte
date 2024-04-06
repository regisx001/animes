<script lang="ts">
	import { page } from '$app/stores';
	import {
		EpisodeIframe,
		EpisodeNumbers,
		gogo,
		EpisodeLoader,
		EpisodeOptions,
		EpisodeChangingLoader
	} from '$lib';
	import { onMount } from 'svelte';

	let episodeId: string;
	let animeId: string = '';
	$: anime = {};
	$: episode = {};
	$: isReady = false;
	$: isEpisodeReady = false;

	async function fetchResources(episodeId: string, animeId: string) {
		const [episode, anime] = await Promise.all([
			await gogo.fetchEpisodeServers(episodeId),
			await gogo.fetchAnimeInfo(animeId)
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
</script>

<section class="flex flex-col lg:flex-row h-full w-full">
	{#if isReady}
		<div class="relative p-4 lg:p-10 lg:pl-24 w-full lg:w-[70%]">
			{#if isEpisodeReady}
				<iframe
					sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
					frameborder="0"
					allow="encrypted-media"
					allowfullscreen
					class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
					src={episode[0].url}
					title="Just a episode"
				/>
			{/if}
		</div>
	{:else}
		<EpisodeLoader />
	{/if}
</section>
