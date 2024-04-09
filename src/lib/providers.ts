import { ANIME, MOVIES, META } from "@consumet/scraper"
import axios from "axios";

export const gogo = new ANIME.Gogoanime()
export const zoro = new ANIME.Zoro()



export const moviesHd = new MOVIES.MovieHdWatch();

export const animlist = new META.Anilist()
export const mallist = new META.Myanimelist()



class Amvstrm {
    baseUrl: string = "https://api.amvstr.me"


    async fetchEpisodesSources(episodeId: string) {
        const data = (await axios.get(`${this.baseUrl}/api/v1/stream/${episodeId}`)).data
        return data
    }
}

export const amvstrm = new Amvstrm()