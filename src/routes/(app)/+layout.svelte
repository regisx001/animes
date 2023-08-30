<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { NavigationBar, LatestEpisodesSideBar } from '$lib';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<NavigationBar />
	</svelte:fragment>
	<!-- (sidebarLeft) -->
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
