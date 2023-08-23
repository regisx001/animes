<script lang="ts">
	import { page } from '$app/stores';
	// $: next_page = $page.data.page + 1;
</script>

<pre class="pre">
        {JSON.stringify($page, null, 2)}
</pre>

<!-- <form action="." method="get">
	<input hidden name="page" value={next_page} type="text" />
	<button class="btn">Next</button>
</form> -->
