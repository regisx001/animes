<script lang="ts">
</script>

<div>
	<div class="relative col-span-1 flex flex-col gap-2 md:gap-[0.5vw]">
		<div class="relative" aria-expanded="false">
			<div
				class="bg-surface-400 animate-pulse h-60 w-full rounded-md object-cover object-center md:h-[20vw] md:rounded-[0.35vw]"
			/>
			<anime-info
				class="absolute inset-x-0 bottom-0 rounded-b-lg backdrop-blur md:rounded-b-[0.5vw]"
			>
				<div class="flex flex-col gap-1 bg-surface-900/90 p-3 md:gap-[0.35vw] md:p-[1vw]">
					<scroll-area
						class="block h-full w-full overflow-y-scroll overscroll-y-contain scrollbar-thin [scrollbar-color:_rgba(255,255,255,0.12)_transparent]"
					>
						<div>
							<div class="bg-surface-400 animate-pulse h-5 mb-2 rounded-2xl" />
						</div>
					</scroll-area>
					<anime_info class="flex items-center">
						<episodes_count class="w-3/4">
							<div>
								<div class="bg-surface-400 animate-pulse h-4 mb-3 rounded-2xl" />
							</div>
						</episodes_count>
					</anime_info>
				</div></anime-info
			>
		</div>
	</div>
</div>
