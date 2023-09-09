<script lang="ts">
	import { Modal } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	import { RealtimeSearch } from '$lib';
	import { searchStore } from '$lib/stores';

	// import ModalComponentOne from '...';
	// import ModalComponentTwo from '...';

	const modalComponentRegistry: Record<string, ModalComponent> = {
		// Custom Modal 1
		realtimeSearch: {
			ref: RealtimeSearch
		}
	};
</script>

<Modal
	on:backdrop={() => {
		$searchStore = 'no-data';
	}}
	components={modalComponentRegistry}
/>
