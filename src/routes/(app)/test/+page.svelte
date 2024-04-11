<script lang="ts">
	import { animlist, gogo, mallist, CompactAnimeCard } from '$lib';
	import { onMount } from 'svelte';

	$: anime = {};
	$: dummy = {};
	$: results = anime.results || [];
	async function extractAnilistId(gogoId: string) {
		const anilistId = (await animlist.search(gogoId))?.results[0]?.id;
		return anilistId;
	}
	async function extractMallistId(gogoId: string) {
		const anilistId = (await animlist.search(gogoId))?.results[0]?.malId;
		return anilistId;
	}

	onMount(async () => {
		gogo.search('one').then((data) => {
			anime = data;
		});
	});
</script>

<section class="mt-5 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-3 md:gap-5">
	{#each results as anime}
		<CompactAnimeCard {anime} />
	{/each}
</section>

<pre class="pre">
	{JSON.stringify(dummy, null, 2)}
</pre>
