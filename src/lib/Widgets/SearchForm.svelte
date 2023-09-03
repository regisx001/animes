<script lang="ts">
	import { searchStore } from '$lib/stores';

	let keywords: string;
	function validatingSearch() {
		// Todo Later
		if (keywords === '') {
			return;
		}
	}
</script>

<form
	on:submit={validatingSearch}
	class=" max-w-lg flex flex-row w-full"
	action="/search"
	method="get"
>
	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-search"
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
				<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M21 21l-6 -6" />
			</svg>
		</div>
		<input
			bind:value={keywords}
			on:input={() => {
				if (keywords === '') {
					$searchStore = null;
				} else {
					$searchStore = keywords;
				}
			}}
			name="keywords"
			type="search"
			placeholder="Search..."
		/>
		<button class="variant-filled-secondary">Submit</button>
	</div>
</form>
