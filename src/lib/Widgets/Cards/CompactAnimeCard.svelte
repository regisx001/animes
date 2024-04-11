<script lang="ts">
	import { base } from '$app/paths';
	import { gogo } from '$lib/providers';
	import { onMount } from 'svelte';

	export let anime = {};
	// @ts-ignore
	$: id = anime?.id || '';
	$: anime_meta = {};
	$: ready = false;
	onMount(() => {
		gogo.fetchAnimeInfo(id).then((data) => {
			anime_meta = data;
			ready = true;
		});
	});
</script>

<!-- Container Classes : class="mt-5 grid grid-cols-2 gap-3 md:mt-[1.25vw] md:grid-cols-3 md:gap-[1.5vw]" -->

<a href="{base}/anime?id={anime?.id}" class="relative col-span-1 grid grid-cols-1 md:grid-cols-2">
	<div class="relative">
		<div
			class="h-56 w-full rounded-t-lg object-cover object-center md:h-[20vw] md:rounded-l-[0.35vw]"
		>
			<img
				class="h-56 w-full rounded-t-lg object-cover object-center md:h-[20vw] md:rounded-l-[0.35vw]"
				src={anime?.image}
				alt="One piece"
				style=""
				loading="lazy"
			/>
		</div>
		<anime-info
			class="absolute inset-x-0 bottom-0 rounded-b-lg backdrop-blur md:rounded-l-[0.35vw]"
		>
			<div class="flex flex-col bg-surface-900/90 p-3 md:gap-[0.35vw] md:p-[1vw]">
				<scroll-area
					class="block h-full w-full overflow-y-scroll overscroll-y-contain scrollbar-thin [scrollbar-color:_rgba(255,255,255,0.12)_transparent]"
				>
					<div>
						<div
							class="text-sm font-semibold md:text-[1vw] md:leading-[1.35vw] md:max-h-[1.35vw] md:hover:max-h-[10vw] duration-300 overflow-hidden ease-in-out scrollbar-none hover:overflow-y-scroll"
						>
							<span
								class="line-clamp-1 md:line-clamp-none [&amp;:not(:hover)]:[mask-image:_linear-gradient(90deg,_rgba(7,5,25)_75%,_rgba(0,0,0,0)_100%)]"
							>
								{anime?.title}
							</span>
						</div>
					</div></scroll-area
				>
				{#if ready}
					<!-- content here -->
					<status class="line-clamp-1 text-xs text-surface-50 md:line-clamp-none md:text-[0.8vw]">
						{anime_meta?.status}
					</status>
				{/if}
			</div>
		</anime-info>
	</div>
	<anime-details
		class="  flex flex-col justify-between rounded-r-lg bg-surface-400/25 md:rounded-r-[0.35vw]"
	>
		{#if ready}
			<div class="flex flex-col gap-1 p-3 leading-none text-surface-50 md:gap-[0.5vw] md:p-[1vw]">
				<type class="text-xs font-semibold capitalize md:text-[1vw]">
					{anime_meta?.type}
				</type>
				<div class="flex items-center gap-1 md:gap-[0.5vw]">
					<release-time class="text-xs md:text-[0.8vw]">
						{anime?.releaseDate}
					</release-time>
					<svg
						class="w-1 opacity-50 md:w-[0.25vw]"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><circle cx="5" cy="5" r="5" fill="currentColor" /></svg
					>
					<episodes class="text-xs md:text-[0.8vw]">{anime_meta?.totalEpisodes} episodes</episodes>
				</div>
				<scroll-area
					class="max-h-24 md:max-h-[11vw] md:mt-[0.5vw] pr-3 md:pr-[0.75vw] block h-full w-full overflow-y-scroll overscroll-y-contain scrollbar-thin [scrollbar-color:_rgba(255,255,255,0.12)_transparent] [mask-image:_linear-gradient(180deg,_rgba(7,5,25,0.95)_80%,_rgba(0,0,0,0)_100%)]"
					><div>
						<div
							class="text-xs leading-snug text-surface-300 md:text-justify md:text-[0.85vw] md:leading-[1vw]"
						>
							{anime_meta?.description}
						</div>
					</div></scroll-area
				>
			</div>
		{:else}
			loading
		{/if}

		{#if ready}
			<genres
				class="flex items-center gap-2 overflow-x-scroll p-3 scrollbar-none md:gap-[0.5vw] md:p-[1vw]"
			>
				{#each anime_meta?.genres as genre}
					<!-- content here -->
					<genre
						class="whitespace-nowrap rounded bg-warning-400 p-1 text-xs font-semibold leading-none text-black md:rounded-[0.25vw] md:px-[0.6vw] md:py-[0.3vw] md:text-[0.8vw]"
					>
						{genre}
					</genre>
				{/each}
			</genres>
		{:else}
			loading
		{/if}
	</anime-details>
</a>
