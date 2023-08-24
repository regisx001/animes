<script lang="ts">
	import { page } from '$app/stores';
	import { gogo } from '$lib';
	import { onMount } from 'svelte';

	let anime: string | null;
	$: data = {};

	onMount(async () => {
		page.subscribe(({ url }) => {
			anime = url.searchParams.get('anime');
		});

		// @ts-ignore
		data = await gogo.fetchAnimeInfo(anime);
	});
</script>

<pre class="pre">
	{JSON.stringify(data, null, 2)}
</pre>
