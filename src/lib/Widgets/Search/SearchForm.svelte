<script lang="ts">
	$: keywords = '';
</script>

<div class="absolute left-1/2 -translate-x-1/2">
	<search-form>
		<form class="relative flex h-12 w-[65vw] items-center md:hidden">
			<a
				on:click={() => {
					setTimeout(() => {
						keywords = '';
					}, 200);
				}}
				href="/search?keywords={keywords}"
				class="btn absolute left-4 p-0"
				aria-label="Search"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 opacity-75"
					fill="none"
					viewBox="0 0 36 36"
					><path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="6"
						d="M16.5 28.5C23.1274 28.5 28.5 23.1274 28.5 16.5C28.5 9.87258 23.1274 4.5 16.5 4.5C9.87258 4.5 4.5 9.87258 4.5 16.5C4.5 23.1274 9.87258 28.5 16.5 28.5Z"
					/><path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="6"
						d="M31.5001 31.5001L24.9751 24.9751"
					/></svg
				>
			</a>
			<input
				bind:value={keywords}
				type="text"
				placeholder="Search for animes, mangas..."
				class="h-full w-full rounded-[0.4rem] border-none bg-surface-400 pl-12 text-sm font-semibold text-white shadow-lg !ring-0 placeholder:font-medium placeholder:text-surface-200"
			/>
		</form>
	</search-form>
</div>
