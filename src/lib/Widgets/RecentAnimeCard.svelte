<script lang="ts">
	export let anime: any;
</script>

<article class="card card-hover h-[300px] max-h-96 md:h-full relative inline-block overflow-hidden">
	<a href="/episodes?id={anime.episodeId}">
		<header class="card-header">
			<div class="h-48 md:h-64 rounded bg-cover" style="background-image: url({anime.image});" />
		</header>
	</a>

	<section class="text-center p-4 justify-center text-">
		<span class="">
			{anime.title.slice(0, 40)}
		</span>
	</section>
</article>
