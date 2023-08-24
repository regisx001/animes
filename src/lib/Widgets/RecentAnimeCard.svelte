<script lang="ts">
	export let anime: any;
</script>

<article class="card card-hover relative inline-block">
	<a href="/episodes?id={anime.episodeId}">
		<header class="card-header">
			<div class="img rounded" style="background-image: url({anime.image});" />
		</header>
	</a>

	<section class="title text-center p-4 justify-center">
		{anime.title.slice(0, 40)}
	</section>

	<div class="variant-filled-surface rounded absolute -top-0 font-bold -right-0 z-10">
		<span class="chip variant-soft hover:variant-filled">
			<span>Episode {anime.episodeNumber}</span>
		</span>
	</div>
</article>

<style>
	.card {
		max-height: 400px;
		height: 100%;
	}
	.img {
		height: 270px;
		background-size: cover;
	}
</style>
