<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		time_series: number;
        time_films: number;
        numbers_series : number;
        numbers_films : number;
	}

	const { time_films, time_series, numbers_films, numbers_series }: Props = $props();
</script>

<table>
    <tbody>
        <tr>
            <td class="gauche"><p class="title">Temps passé devant des séries :</p><p class="data">{time_series}</p></td>
            <td class="droite"><p class="title">Temps passé devant des films :</p><p class="data">{time_films}</p></td>
        </tr>
        <tr>
            <td class="gauche"><p class="title">Nombre d'épisodes vus :</p><p class="data">{numbers_series}</p></td>
            <td class="droite"><p class="title">Nombre de films vus :</p><p class="data">{numbers_films}</p></td>
        </tr> 
    </tbody>
</table>

<style>
    td{
        text-align: center;
        border: solid 2px #414141;
        padding: 0.5em;
    }
    .gauche{
        border-left: solid 2px var(--background-color);
    }
    .droite{
        border-right: solid 2px var(--background-color);
    }
    table{
        width: 100%;
        box-sizing: border-box;
        color: #9a9a9a;
    }
    .title{
        font-size: larger;
    }
    .data{
        font-size: xx-large;
        color: #FFFFFF;
    }
    p{
        margin: 0.2em;
    }
</style>
