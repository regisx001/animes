<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import {
		EpisodeIframe,
		EpisodeNumbers,
		gogo,
		EpisodeLoader,
		EpisodeOptions,
		EpisodeChangingLoader
	} from '$lib';
	import { ListBox, ListBoxItem, popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let episodeId: string;
	let animeId: string = '';
	$: anime = {};
	$: episode = [];
	$: isReady = false;
	$: isEpisodeReady = false;

	$: currentServer = 'Vidstreaming';
	$: streamingUrl = episode[0]?.url;

	async function fetchResources(episodeId: string, animeId: string) {
		isReady = false;
		const [episode, anime] = await Promise.all([
			await gogo.fetchEpisodeServers(episodeId),
			await gogo.fetchAnimeInfo(animeId)
		]);

		return { episode, anime };
	}

	onMount(async () => {
		page.subscribe(({ url }) => {
			episodeId = String(url.searchParams.get('id'));
		});
		animeId = await gogo.fetchAnimeIdFromEpisodeId(episodeId);

		await fetchResources(episodeId, animeId).then((value) => {
			anime = value.anime;
			// @ts-ignore
			episode = value.episode;
		});
		isReady = true;
		isEpisodeReady = true;
	});

	$: {
		fetchResources(episodeId, animeId).then((value) => {
			anime = value.anime;
			// @ts-ignore
			episode = value.episode;
			isReady = true;
		});
	}

	const popupCombobox: PopupSettings = {
		event: 'focus-click',
		target: 'servers',
		placement: 'top',
		closeQuery: '.listbox-item'
	};
</script>

{#if isReady}
	<div class="grid mx-[2.5%] mt-12 grid-cols-12 md:gap-[5vw]">
		<div class="col-span-12 flex flex-col md:col-span-8 md:gap-[0.75vw]">
			<div class="relative h-64 w-full md:z-30 md:h-[35vw]">
				<div class="h-full aspect-video w-full rounded-none object-cover md:rounded-[0.5vw]">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<iframe
						sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
						frameborder="0"
						allow="encrypted-media"
						allowfullscreen
						class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
						src={streamingUrl}
						title="Just a episode"
					/>
				</div>
			</div>
			<div
				class="flex flex-col gap-2 px-5 md:flex-row md:items-center md:justify-between md:gap-0 md:p-0"
			>
				<div class="flex gap-2 md:items-center md:gap-[1vw]">
					<div class="hidden items-center gap-[0.75vw] md:flex">
						<span class="text-[1vw] font-semibold uppercase">sub/dub:</span>
						<button
							use:popup={popupCombobox}
							class="btn flex w-60 items-center gap-[0.5vw] rounded-[0.35vw] bg-surface-400 px-[0.75vw] py-[0.5vw] text-[1vw] leading-none"
							>{currentServer} (Sub)
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-[1vw]"
								fill="none"
								viewBox="0 0 24 24"
								><path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="3.5"
									d="M6 9L12 15L18 9"
								/>
							</svg>
						</button>
						<div class="card z-50 w-52 shadow-xl p-4 h-60 overflow-scroll" data-popup="servers">
							<ListBox rounded="rounded-xl">
								{#each episode as server}
									<ListBoxItem
										on:click={() => {
											streamingUrl = server?.url;
										}}
										bind:group={currentServer}
										name="Server"
										value={server?.name}
									>
										{server?.name}
									</ListBoxItem>
								{/each}
							</ListBox>
							<div class="arrow bg-surface-100-800-token" />
						</div>
					</div>
				</div>
				<div class="flex w-full items-center justify-between md:w-auto">
					<div class="flex items-center gap-2 md:hidden">
						<span class="text-xs font-semibold uppercase">sub/dub:</span>
						<button
							class="btn flex items-center gap-2 rounded bg-surface-400 px-3 py-2 text-xs leading-none"
							>Vidstreaming (sub)
							<svg xmlns="http://www.w3.org/2000/svg" class="w-3" fill="none" viewBox="0 0 24 24"
								><path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="3.5"
									d="M6 9L12 15L18 9"
								/></svg
							></button
						>
					</div>
					<div class="flex items-center gap-3 md:gap-[0.75vw]">
						<a href="{base}/"
							><svg
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="w-4 md:w-[1.4vw]"
								><path
									d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/><path
									d="M5.25 7.5L9 11.25L12.75 7.5"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/><path
									d="M9 11.25V2.25"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							>
						</a><a href="{base}/"
							><svg
								class="w-4 md:w-[1.4vw] rotate-180"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									><path d="M0 0h24v24H0z" /><path
										fill="currentColor"
										d="M2 5v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C3.012 3.682 2 4.141 2 5zm11 0v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C14.012 3.682 13 4.141 13 5z"
									/></g
								></svg
							>
						</a><a href="{base}/"
							><svg class="w-4 md:w-[1.4vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
								><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									><path d="M0 0h24v24H0z" /><path
										fill="currentColor"
										d="M2 5v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C3.012 3.682 2 4.141 2 5zm11 0v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C14.012 3.682 13 4.141 13 5z"
									/></g
								></svg
							>
						</a>
					</div>
				</div>
			</div>
		</div>
		<EpisodeNumbers {anime} {episodeId} />
	</div>
{/if}

<!-- <pre class="pre">
	{JSON.stringify(episode, null, 2)}
	{JSON.stringify(streamingUrl, null, 2)}
</pre> -->
<!-- <section class="flex flex-col lg:flex-row h-full w-full">
	{#if isReady}
		<div class="relative p-4 lg:p-10 lg:pl-24 w-full lg:w-[70%]">
			{#if isEpisodeReady}
				<iframe
					sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
					frameborder="0"
					allow="encrypted-media"
					allowfullscreen
					class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
					src={episode[0].url}
					title="Just a episode"
				/>
			{/if}
		</div>
	{:else}
		<EpisodeLoader />
	{/if}
</section> -->
