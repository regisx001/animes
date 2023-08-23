<script>
	import { AppBar,LightSwitch } from '@skeletonlabs/skeleton';
	import Logo from "./Logo.svelte" 
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a class="flex justify-center items-center gap-4 " href="/">
			<Logo/>
			<div class="flex flex-row gap-[0.0125rem]">
				<span class="font-bold text-2xl text-primary-500">Core</span><span class="font-bold text-2xl text-surface-400">Anime</span>
			</div>
		</a>
	</svelte:fragment>
	<div></div>
	<svelte:fragment slot="trail">
		<div>
			<LightSwitch/>
		</div>
	</svelte:fragment>
</AppBar>
