<script lang="ts">
	export let data: any;
	import { RecentAnimeCard } from '$lib';
</script>

<section
	class="mx-[5%] lg:mx-[10%] animes grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
>
	{#each data.results as anime}
		<RecentAnimeCard {anime} />
	{/each}
</section>

<style>
	.animes {
		display: grid;
		grid-row-gap: 2rem;
		grid-column-gap: 2rem;
	}
</style>
