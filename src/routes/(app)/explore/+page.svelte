<script lang="ts">
	import { page } from '$app/stores';
	import { FilteringForm, animlist } from '$lib';
	import { onMount } from 'svelte';

	let searchParams = {
		season: '',
		type: '',
		kw: '',
		status: '',
		category: ''
	};
	$: isReady = false;
	$: data = {};

	onMount(async () => {
		page.subscribe(({ url }) => {
			searchParams.kw = url.searchParams.get('kw') || '';
			searchParams.season = url.searchParams.get('season') || '';
			searchParams.type = url.searchParams.get('type') || '';
			searchParams.status = url.searchParams.get('status') || '';
			searchParams.category = url.searchParams.get('category') || '';
		});
	});

	$: {
		new Promise(async (resolve, reject) => {
			isReady = false;
			const animes = await animlist.advancedSearch(
				searchParams?.kw,
				undefined,
				undefined,
				undefined,
				searchParams.type,
				undefined,
				[searchParams?.category],
				undefined,
				undefined,
				searchParams?.status,
				searchParams?.season
			);
			resolve(animes);
		}).then((val) => {
			// @ts-ignore
			data = val;
			isReady = true;
		});
	}
</script>

<svelte:head>
	<title>Explore | Anime Core</title>
</svelte:head>

<FilteringForm {searchParams} />

<!-- {searchParams} -->

<pre class="pre">
	{JSON.stringify(searchParams, null, 2)}
</pre>

<pre class="pre">
	{JSON.stringify(data, null, 2)}
</pre>
