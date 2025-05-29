import type { Show } from "@prisma/client";

export async function getSerie(id:number) : Promise<Show> {
    let res = await fetch(`/api/serie/${id}`);
    return await res.json();
}