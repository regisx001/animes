<script lang="ts">
	import { Modal } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	import RealtimeSearch from '$lib/Widgets/RealtimeSearch.svelte';

	// import ModalComponentOne from '...';
	// import ModalComponentTwo from '...';

	const modalComponentRegistry: Record<string, ModalComponent> = {
		// Custom Modal 1
		realtimeSearch: {
			ref: RealtimeSearch
		}
	};
</script>

<Modal components={modalComponentRegistry} />
