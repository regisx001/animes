<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';
	let data = { backups: ['https://anime.j21.dev/home'] };
	onMount(() => {
		// axios.get('https://anime.j21.dev/_next/data/FA9zpEg8A2twkpxcRffUn/home.json').then((val) => {
		// 	data = val.data;
		// });
	});
</script>

<pre class="pre">
    {JSON.stringify(data, null, 2)}
</pre>
