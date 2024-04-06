<script lang="ts">
	export let data: any;
	import { RecentAnimeCard } from '$lib';
</script>

<!-- <pre>
	{JSON.stringify(data, null, 2)}
</pre> -->

<section class="mx-[2.5%] mt-5 grid grid-cols-3 gap-3 md:mt-[1.25vw] md:grid-cols-6 md:gap-[1.5vw]">
	{#each data.results as anime}
		<RecentAnimeCard {anime} />
	{/each}
</section>

<!-- Old One -->
<!-- <section
	class="mx-[5%] lg:mx-[10%] grid gap-3 grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:gap-6 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
>
	{#each data.results as anime}
		<RecentAnimeCard {anime} />
	{/each}
</section> -->
