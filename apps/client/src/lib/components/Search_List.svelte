<script lang="ts">
	import type { Snippet } from 'svelte';
	import Fa from 'svelte-fa';
	import { faCircleCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
	import { getImagePath } from '$lib/tmdb';
	import { type Prisma } from 'database';

	interface Props {
		isActive: boolean;
		show: Prisma.ShowGetPayload<{
			include: {
				images: true;
			};
		}>;
	}

	const { show, isActive }: Props = $props();
	console.log(JSON.stringify(show.images));
</script>

<a href="{`${show.type}`}/{`${show.tmdbId}`}">
	<div class="list" data-id={show.tmdbId}>
		<div class="image">
			<img
				src={getImagePath(
					show.images.find((image) => image.type === 'POSTER')?.url ?? '',
					'POSTER',
					'w500'
				)}
				alt=""
			/>
		</div>
		<div class="info">
			<p class="title">{show.name}</p>
			{#if isActive == false}
				<div class="icon">
					<Fa icon={faPlus} size="1.7x" />
				</div>
			{:else}
				<div class="icon_active">
					<Fa icon={faCircleCheck} size="1.8x" />
				</div>
			{/if}
		</div>
		
	</div>
</a>

<style>
	.image {
		width: 100%;
		height: 10em;
		position: relative;
	}
	.image::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: -1px;
		box-shadow: 0 -35px 30px var(--background-color) inset;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.list {
		height: auto;
		border: solid 1px #74a9b5;
		border-radius: 10px;
		position: relative;
		overflow: hidden;
	}
	.info {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 1em;
		background-color: var(--background-color);
		position: relative;
	}
	.icon {
		height: 2em;
		width: 2em;
		position: absolute;
		right: 0;
		color: #74a9b5;
		margin-right: 1em;
		background-color: #414141;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.title {
		font-size: x-large;
		color: #ffffff;
	}
	.icon_active {
		position: absolute;
		right: 0;
		margin-right: 1em;
		color: #74a9b5;
	}
	a{
		text-decoration: none;
	}
</style>
