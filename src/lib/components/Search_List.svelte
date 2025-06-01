<script lang="ts">
	import type { Snippet } from 'svelte';
	import Fa from 'svelte-fa';
	import { faCircleCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
	import { getImagePath } from '$lib/tmdb';

	interface Props {
		children: Snippet;
		isActive: boolean;
	}

	const { children, isActive }: Props = $props();
</script>

<div class="list">
	<div class="image">
		<img
			src={getImagePath('/okbW9NdKRNKgIUTVA8YZAUGwIUx.jpg','POSTER', 'w500')}
			alt=""
		/>
	</div>
	<div class="info">
		<p class="title">{@render children()}</p>
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
		border-radius: 10px;
	}
	.list {
		height: auto;
		border: solid 2px #74a9b5;
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
</style>
