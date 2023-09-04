<script lang="ts">
	import { page } from '$app/stores';
	import { gogo } from '$lib/providers';
	import { searchStore } from '$lib/stores';
	import { beforeUpdate, onMount } from 'svelte';

	$: searchKeyWords = '';
	$: data = {};
	$: isReady = false;
	onMount(async () => {
		searchStore.subscribe((keywords) => {
			// @ts-ignore
			searchKeyWords = keywords;
		});

		if (searchKeyWords !== '' && searchKeyWords !== null) {
			data = await gogo.search(searchKeyWords);
		}
	});

	$: {
		new Promise(async (resolve, reject) => {
			const animes = await gogo.search(searchKeyWords);
			resolve(animes);
		}).then((val) => {
			// @ts-ignore
			data = val;
		});
	}
</script>

<section
	class="mt-10 mb-auto overflow-y-scroll max-h-[600px] hide-scrollbar z-50 lg:w-[55%] xl:w-[65%]"
>
	<div class="card">
		<input
			placeholder="Search ...."
			bind:value={searchKeyWords}
			on:input={() => {
				if (searchKeyWords !== '') {
					setTimeout(() => {
						$searchStore = searchKeyWords;
					}, 500);
				} else {
					$searchStore = null;
				}
			}}
			class="input"
			type="text"
		/>
		<pre>
				{JSON.stringify(data, null, 2)}
		</pre>
	</div>
</section>
