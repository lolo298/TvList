<script lang="ts">
	import type { Stats } from '@prisma/client';

	interface Props {
		stats: Stats;
	}

	const { stats }: Props = $props();

	const seriesWatchTime = $derived(calculateWatchTime(stats.seriesWatchTime));
	const moviesWatchTime = $derived(calculateWatchTime(stats.moviesWatchTime));

	function calculateWatchTime(watchTime: number): string {
		const hoursVal = 60 * 60; // seconds in an hour
		const daysVal = 24 * hoursVal; // seconds in a day
		const monthsVal = 30 * daysVal; // seconds in a month

		const months = Math.floor(watchTime / monthsVal); // 30 days * 24 hours * 60 minutes * 60 seconds
		watchTime -= months * monthsVal; // Reduce the watchTime by the months calculated
		const days = Math.floor((watchTime % monthsVal) / daysVal); // 24 hours * 60 minutes * 60 seconds
		watchTime -= days * daysVal; // Reduce the watchTime by the days calculated
		const hours = Math.floor(watchTime / hoursVal);

		const str = `${months > 0 ? months + ' m. ' : ''}${days > 0 ? days + ' j. ' : ''}${hours} h.`;
		return str.trim().replace(/,$/, ''); // Remove trailing comma if exists
	}
</script>

<table>
	<tbody>
		<tr>
			<td class="gauche"
				><p class="title">Temps passé devant des séries :</p>
				<p class="data">{seriesWatchTime}</p></td
			>
			<td class="droite"
				><p class="title">Temps passé devant des films :</p>
				<p class="data">{moviesWatchTime}</p></td
			>
		</tr>
		<tr>
			<td class="gauche"
				><p class="title">Nombre d'épisodes vus :</p>
				<p class="data">{stats.seriesWatched}</p></td
			>
			<td class="droite"
				><p class="title">Nombre de films vus :</p>
				<p class="data">{stats.moviesWatched}</p></td
			>
		</tr>
	</tbody>
</table>

<style>
	td {
		text-align: center;
		border: solid 2px #414141;
		padding: 0.5em;
	}
	.gauche {
		border-left: solid 2px var(--background-color);
	}
	.droite {
		border-right: solid 2px var(--background-color);
	}
	table {
		width: 100%;
		box-sizing: border-box;
		color: #9a9a9a;
	}
	.title {
		font-size: larger;
	}
	.data {
		font-size: xx-large;
		color: #ffffff;
	}
	p {
		margin: 0.2em;
	}
</style>
