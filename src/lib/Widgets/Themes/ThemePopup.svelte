<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { themeStore, changeTheme } from '$lib';

	let themes = [
		{ name: 'Wintry', value: 'wintry', icon: '🌨️' },
		{ name: 'Modern', value: 'modern', icon: '🤖' },
		{ name: 'Crimson', value: 'crimson', icon: '⭕' }
	];
</script>

<div class="card p-2 w-48 shadow-xl" data-popup="popupCombobox">
	<div class="p-4 flex flex-row justify-between">
		<span class="font-extrabold">Mode : </span>
		<LightSwitch />
	</div>
	<hr />
	<nav class="list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto">
		<ul class="flex flex-col gap-1 py-1">
			{#each themes as theme}
				<li>
					<button
						on:click={() => {
							themeStore.set(theme.value);
							changeTheme(theme.value);
						}}
						class="option w-full h-full {$themeStore === theme.value
							? ' bg-primary-active-token'
							: ''}"
					>
						<span>{theme.icon}</span> <span class="flex-auto text-left">{theme.name}</span>
					</button>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="arrow bg-surface-100-800-token" />
</div>
