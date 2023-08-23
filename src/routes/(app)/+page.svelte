<script lang="ts">
	import { onMount } from 'svelte';
    let data: any;
    onMount(async()=>{
         data = await(await fetch("https://api.consumet.org/anime/gogoanime/recent-episodes")).json()
    })
</script>




<pre class="pre">
        {JSON.stringify(data,null,2)}
</pre>