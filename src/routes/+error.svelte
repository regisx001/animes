<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="h-full overflow-hidden">
	<div class="grid h-full grid-cols-12" style="">
		<div
			class="col-span-12 row-span-6 flex flex-col items-center self-end leading-none md:col-span-6 md:mb-[13vw] md:items-start md:gap-[1vw] md:pl-[5vw] md:order-1"
		>
			<div class="text-7xl font-bold md:text-[7vw]">
				<span class="odd:text-warning-400">4</span><span class="odd:text-warning-400">0</span><span
					class="odd:text-warning-400">4</span
				>
			</div>
			<div class="text-base font-semibold text-primary-300 md:text-[1.25vw]">
				Oops! Page not found...
			</div>
			<span class="mt-2 text-base font-semibold italic md:mt-[1vw] md:text-[1.2vw]"
				>Hi <u>Elaine</u>
				here!</span
			>
			<div
				class="select-none px-7 text-center text-xs font-semibold italic leading-snug text-surface-50 md:px-0 md:pr-[5vw] md:text-left md:text-[1.1vw] md:leading-[1.5vw]"
			>
				Uh-oh looks like our <span class="inline-flex text-white">k</span><span
					class="inline-flex text-warning-400">o</span
				><span class="inline-flex text-white">k</span><span class="inline-flex text-warning-400"
					>o</span
				><span class="inline-flex text-white">r</span><span class="inline-flex text-warning-400"
					>o</span
				><span class="inline-flex text-white">-</span><span class="inline-flex text-white">c</span
				><span class="inline-flex text-white">h</span><span class="inline-flex text-white">a</span
				><span class="inline-flex text-white">n</span> is working really hard for the past few days
				and now has fall asleep. You can wait for her to wake up by looking at the status page, or
				come say hi to other fellow <span class="inline-flex text-white">k</span><span
					class="inline-flex text-warning-400">o</span
				><span class="inline-flex text-white">k</span><span class="inline-flex text-warning-400"
					>o</span
				><span class="inline-flex text-white">r</span><span class="inline-flex text-warning-400"
					>o</span
				><span class="inline-flex text-white">-</span><span class="inline-flex text-white">c</span
				><span class="inline-flex text-white">h</span><span class="inline-flex text-white">a</span
				><span class="inline-flex text-white">n</span>'s worksippers! ah- also let's wish her sweat
				dreams!
			</div>
			<a
				href="{base}/explore"
				class="btn mt-3 w-max gap-2 rounded-lg bg-primary-500 py-3 font-semibold leading-none md:mt-0 md:gap-[0.5vw] md:rounded-[0.5vw] md:px-[1.5vw] md:py-[1vw] md:text-[1.1vw]"
				>Explore Animes
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 -rotate-90 md:w-[1.1vw]"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="3.5"
						d="M6 9L12 15L18 9"
					/></svg
				></a
			>
		</div>
		<div
			class="pointer-events-none relative col-span-12 flex items-end justify-center md:col-span-6 md:order-2"
			style="--mobile-gradient: radial-gradient(50dvh circle at center, rgba(231, 220, 221, 0.2) 0%, transparent 50%); --desktop-gradient: radial-gradient(100dvh circle at center, rgba(231, 220, 221, 0.25) 0%, transparent 50%);"
		>
			<gradient
				class="h-[50dvh] w-[100dvw] md:h-[100dvh] md:w-[calc(100%*2)] absolute [background:var(--mobile-gradient)] md:[background:var(--desktop-gradient)]"
			/>
			<img
				src="https://core-project-v3-ui.vercel.app/images/characters/eliane/eliane_2.avif"
				alt="Elaine"
				class="relative h-[40dvh] object-contain object-bottom md:h-[90dvh]"
			/>
		</div>
	</div>
</div>
