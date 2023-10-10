<script lang="ts">
	export let anime: any;
</script>

<article class="card card-hover max-h-96 h-full relative inline-block">
	<a href="/episodes?id={anime.episodeId}">
		<header class="card-header">
			<div class="h-48 md:h-64 rounded bg-cover" style="background-image: url({anime.image});" />
		</header>
	</a>

	<section class="title text-center p-4 justify-center">
		{anime.title.slice(0, 40)}
	</section>
</article>
