<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
	import type { Snippet } from 'svelte';

	interface Props {
		title: Snippet;
		description: Snippet;
		isActive: boolean;
	}

	const { title, description, isActive }: Props = $props();
</script>

<div class="list">
	<div class="image">
		<img
			src="https://image.over-blog.com/_jCmqCsgfTlSWSTtWQBHwN0brpg=/filters:no_upscale()/image%2F3292067%2F20230516%2Fob_8bb98a_affiche2.png"
			alt=""
		/>
	</div>
	<div class="info">
		<h2>{@render title()}</h2>
		<p>{@render description()}</p>
	</div>
	<div class="check" class:blue={isActive}>
		<Fa icon={faCircleCheck} size="3x" />
	</div>
</div>

<style>
	.list {
		width: 100%;
		display: flex;
		flex-direction: row;
		background-color: #414141;
		padding: 1em;
		border-radius: 10px;
		box-sizing: border-box;
		color: #9a9a9a;
	}
	.image {
		height: 5em;
		width: 8em;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}
	.info {
		margin-left: 2em;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.check {
		position: absolute;
		right: 0;
		margin: 1em;
		margin-right: 2em;
	}
	h2 {
		font-size: 2.2em;
	}
	p {
		font-size: 1.5em;
	}
	.blue {
		color: #74a9b5;
	}
</style>
