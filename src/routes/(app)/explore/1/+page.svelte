<script lang="ts">
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
						<!-- Year Filter Started -->

						<!-- Season Filter Started -->
						<div class="md:flex flex-col md:gap-3 group" aria-expanded="false">
							<span class="font-semibold leading-none text-surface-50 md:text-base">Season</span>
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
						<!-- Season Filter End -->

						<!-- Genre Filter  Started-->
						<div class="hidden md:flex flex-col md:gap-3 group" aria-expanded="false">
							<span class="font-semibold leading-none text-surface-50 md:text-base">Format</span>
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
						<!-- Season Filter End -->
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
