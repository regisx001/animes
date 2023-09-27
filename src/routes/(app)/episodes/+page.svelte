<script lang="ts">
	import { page } from '$app/stores';
	import { EpisodeIframe, EpisodeNumbers } from '$lib';
	import { onMount } from 'svelte';

	let episode: string | null;
	$: data = {};
	$: isReady = false;

	onMount(async () => {
		page.subscribe(({ url }) => {
			episode = url.searchParams.get('id');
		});

		data = await (await fetch(`https://api.consumet.org/anime/gogoanime/watch/${episode}`)).json();
		isReady = true;
	});
</script>

<section class="flex flex-col lg:flex-row h-full w-full">
	{#if isReady}
		<div class="p-10 h-full w-full lg:w-[70%]">
			<EpisodeIframe episode={data} />
		</div>

		<div class="h-full w-full lg:w-[30%]">
			<EpisodeNumbers />
		</div>
	{/if}
</section>
