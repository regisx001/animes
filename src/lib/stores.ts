import { writable, type Writable } from "svelte/store";
import { localStorageStore } from "@skeletonlabs/skeleton"

export const searchStore: Writable<string | "no-data"> = writable("no-data")
export const showSearchModalStore: Writable<boolean> = writable(false)
export const themeStore: Writable<string> = localStorageStore("theme", "kokoro")

export const EpisodeLightStore: Writable<boolean> = writable(false)