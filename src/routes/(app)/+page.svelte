<script lang="ts">
	import { page } from '$app/stores';
	import { gogo } from '$lib';
	import { onMount, beforeUpdate } from 'svelte';
	$: data = {};
	$: currentPage = 1;
	onMount(async () => {
		currentPage = Number($page.url.searchParams.get('page')) || 1;
		// data = await gogo.fetchRecentEpisodes(currentPage);
	});

	beforeUpdate(async () => {
		currentPage = Number($page.url.searchParams.get('page')) || 1;
	});

	$: {
		// new Promise(async (resolve, reject) => {
		// 	resolve(await gogo.fetchRecentEpisodes(currentPage));
		// }).then((val) => {
		// 	// @ts-ignore
		// 	data = val;
		// });
	}
</script>

{currentPage}

<form action="." method="get">
	<input hidden name="page" value={currentPage + 1} type="text" />
	<button class="btn">Next</button>
</form>
<!-- 
<pre class="pre">
	{JSON.stringify(data, null, 2)}
</pre> -->
