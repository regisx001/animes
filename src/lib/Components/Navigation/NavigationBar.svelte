<script>
	import SearchForm from './../../Widgets/SearchForm.svelte';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { GithubIcon } from '$lib';
	import Logo from './Logo.svelte';
	import RealtimeSearch from '$lib/Widgets/RealtimeSearch.svelte';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a class="flex justify-center items-center gap-4" href="/">
			<Logo />
			<div class="flex flex-row gap-[0.0125rem]">
				<span class="font-bold text-2xl text-primary-500">Core</span><span
					class="font-bold text-2xl text-surface-400">Anime</span
				>
			</div>
		</a>
	</svelte:fragment>
	<div class="relative flex flex-col justify-center items-center">
		<SearchForm />
		<RealtimeSearch />
	</div>
	<svelte:fragment slot="trail">
		<div class="flex flex-row gap-4 items-center">
			<LightSwitch />
			<GithubIcon />
		</div>
	</svelte:fragment>
</AppBar>
