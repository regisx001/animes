import { writable, type Writable } from "svelte/store";

export const searchStore: Writable<String | null> = writable(null)