import { gogo } from "$lib";
import type { PageLoad } from "./$types";


export const load: PageLoad = async ({ url }) => {
    const page = Number(url.searchParams.get("page")) || 1
    const animes = await gogo.fetchRecentEpisodes(page)
    return {
        animes,
        page
    }
}