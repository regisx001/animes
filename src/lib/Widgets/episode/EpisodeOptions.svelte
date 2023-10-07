<script lang="ts">
	export let anime: any;
	export let episode: any;
	export let episodeId: any;

	$: episodeArray = episodeId.split('-episode-');
	$: episodeNumber = Number(episodeArray[1]);
	$: nextEpisode = episodeArray[0] + '-episode-' + (episodeNumber + 1);
	$: previousEpisode = episodeArray[0] + '-episode-' + (Number(episodeNumber) - 1);
</script>

<div class="w-full flex flex-row items-center justify-between">
	<h1 class="h3 font-semibold py-4">
		{anime.title + ' Episode ' + episodeNumber}
	</h1>
	<video-options class="flex items-center gap-3 md:gap-[0.75vw]">
		<a class="btn" target="_blank" href={episode.download}>
			<svg
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
		</a>
	</video-options>
</div>
