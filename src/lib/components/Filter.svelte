<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		isActive: boolean;
	}

	const { children, isActive }: Props = $props();
</script>

<p class:blue={isActive}>{@render children()}</p>

<style>
	p {
		background-color: #414141;
		color: #9a9a9a;
		border-radius: 5px;
		padding: 0.5em;
		text-align: center;
		text-transform: uppercase;
	}
	.blue {
		color: #262626;
		background-color: #98d9e8;
	}
</style>
