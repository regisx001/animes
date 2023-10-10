<script lang="ts">
	export let data: any;
	import { RecentAnimeCard } from '$lib';
</script>

<section
	class="mx-[5%] lg:mx-[10%] grid gap-3 grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:gap-6 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
>
	{#each data.results as anime}
		<RecentAnimeCard {anime} />
	{/each}
</section>
