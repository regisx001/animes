<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { GithubIcon, SearchTrigger, ThemeTrigger } from '$lib';
	import Logo from './Logo.svelte';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a class="flex justify-center items-center gap-4" href="/">
			<Logo />
			<div class="hidden md:flex flex-row gap-[0.0125rem]">
				<span class="font-bold text-2xl text-primary-500">Core</span><span
					class="font-bold text-2xl text-surface-400">Anime</span
				>
			</div>
		</a>
	</svelte:fragment>
	<div class="relative flex flex-col justify-center items-center">
		<!-- <SearchTrigger /> -->
	</div>
	<svelte:fragment slot="trail">
		<div class="flex flex-row gap-4 items-center">
			<SearchTrigger />
			<!-- <LightSwitch /> -->
			<ThemeTrigger />
			<GithubIcon />
		</div>
	</svelte:fragment>
</AppBar>
