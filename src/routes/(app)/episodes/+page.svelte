<script lang="ts">
	import { page } from '$app/stores';
	import { gogo } from '$lib';
	import { onMount } from 'svelte';

	let episode: string | null;
	$: data = {};

	onMount(async () => {
		page.subscribe(({ url }) => {
			episode = url.searchParams.get('id');
		});

		// @ts-ignore
		// data = await gogo.fetchAnimeInfo(anime);
	});
</script>

<pre class="pre">
	{JSON.stringify(episode, null, 2)}
</pre>
