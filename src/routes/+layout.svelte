<script lang="ts">
	import '../app.postcss';
	import { AnimeModal, themeStore, changeTheme } from '$lib';
	import { initializeStores, storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { onMount } from 'svelte';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	initializeStores();

	$: isReady = false;
	onMount(async () => {
		isReady = false;
		await changeTheme($themeStore);
		isReady = true;
	});
</script>

{#if isReady}
	<slot />
{/if}

<AnimeModal />
