<script lang="ts">
	import type { ModalSettings } from '@skeletonlabs/skeleton';
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

<div class="flex flex-col items-center gap-5">
	<button
		on:click={openSearchModal}
		type="button"
		class="btn btn-icon w-10 rounded-[0.375vw] bg-warning-400 p-0"
		><svg xmlns="http://www.w3.org/2000/svg" class="w-5 text-black" fill="none" viewBox="0 0 36 36"
			><path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="6"
				d="M16.5 28.5C23.1274 28.5 28.5 23.1274 28.5 16.5C28.5 9.87258 23.1274 4.5 16.5 4.5C9.87258 4.5 4.5 9.87258 4.5 16.5C4.5 23.1274 9.87258 28.5 16.5 28.5Z"
			/><path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="6"
				d="M31.5001 31.5001L24.9751 24.9751"
			/></svg
		>
	</button>
</div>
