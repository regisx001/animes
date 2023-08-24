<script lang="ts">
	export let data: any;
</script>

<!-- <pre class="pre">
	{JSON.stringify(data, null, 2)}
</pre> -->

<ul>
	{#each data.results as anime}
		<div class="flex flex-col p-4">
			<li>{anime.title}, Episode: {anime.episodeNumber}</li>
			<li>{anime.id}</li>
			<a class="anchor" href="/anime?anime={anime.id}">
				<li>{anime.title}</li>
			</a>
		</div>
	{/each}
</ul>
