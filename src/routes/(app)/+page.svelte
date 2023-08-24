<script lang="ts">
	import { page } from '$app/stores';
	import { gogo, RecentAnimePage } from '$lib';
	import { onMount } from 'svelte';

	async function fetchAnimes(page: number = 1) {
		const data = await gogo.fetchRecentEpisodes(page);
		return data;
	}
	$: curr_page = 1;
	$: data = {};
	$: is_ready = false;
	onMount(async () => {
		page.subscribe(({ url }) => {
			curr_page = Number(url.searchParams.get('page')) || 1;
		});

		await fetchAnimes(curr_page).then((val) => {
			data = val;
			is_ready = true;
		});
	});

	$: {
		new Promise(async (resolve, reject) => {
			const animes = fetchAnimes(curr_page);
			resolve(animes);
		}).then((val) => {
			// @ts-ignore
			data = val;
		});
	}
</script>

{curr_page}

<form action="." method="get">
	<input hidden name="page" value={curr_page + 1} type="text" />
	<button class="btn">Next</button>
</form>

{#if is_ready}
	<RecentAnimePage {data} />
{/if}

<!-- <pre class="pre">
	{JSON.stringify(data, null, 2)}
</pre> -->
