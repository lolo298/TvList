<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<p>{@render children()}</p>

<style>
	p {
		text-align: center;
		background-color: #414141;
		padding: 0.5em;
		border-radius: 10px;
		width: 100%;
		color: #9a9a9a;
		text-transform: uppercase;
		font-size: larger;
		box-sizing: border-box;
	}
</style>
