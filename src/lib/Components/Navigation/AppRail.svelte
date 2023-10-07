<script lang="ts">
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { RailSearchTrigger } from '$lib';
	let currentTile: number = 0;
</script>

<AppRail background="bg-surface-900/5">
	<svelte:fragment slot="lead">
		<AppRailTile
			hover="bg-transparent"
			active="bg-transparent"
			bind:group={currentTile}
			name="tile-1"
			value={0}
			title="tile-1"
		>
			<RailSearchTrigger />
		</AppRailTile>
	</svelte:fragment>
	<!-- --- -->
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
		<a
			href="/explore"
			type="button"
			class="bg-initial btn btn-icon relative w-[4vw] rounded-[0.75vw] p-0"
			><div class="inline-grid">
				<div
					class="absolute inset-0 flex flex-col items-center justify-center gap-[0.35vw]"
					style=""
				>
					<svg
						class="w-[1.25vw] text-white"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM5.65317 13.0185C5.26027 13.864 6.13598 14.7397 6.98146 14.3468L11.3472 12.318C11.7752 12.1191 12.1191 11.7752 12.318 11.3472L14.3468 6.98146C14.7397 6.13599 13.864 5.26026 13.0185 5.65317L8.65283 7.68197C8.22479 7.88089 7.88089 8.22479 7.68197 8.65283L5.65317 13.0185ZM10 8.9C10.61 8.9 11.1 9.39 11.1 10C11.1 10.61 10.61 11.1 10 11.1C9.39 11.1 8.9 10.61 8.9 10C8.9 9.39 9.39 8.9 10 8.9Z"
							fill="currentColor"
						/></svg
					> <span class="text-[0.75vw] font-semibold capitalize leading-[1.05vw]">explore</span>
				</div>
			</div>
		</a>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 3</span>
	</AppRailTile>
	<!-- --- -->
	<svelte:fragment slot="trail">
		<AppRailAnchor href="https://github.com/zarqizoubir/animes" target="_blank" title="Account">
			<div class="flex flex-col items-center gap-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-brand-github"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
					/>
				</svg>
			</div>
		</AppRailAnchor>
	</svelte:fragment>
</AppRail>
