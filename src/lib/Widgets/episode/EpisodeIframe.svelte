<script lang="ts">
	export let episode: any;
	export let serverURL: any = undefined;
	export let title: string = 'Something';
</script>

<div class="overflow-hidden relative w-full aspect-video rounded-2xl">
	{#if serverURL}
		<iframe
			allowfullscreen="true"
			class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
			src={serverURL}
			{title}
			frameborder="0"
		/>
	{:else}
		<iframe
			allowfullscreen="true"
			class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
			src={episode.headers.Referer}
			{title}
			frameborder="0"
		/>
	{/if}
</div>
