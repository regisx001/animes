<script lang="ts">
	import LogoWrited from './LogoWrited.svelte';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { GithubIcon, SearchTrigger, ThemeTrigger } from '$lib';
	import Logo from './Logo.svelte';
</script>

<AppBar background="bg-surface-900/5">
	<svelte:fragment slot="lead">
		<a class="flex justify-center items-center px-[6px] lg:px-4 gap-4" href="/">
			<Logo />
		</a>
	</svelte:fragment>
	<div class="relative flex justify-center items-center">
		<a class="flex justify-center items-center px-[6px] lg:px-4 gap-4" href="/">
			<LogoWrited />
		</a>
	</div>
	<svelte:fragment slot="trail">
		<div class="flex flex-row gap-4 items-center">
			<ThemeTrigger />
			<!-- <SearchTrigger /> -->
			<GithubIcon />
		</div>
	</svelte:fragment>
</AppBar>
