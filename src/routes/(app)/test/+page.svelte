<script lang="ts">
	import { v2 } from '@api';
	import { onMount } from 'svelte';

	let anime: any = 'none';

	onMount(async () => {
		anime = await v2.AniTrendingData(1, 20);
	});
</script>

Something Here

{JSON.stringify(anime)}
