<script lang="ts">
	import { searchStore } from '$lib/stores';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
	let keywords: string;

	function openSearchModal() {
		const modal: ModalSettings = {
			type: 'component',
			component: 'realtimeSearch'
		};
		modalStore.trigger(modal);
	}
</script>

<button on:click={openSearchModal} class="btn space-x-4 variant-soft hover:variant-soft-primary">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="icon icon-tabler icon-tabler-search"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
		<path d="M21 21l-6 -6" />
	</svg>
	<small class="hidden md:inline-block">Ctrl+K</small></button
>
