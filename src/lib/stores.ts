import { writable, type Writable } from "svelte/store";


export const searchStore: Writable<String | "no-data"> = writable("no-data")
export const showSearchModalStore: Writable<boolean> = writable(false)