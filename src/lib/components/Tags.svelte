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
		border: 2px solid #74a9b5;
		color: #74a9b5;
		padding: 0.2em;
		width: fit-content;
		border-radius: 5px;
	}
</style>
