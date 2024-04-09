<script lang="ts">
	import { animlist, gogo, mallist } from '$lib';
	import { onMount } from 'svelte';

	$: anime = {};
	async function extractAnilistId(gogoId: string) {
		const anilistId = (await animlist.search(gogoId))?.results[0]?.id;
		return anilistId;
	}
	async function extractMallistId(gogoId: string) {
		const anilistId = (await animlist.search(gogoId))?.results[0]?.malId;
		return anilistId;
	}

	onMount(async () => {
		const id = await extractMallistId('sousou-no-frieren');

		// animlist.fetchAnilistInfoById(id).then((data) => {
		// 	anime = data;
		// });
	});
</script>

<pre class="pre">
	{JSON.stringify(anime, null, 2)}
</pre>
