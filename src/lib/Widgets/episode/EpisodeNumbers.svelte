<script lang="ts">
	import { ListBox, ListBoxItem, popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	export let anime: any;
	export let episodeId: any;

	$: episodeNumber = episodeId.split('-episode-')[1];
	$: animeEpisodes = anime.episodes;
	$: animeEpisodesLength = animeEpisodes.length;

	$: maxEpisode = chunkArray(Array(Number(episodeNumber))).length * 50;

	$: episodes = animeEpisodes.slice(maxEpisode - 50, maxEpisode);
	// $: episodesRange = `EPS: 1 - ${animeEpisodesLength >= 50 ? '50' : animeEpisodesLength}`;
	$: episodesRange = `EPS: ${maxEpisode - 50 + 1}- ${maxEpisode}`;

	const popupCombobox: PopupSettings = {
		event: 'focus-click',
		target: 'episodes',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	const chunkArray: any = (arr: [], size = 50) =>
		arr.length > size ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)] : [arr];
</script>

<episode-info
	class="col-span-12 flex flex-col gap-3 lg:px-5 mt-8 lg:mt-0 p-2 md:col-span-4 md:gap-[1.5vw] md:p-0"
>
	<header class="px-4 flex items-center justify-between">
		<span class="text-lg font-bold md:text-[1.35vw]">Episodes</span>
		<div class="flex gap-2 w-full flex-row">
			<button
				on:click={() => {
					maxEpisode = maxEpisode - 50;
					episodesRange = `EPS: ${maxEpisode - 50 + 1} - ${maxEpisode}`;
				}}
				class="btn"
				disabled={maxEpisode - 50 <= 0}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-player-track-prev-filled"
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
					<path
						d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z"
						stroke-width="0"
						fill="currentColor"
					/>
					<path
						d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z"
						stroke-width="0"
						fill="currentColor"
					/>
				</svg>
			</button>
			<button
				use:popup={popupCombobox}
				class=" flex items-center justify-center w-full gap-2 rounded bg-surface-500 px-3 py-2 text-xs font-semibold leading-none md:gap-[0.5vw] md:rounded-[0.35vw] md:px-[0.75vw] md:py-[0.5vw] md:text-[1vw]"
			>
				{episodesRange}
			</button>
			<button
				on:click={() => {
					maxEpisode = maxEpisode + 50;
					episodesRange = `EPS: ${maxEpisode - 50 + 1} - ${maxEpisode}`;
				}}
				class="btn"
				disabled={maxEpisode >= animeEpisodesLength}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-player-track-next-filled"
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
					<path
						d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z"
						stroke-width="0"
						fill="currentColor"
					/>
					<path
						d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z"
						stroke-width="0"
						fill="currentColor"
					/>
				</svg>
			</button>
		</div>
	</header>
	<episodes class="grid grid-cols-6 gap-1 pt-0 p-4 md:grid-cols-5 md:gap-3">
		{#each episodes as episode}
			<a
				href="/episodes?id={episode.id}"
				class:bg-primary-500={episodeId == episode.id}
				class:bg-surface-400={episodeId != episode.id}
				class="btn rounded py-3 text-sm font-semibold leading-none md:rounded-[0.35vw] md:py-[0.75vw] md:text-[1.2vw]"
				>{episode.number}
			</a>
		{/each}
	</episodes>
	<div class="card w-52 shadow-xl p-4 h-60 overflow-scroll" data-popup="episodes">
		<ListBox rounded="rounded-xl">
			{#each chunkArray(animeEpisodes) as arrOf50, id}
				<ListBoxItem
					on:click={() => {
						episodesRange = `EPS: ${50 * id + 1} - ${50 * id + 50}`;
					}}
					bind:group={maxEpisode}
					name={`${id}`}
					value={50 * id + 50}
				>
					{`EPS: ${50 * id + 1} - ${50 * id + 50}`}
				</ListBoxItem>
			{/each}
		</ListBox>
		<div class="arrow bg-surface-100-800-token" />
	</div>
</episode-info>
