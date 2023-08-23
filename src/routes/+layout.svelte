<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { onMount } from 'svelte';
	import { urlStore } from '$lib';

	onMount(async () => {
		$urlStore = window.location;
	});
</script>

<slot />
