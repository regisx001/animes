import { writable, type Writable } from "svelte/store";




function createUrlStore() {
    const { set, update, subscribe }: Writable<Location> = writable()

    return {
        subscribe,
        set,
        update,
    }
}


export const urlStore = createUrlStore()