<script lang="ts">
	import { popup, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	let year: string = 'Any';
	const yearCombobox: PopupSettings = {
		event: 'click',
		target: 'yearCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	let season: string = 'Any';
	const seasonCombobox: PopupSettings = {
		event: 'click',
		target: 'seasonCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	let format: string = 'Any';
	const formatCombobox: PopupSettings = {
		event: 'click',
		target: 'formatCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
</script>

<div id="page" class=" flex-1 overflow-x-hidden flex flex-col" style="scrollbar-gutter: auto;">
	<main id="page-content" class="flex-auto">
		<div class="h-full">
			<section
				class="mt-20 flex flex-col p-5 md:mt-0 md:gap-8 md:pl-[1.5vw] md:pr-[3.75vw] md:pt-0"
			>
				<section-headings class="flex flex-col gap-2 md:gap-3">
					<span class="text-5xl font-bold leading-none">
						Anime
						<span class="text-warning-400">Explore</span>
					</span>
					<span class="text-xl font-normal leading-none text-surface-50"
						>Unleash your inner Otaku: Explore anime wonders
					</span>
				</section-headings>

				<filter-options class="mt-3 flex items-end justify-between gap-3 md:mt-0 md:gap-0">
					<div class="flex items-center gap-3 md:gap-6">
						<!-- Search Start -->
						<search class="hidden flex-col gap-3 md:flex">
							<span class="text-base font-semibold leading-none text-surface-50">Search Animes</span
							>
							<div class="relative flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="pointer-events-none absolute ml-[1vw] w-5 text-surface-300"
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
								<input
									type="text"
									placeholder="Looking for specific anime? Start from here..."
									class="w-[30vw] rounded-[0.5vw] border-none bg-surface-400 py-[0.8vw] pl-[3vw] text-[1vw] leading-none text-surface-50 placeholder:text-surface-50 focus:ring-0 md:bg-surface-400/75"
								/>
							</div>
						</search>
						<!-- Search End -->

						<!-- Genre Filter Started -->
						<div class="md:flex flex-col md:gap-3 group" aria-expanded="false">
							<span class="font-semibold leading-none text-surface-50 md:text-base">Genres</span>
							<div class="relative flex items-center">
								<span
									class="absolute cursor-pointer text-surface-50 opacity-100 duration-300 group-focus-within:opacity-0"
									><span class="ml-3 text-base md:ml-[1vw] md:text-[0.9vw]">Any</span></span
								>
								<input
									type="text"
									class="peer w-full rounded-lg border-none bg-surface-400 py-3 text-base leading-none text-surface-50 placeholder:text-surface-50 focus:ring-0 md:w-[11vw] md:rounded-[0.5vw] md:bg-surface-400/75 md:py-[0.8vw] md:pl-[1vw] md:text-[1vw]"
								/>
								<button class="btn absolute right-0 mr-3 w-4 p-0 md:mr-[1vw] md:w-[1vw]"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										class="text-surface-300"
										fill="none"
										viewBox="0 0 24 24"
										><path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="3.5"
											d="M6 9L12 15L18 9"
										/></svg
									></button
								>
							</div>
						</div>
						<!-- Genre Filter End -->

						<!-- Year Filter Started -->
						<div class="md:flex flex-col md:gap-3 group" aria-expanded="false">
							<span class="font-semibold leading-none text-surface-50 md:text-base">Year</span>
							<div class="relative flex items-center">
								<span
									class="absolute cursor-pointer text-surface-50 opacity-100 duration-300 group-focus-within:opacity-0"
									><span class="ml-3 text-base md:ml-[1vw] md:text-[0.9vw]">{year}</span></span
								>
								<input
									type="text"
									class="peer w-full rounded-lg border-none bg-surface-400 py-3 text-base leading-none text-surface-50 placeholder:text-surface-50 focus:ring-0 md:w-[11vw] md:rounded-[0.5vw] md:bg-surface-400/75 md:py-[0.8vw] md:pl-[1vw] md:text-[1vw]"
									use:popup={yearCombobox}
								/>
								<button class="btn absolute right-0 mr-3 w-4 p-0 md:mr-[1vw] md:w-[1vw]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="text-surface-300"
										fill="none"
										viewBox="0 0 24 24"
										><path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="3.5"
											d="M6 9L12 15L18 9"
										/></svg
									>
								</button>
							</div>
							<div class="card w-48 shadow-xl px-2 py-3" data-popup="yearCombobox">
								<ListBox rounded="rounded-none">
									<ListBoxItem bind:group={year} name="medium" value="Any">Any</ListBoxItem>
									<ListBoxItem bind:group={year} name="medium" value="2020">2020</ListBoxItem>
									<ListBoxItem bind:group={year} name="medium" value="2021">2021</ListBoxItem>
									<ListBoxItem bind:group={year} name="medium" value="2022">2022</ListBoxItem>
									<ListBoxItem bind:group={year} name="medium" value="2023">2023</ListBoxItem>
									<ListBoxItem bind:group={year} name="medium" value="2024">2024</ListBoxItem>
								</ListBox>
								<div class="arrow bg-surface-100-800-token" />
							</div>
						</div>
						<!-- Year Filter Started -->

						<!-- Season Filter Started -->
						<div class="md:flex flex-col md:gap-3 group" aria-expanded="false">
							<span class="font-semibold leading-none text-surface-50 md:text-base">Season</span>
							<div class="relative flex items-center">
								<span
									class="absolute cursor-pointer text-surface-50 opacity-100 duration-300 group-focus-within:opacity-0"
									><span class="ml-3 text-base md:ml-[1vw] md:text-[0.9vw]">{season}</span></span
								>
								<input
									type="text"
									class="peer w-full rounded-lg border-none bg-surface-400 py-3 text-base leading-none text-surface-50 placeholder:text-surface-50 focus:ring-0 md:w-[11vw] md:rounded-[0.5vw] md:bg-surface-400/75 md:py-[0.8vw] md:pl-[1vw] md:text-[1vw]"
									use:popup={seasonCombobox}
								/>
								<button class="btn absolute right-0 mr-3 w-4 p-0 md:mr-[1vw] md:w-[1vw]"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										class="text-surface-300"
										fill="none"
										viewBox="0 0 24 24"
										><path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="3.5"
											d="M6 9L12 15L18 9"
										/></svg
									></button
								>
							</div>
							<div class="card w-48 shadow-xl px-2 py-3" data-popup="seasonCombobox">
								<ListBox rounded="rounded-none">
									<ListBoxItem bind:group={season} name="medium" value="Any">Any</ListBoxItem>
									<ListBoxItem bind:group={season} name="medium" value="Winter">Winter</ListBoxItem>
									<ListBoxItem bind:group={season} name="medium" value="Spring">Spring</ListBoxItem>
									<ListBoxItem bind:group={season} name="medium" value="Summer">Summer</ListBoxItem>
									<ListBoxItem bind:group={season} name="medium" value="Autumn">Autumn</ListBoxItem>
								</ListBox>
								<div class="arrow bg-surface-100-800-token" />
							</div>
						</div>
						<!-- Season Filter End -->

						<!-- Genre Filter  Started-->
						<div class="hidden md:flex flex-col md:gap-3 group" aria-expanded="false">
							<span class="font-semibold leading-none text-surface-50 md:text-base">Format</span>
							<div class="relative flex items-center">
								<span
									class="absolute cursor-pointer text-surface-50 opacity-100 duration-300 group-focus-within:opacity-0"
									><span class="ml-3 text-base md:ml-[1vw] md:text-[0.9vw]">{format}</span></span
								>
								<input
									type="text"
									class="peer w-full rounded-lg border-none bg-surface-400 py-3 text-base leading-none text-surface-50 placeholder:text-surface-50 focus:ring-0 md:w-[11vw] md:rounded-[0.5vw] md:bg-surface-400/75 md:py-[0.8vw] md:pl-[1vw] md:text-[1vw]"
									use:popup={formatCombobox}
								/>
								<button class="btn absolute right-0 mr-3 w-4 p-0 md:mr-[1vw] md:w-[1vw]"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										class="text-surface-300"
										fill="none"
										viewBox="0 0 24 24"
										><path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="3.5"
											d="M6 9L12 15L18 9"
										/></svg
									></button
								>
							</div>
							<div class="card w-48 shadow-xl px-2 py-3" data-popup="formatCombobox">
								<ListBox rounded="rounded-none">
									<ListBoxItem bind:group={format} name="medium" value="Any">Any</ListBoxItem>
									<ListBoxItem bind:group={format} name="medium" value="Tv">Tv</ListBoxItem>
									<ListBoxItem bind:group={format} name="medium" value="Movie">Movie</ListBoxItem>
									<ListBoxItem bind:group={format} name="medium" value="Ova">Ova</ListBoxItem>
									<ListBoxItem bind:group={format} name="medium" value="Ona">Ona</ListBoxItem>
								</ListBox>
								<div class="arrow bg-surface-100-800-token" />
							</div>
						</div>
						<!-- Genre Filter End -->
					</div>

					<more-filter-option>
						<button
							class="btn rounded-lg bg-surface-400 p-[0.85rem] md:rounded-[0.5vw] md:bg-surface-400/75 md:p-[0.9vw]"
							><svg
								class="w-4 text-surface-50 md:w-[1vw]"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								><rect width="8" height="8" rx="2" fill="currentColor" /><rect
									x="12"
									width="8"
									height="8"
									rx="2"
									fill="currentColor"
								/><rect x="12" y="12" width="8" height="8" rx="2" fill="currentColor" /><rect
									y="12"
									width="8"
									height="8"
									rx="2"
									fill="currentColor"
								/></svg
							></button
						>
					</more-filter-option>
				</filter-options>
			</section>
		</div>
	</main>
</div>

<!-- <div class="mt-5 grid grid-cols-3 gap-3 md:mt-[1.25vw] md:grid-cols-6 md:gap-[1.5vw]">
	<a href="/mal/9" class="relative col-span-1 flex flex-col gap-2 md:gap-[0.5vw]"
		><div class="relative" aria-expanded="false">
			<div
				class="h-60 w-full rounded-md object-cover object-center md:h-[20vw] md:rounded-[0.35vw]"
			>
				<img
					class="h-60 w-full rounded-md object-cover object-center md:h-[20vw] md:rounded-[0.35vw]"
					src="https://core-project-v3-ui.vercel.app/images/cover/fish.png"
					alt="The girl I like to forgot her name"
					style=""
					loading="lazy"
				/>
			</div>
			<anime-info
				class="absolute inset-x-0 bottom-0 rounded-b-lg backdrop-blur md:rounded-b-[0.5vw]"
				><div class="flex flex-col gap-1 bg-surface-900/90 p-3 md:gap-[0.35vw] md:p-[1vw]">
					<scroll-area
						class="block h-full w-full overflow-y-scroll overscroll-y-contain scrollbar-thin [scrollbar-color:_rgba(255,255,255,0.12)_transparent]"
						><div>
							<div
								class="text-sm font-semibold md:text-[1vw] md:leading-[1.35vw] md:max-h-[1.35vw] md:hover:max-h-[10vw] duration-300 overflow-hidden ease-in-out scrollbar-none hover:overflow-y-scroll"
							>
								<span
									class="line-clamp-1 md:line-clamp-none [&amp;:not(:hover)]:[mask-image:_linear-gradient(90deg,_rgba(7,5,25)_75%,_rgba(0,0,0,0)_100%)]"
									>The girl I like to forgot her name</span
								>
							</div>
						</div></scroll-area
					>
					<anime_info
						class="flex items-center gap-2 text-xs leading-none text-surface-50 md:gap-[0.5vw] md:text-[0.8vw]"
						><genre>Action</genre>
						<svg
							class="w-1 opacity-75 md:w-[0.25vw]"
							viewBox="0 0 10 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><circle cx="5" cy="5" r="5" fill="currentColor" /></svg
						> <episodes_count>28 eps</episodes_count></anime_info
					>
				</div></anime-info
			>
		</div>
	</a>
</div> -->
