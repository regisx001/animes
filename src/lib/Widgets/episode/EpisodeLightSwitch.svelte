<script lang="ts">
	import { EpisodeLightStore } from '$lib';
</script>

<button
	on:click={() => {
		$EpisodeLightStore = !$EpisodeLightStore;
	}}
>
	Turn Off {$EpisodeLightStore}
</button>
