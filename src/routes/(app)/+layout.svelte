<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { NavigationBar, showSearchModalStore, AppRail } from '$lib';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
	function searchShortcut(event: KeyboardEvent) {
		if (event.ctrlKey && event.key === 'k') {
			event.preventDefault();
			// console.log('helo');
			if ($showSearchModalStore === false) {
				const modal: ModalSettings = {
					type: 'component',
					component: 'realtimeSearch'
				};
				$showSearchModalStore = true;
				modalStore.trigger(modal);
			} else {
				$showSearchModalStore = false;
				modalStore.clear();
			}
		}
	}
</script>

<svelte:window on:keydown={searchShortcut} />

<AppShell>
	<svelte:fragment slot="header">
		<NavigationBar />
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<AppRail />
	</svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- <svelte:fragment slot="sidebarRight">
		<LatestEpisodesSideBar />
	</svelte:fragment> -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- (footer) -->
</AppShell>
