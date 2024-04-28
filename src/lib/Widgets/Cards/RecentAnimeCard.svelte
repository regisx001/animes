<script lang="ts">
	export let anime: any;
</script>

<a
	href="/episodes?id={anime.episodeId}"
	class="relative col-span-1 card card-hover flex flex-col gap-2 md:gap-[0.5vw]"
	><div class="relative" aria-expanded="false">
		<div class="h-60 w-full rounded-md object-cover object-center md:h-[20vw] md:rounded-[0.35vw]">
			<img
				class="h-60 w-full rounded-md object-cover object-center md:h-[20vw] md:rounded-[0.35vw]"
				src={anime.image}
				alt={anime?.title}
				style=""
				loading="lazy"
			/>
		</div>
		<anime-info class="absolute inset-x-0 bottom-0 rounded-b-lg backdrop-blur md:rounded-b-[0.5vw]"
			><div class="flex flex-col gap-1 bg-surface-900/90 p-3 md:gap-[0.35vw] md:p-[1vw]">
				<scroll-area
					class="block h-full w-full overflow-y-scroll overscroll-y-contain scrollbar-thin [scrollbar-color:_rgba(255,255,255,0.12)_transparent]"
					><div>
						<div
							class="text-sm font-semibold md:text-[1vw] md:leading-[1.35vw] md:max-h-[1.35vw] md:hover:max-h-[10vw] duration-300 overflow-hidden ease-in-out scrollbar-none hover:overflow-y-scroll"
						>
							<span
								class="line-clamp-1 md:line-clamp-none [&amp;:not(:hover)]:[mask-image:_linear-gradient(90deg,_rgba(7,5,25)_75%,_rgba(0,0,0,0)_100%)]"
								>{anime.title}</span
							>
						</div>
					</div></scroll-area
				>
				<anime_info
					class="flex items-center gap-2 text-xs leading-none text-surface-50 md:gap-[0.5vw] md:text-[0.8vw]"
				>
					<!-- <genre>Action</genre> -->
					<svg
						class="w-1 opacity-75 md:w-[0.25vw]"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><circle cx="5" cy="5" r="5" fill="currentColor" /></svg
					> <episodes_count> Episode {anime.episodeNumber}</episodes_count></anime_info
				>
			</div></anime-info
		>
	</div>
</a>

<style>
	.card-hover {
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 190ms;
	}
	.card-hover:hover {
		--tw-scale-x: 104%;
		--tw-scale-y: 104%;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
		--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
		--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
			0 8px 10px -6px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
	}
</style>
