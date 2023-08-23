<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	$: next_page = $page.data.page + 1;
	// let data: any;
	// onMount(async()=>{
	//      data = await(await fetch("https://api.consumet.org/anime/gogoanime/recent-episodes")).json()
	// })
</script>

<pre class="pre">
        {JSON.stringify($page, null, 2)}
</pre>

<form action="." method="get">
	<input hidden name="page" value={next_page} type="text" />
	<button class="btn">Next</button>
</form>
