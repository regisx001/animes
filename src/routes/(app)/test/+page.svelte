<script lang="ts">
	import { gogo } from '$lib';
	import axios from 'axios';
	import { onMount } from 'svelte';
	$: animeId = 'one-piece';
	let data = {};
	let kitsuInfo = {};

	async function getKitsuInfo(animeId: string) {
		const info = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${animeId}`);
		return info;
	}

	async function getAnimeInfo(animeId: string) {
		data = {};
		kitsuInfo = {};
		return {
			anime: await gogo.fetchAnimeInfo(animeId),
			meta: await getKitsuInfo(animeId)
		};
	}

	onMount(async () => {
		await getAnimeInfo(animeId).then((values) => {
			data = values.anime;
			kitsuInfo = values.meta;
		});
	});

	$: {
		getAnimeInfo(animeId).then((values) => {
			data = values.anime;
			kitsuInfo = values.meta;
		});
	}
</script>

<div class="flex flex-row">
	<button
		on:click={() => {
			animeId = 'one-piece';
		}}
		class="btn">One Piece</button
	>
	<button
		on:click={() => {
			animeId = 'kusuriya-no-hitorigoto';
		}}
		class="btn">Kusuriya</button
	>
</div>
<pre class="pre">
	{JSON.stringify('Id :' + animeId, null, 2)}
	{JSON.stringify(kitsuInfo, null, 2)}
</pre>
