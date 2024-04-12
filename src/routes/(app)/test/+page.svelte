<script lang="ts">
	import { animlist, Page400 } from '$lib';
	import { onMount } from 'svelte';

	$: anime = {};
	$: results = anime.results || [];
	async function extractAnilistId(gogoId: string) {
		const anilistId = (await animlist.search(gogoId))?.results[0]?.id;
		return anilistId;
	}
	async function extractMallistId(gogoId: string) {
		const anilistId = (await animlist.search(gogoId))?.results[0]?.malId;
		return anilistId;
	}

	onMount(async () => {});
</script>

<Page400 />
<!-- <pre class="pre">
	{JSON.stringify(dummy, null, 2)}
</pre> -->
