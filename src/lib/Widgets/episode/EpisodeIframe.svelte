<script lang="ts">
	import { EpisodeLightStore } from '$lib';
	export let episode: any;
	export let serverURL: any = undefined;
	export let title: string = 'Something';

	let boxShadow = `box-shadow: 2px -1px 0px 200px rgba(0,0,0,0.9);-webkit-box-shadow: 2px -1px 0px 200px rgba(0,0,0,0.9);-moz-box-shadow: 2px -1px 0px 200px rgba(0,0,0,0.9);`;
</script>

<div class="overflow-hidden relative w-full aspect-video rounded-2xl">
	{#if serverURL}
		<iframe
			sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
			frameborder="0"
			allow="encrypted-media"
			allowfullscreen
			class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
			src={serverURL}
			{title}
		/>
	{:else}
		<iframe
			sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
			frameborder="0"
			allow="encrypted-media"
			allowfullscreen
			class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
			src={episode.headers.Referer}
			{title}
		/>
	{/if}
</div>
