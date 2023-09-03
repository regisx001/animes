<script lang="ts">
	import { page } from '$app/stores';
	import { gogo } from '$lib/providers';
	import { searchStore } from '$lib/stores';
	import { beforeUpdate, onMount } from 'svelte';

	$: searchKeyWords = '';
	$: data = {};
	$: isReady = false;
	onMount(async () => {
		searchStore.subscribe((keywords) => {
			// @ts-ignore
			searchKeyWords = keywords;
		});

		if (searchKeyWords !== '' && searchKeyWords !== null) {
			data = await gogo.search(searchKeyWords);
		}
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

{#if $searchStore !== null}
	<div class="absolute top-full m-4 z-50 max-h-96 overflow-y-scroll lg:w-[55%] xl:w-[65%] bg-black">
		<pre>
			{JSON.stringify(data, null, 2)}
		</pre>
	</div>
{/if}
