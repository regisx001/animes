<script lang="ts">
	import { page } from '$app/stores';
	import { gogo } from '$lib';
	import { beforeUpdate, onMount } from 'svelte';

	$: searchKeyWords = '';
	$: data = {};
	onMount(async () => {
		page.subscribe(({ url }) => {
			searchKeyWords = url.searchParams.get('keywords') || '';
		});

		if (searchKeyWords !== '') {
			data = await gogo.search(searchKeyWords);
		}
	});

	beforeUpdate(async () => {
		searchKeyWords = $page.url.searchParams.get('keywords') || '';
	});

	$: {
		new Promise(async (resolve, reject) => {
			const animes = await gogo.search(searchKeyWords);
			resolve(animes);
		}).then((val) => {
			// @ts-ignore
			data = val;
		});
	}
</script>

<pre class="pre">
    {JSON.stringify(data, null, 2)}
</pre>
