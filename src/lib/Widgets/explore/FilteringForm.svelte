<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	export let searchParams: any;
	$: season = searchParams?.season;
	$: type = searchParams?.type;
	$: status = searchParams?.status;
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
					<section class="flex flex-row w-full py-6 gap-2">
						<div class="w-full">
							<h2 class="h3 font-semibold text-center">Season :</h2>
							<select name="season" class="select h-full p-4" size="4" value={season}>
								<option value="WINTER">Winter</option>
								<option value="SUMMER">Summer</option>
								<option value="SPRING">Spring</option>
								<option value="FALL">Fall</option>
							</select>
						</div>
						<div class="w-full">
							<h2 class="h3 font-semibold text-center">Type :</h2>

							<select name="type" class="select h-full p-4" size="4" value={type}>
								<option value="TV">Tv</option>
								<option value="OVA">Ova</option>
								<option value="ONA">Ona</option>
								<option value="MOVIE">Movie</option>
							</select>
						</div>
						<div class="w-full">
							<h2 class="h3 font-semibold text-center">Status :</h2>

							<select name="status" class="select h-full p-4" size="4" value={status}>
								<option value="RELEASING">Releasing</option>
								<option value="NOT_YET_RELEASED">Not Yet Released</option>
								<option value="FINISHED">Finished</option>
								<option value="CANCELLED">Cancelled</option>
								<option value="HIATUS">Hiatus</option>
							</select>
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
