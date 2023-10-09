<script lang="ts">
	export let href: string;
	export let title: string;
	export let active: boolean = false;
</script>

<a {href} type="button" class="flex flex-col items-center gap-[0.5vh]">
	<div class:bg-primary-500={active} class=" btn btn-icon h-12 w-20 rounded-xl p-0">
		<div>
			<slot />
		</div>
	</div>
	<span class="text-xs font-bold capitalize text-surface-50">{title}</span>
</a>
