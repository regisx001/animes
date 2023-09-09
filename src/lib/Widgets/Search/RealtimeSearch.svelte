<script lang="ts">
	import { page } from '$app/stores';
	import { gogo, SearchAnimeCard } from '$lib';
	import { searchStore } from '$lib/stores';
	import { beforeUpdate, onMount } from 'svelte';

	$: searchKeyWords = '';
	$: data = {};
	$: isReady = false;
	onMount(async () => {
		searchStore.subscribe((keywords) => {
			if (keywords === 'no-data') {
			} else {
				// @ts-ignore
				searchKeyWords = keywords;
			}
		});
	});

	$: {
		new Promise(async (resolve, reject) => {
			isReady = false;
			const animes = await gogo.search(searchKeyWords);
			resolve(animes);
		}).then((val) => {
			// @ts-ignore
			data = val;
			isReady = true;
		});
	}
</script>

<section class="mt-10 mb-auto h-[600px] hide-scrollbar z-50 lg:w-[55%] xl:w-[65%]">
	<div class="card variant-glass-surface h-full">
		<input
			placeholder="Search ...."
			bind:value={searchKeyWords}
			on:input={() => {
				if (searchKeyWords !== '') {
					setTimeout(() => {
						$searchStore = searchKeyWords;
					}, 500);
				} else {
					$searchStore = 'no-data';
				}
			}}
			class="input"
			type="text"
		/>
		{#if isReady}
			<SearchAnimeCard {data} />
		{/if}
	</div>
</section>
