<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { NavigationBar, showSearchModalStore, AppRail, BottomNavigation } from '$lib';
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

	<slot />

	<svelte:fragment slot="footer">
		<BottomNavigation />
	</svelte:fragment>
</AppShell>
