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
	<div class="card rounded-xl variant-glass-surface h-full">
		<header class="rounded-t-xl bg-surface-300-600-token flex items-center">
			<div class="text-xl ml-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-search"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
					<path d="M21 21l-6 -6" />
				</svg>
			</div>
			<input
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
				class="bg-transparent border-0 ring-0 focus:ring-0 w-full p-4 text-lg"
				type="search"
				placeholder="Search..."
			/>
		</header>
		{#if isReady}
			<SearchAnimeCard {data} />
		{/if}
	</div>
</section>
