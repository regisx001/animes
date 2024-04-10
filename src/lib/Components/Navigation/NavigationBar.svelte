<script lang="ts">
	import LogoWrited from './LogoWrited.svelte';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { GithubIcon, SearchTrigger, ThemeTrigger, SearchForm } from '$lib';
	import Logo from './Logo.svelte';
</script>

<AppBar padding="px-2 p-4 md:p-4" background="bg-surface-900/5">
	<svelte:fragment slot="lead">
		<a class="flex justify-center items-center px-[6px] lg:px-4 gap-4" href="/">
			<Logo />
		</a>
	</svelte:fragment>
	<div class="relative hidden md:flex justify-center items-center">
		<a class="flex justify-center items-center px-[6px] lg:px-4 gap-4" href="/">
			<LogoWrited />
		</a>
	</div>
	<div class="relative flex items-center md:hidden">
		<SearchForm />
	</div>
	<svelte:fragment slot="trail">
		<div class="flex flex-row gap-4 items-center">
			<!-- Theme changed to settings Route -->
			<!-- <ThemeTrigger /> -->
			<!--  -->
			<!-- <SearchTrigger /> -->
			<!-- <GithubIcon /> -->
		</div>
	</svelte:fragment>
</AppBar>
