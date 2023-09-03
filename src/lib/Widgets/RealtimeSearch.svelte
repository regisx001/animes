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

	$: open = true;
	function onkeydown(e: any) {
		if (e.key == 'Escape' && open) {
			open = false;
		}
	}
</script>

<svelte:window on:keydown={onkeydown} />

<!-- {#if $searchStore !== null && open === true} -->
{#if $searchStore !== null}
	<section class="absolute top-full overflow-y-scroll z-50 max-h-96 lg:w-[55%] xl:w-[65%]">
		<div class="  bg-black">
			<pre>
				{JSON.stringify(data, null, 2)}
			</pre>
		</div>
	</section>
{/if}
