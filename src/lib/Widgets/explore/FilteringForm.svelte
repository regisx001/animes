<script lang="ts">
	import { Accordion, AccordionItem, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	export let searchParams: any;
	let season = searchParams?.season;
	let type = searchParams?.type;
	let status = searchParams?.status;
	$: category = searchParams?.category;
	$: kw = searchParams?.kw;
	$: open = !season || !type || !status || !category || !kw;
</script>

<section class="px-4 py-2">
	<Accordion>
		<AccordionItem {open}>
			<svelte:fragment slot="summary">
				<h1 class=" h4 font-bold text-center">
					Filtering Option
					{#if !open}
						<span> (click to open) </span>
					{/if}
				</h1>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<form action="" method="get">
					<section class="flex flex-col sm:flex-row w-full py-6 gap-2">
						<div class="w-full rounded-lg p-2 variant-soft-tertiary">
							<h2 class="h3 font-semibold text-center">Season :</h2>

							<ListBox>
								<ListBoxItem bind:group={season} name="season" value="">Not Specific</ListBoxItem>
								<ListBoxItem bind:group={season} name="season" value="WINTER">Winter</ListBoxItem>
								<ListBoxItem bind:group={season} name="season" value="FALL">Fall</ListBoxItem>
								<ListBoxItem bind:group={season} name="season" value="SPRING">Spring</ListBoxItem>
								<ListBoxItem bind:group={season} name="season" value="SUMMER">Summer</ListBoxItem>
							</ListBox>
						</div>

						<div class="w-full rounded-lg p-2 variant-soft-tertiary">
							<h2 class="h3 font-semibold text-center">Type :</h2>

							<ListBox>
								<ListBoxItem bind:group={type} name="type" value="">Not Specific</ListBoxItem>
								<ListBoxItem bind:group={type} name="type" value="TV">Tv</ListBoxItem>
								<ListBoxItem bind:group={type} name="type" value="OVA">Ova</ListBoxItem>
								<ListBoxItem bind:group={type} name="type" value="ONA">Ona</ListBoxItem>
								<ListBoxItem bind:group={type} name="type" value="MOVIE">Movie</ListBoxItem>
							</ListBox>
						</div>

						<div class="w-full rounded-lg p-2 variant-soft-tertiary">
							<h2 class="h3 font-semibold text-center">Status :</h2>
							<ListBox>
								<ListBoxItem bind:group={status} name="status" value="">Not Specific</ListBoxItem>

								<ListBoxItem bind:group={status} name="status" value="RELEASING">
									Releasing
								</ListBoxItem>
								<ListBoxItem bind:group={status} name="status" value="NOT_YET_RELEASED"
									>Not Yet Released
								</ListBoxItem>
								<ListBoxItem bind:group={status} name="status" value="FINISHED">
									Finished
								</ListBoxItem>
								<ListBoxItem bind:group={status} name="status" value="CANCELLED">
									Cancelled
								</ListBoxItem>
							</ListBox>
						</div>
					</section>
					<section class="flex flex-row py-6 gap-2">
						<div class="max-h-96 w-full">
							<input
								name="kw"
								value={kw}
								placeholder="Keywords ..."
								class="input variant-form-material"
							/>
						</div>

						<div class="max-h-96 w-full">
							<select value={category} name="category" class="select variant-form-material">
								<option selected disabled value="NONE">Category</option>
								<option value="Action">Action</option>
								<option value="Adventure">Adventure</option>
								<option value="Cars">Cars</option>
								<option value="Comedy">Comedy</option>
								<option value="Drama">Drama</option>
								<option value="Fantasy">Fantasy</option>
								<option value="Horror">Horror</option>
								<option value="Mahou Shoujo">Mahou Shoujo</option>
								<option value="Mecha">Mecha</option>
								<option value="Music">Music</option>
								<option value="Mystery">Mystery</option>
								<option value="Psychological">Psychological</option>
								<option value="Romance">Romance</option>
								<option value="Sci-Fi">Sci-Fi</option>
								<option value="Slice of Life">Slice of Life</option>
								<option value="Sports">Sports</option>
								<option value="Supernatural">Supernatural</option>
								<option value="Thriller">Thriller</option>
							</select>
						</div>
					</section>
					<button
						on:click={() => {
							// @ts-ignore
							open = undefined;
						}}
						type="submit">Search</button
					>
				</form>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</section>
