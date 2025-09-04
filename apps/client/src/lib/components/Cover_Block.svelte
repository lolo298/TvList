<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		showProgress: boolean;
		src: string;
		alt: string;
	}

	const { showProgress, src, alt }: Props = $props();
</script>

<div class="cover">
	<img
		src={src}
		alt={alt}
	/>
	{#if showProgress == true}
		<div class="progress-bar">
			<div class="progress"></div>
		</div>
	{/if}
</div>

<style>
	.cover {
		height: 10em;
		width: 8em;
		position: relative;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}
	.progress-bar {
		background-color: #9a9a9a;
		height: 7%;
		border-radius: 5px;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.progress {
		background-color: #ecec75;
		height: 100%;
		border-radius: 5px;
		position: absolute;
		left: 0;
		width: 0;
	}
</style>
