<script lang="ts">
	import '../app.postcss';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { AnimeModal } from '$lib';
	initializeStores();
</script>

<slot />

<AnimeModal />
