<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		isActive: boolean;
	}

	const { children, isActive }: Props = $props();
</script>

<div class:blue={isActive}>
	<a href="#">{@render children()}</a>
</div>

<style>
	a {
		color: #9a9a9a;
		text-decoration: none;
		font-size: xx-large;
		text-transform: uppercase;
	}
	.blue {
		background-color: #414141;
		color: #74a9b5;
	}
	.blue > a {
		color: #74a9b5;
	}
	div {
		padding: 1.5em;
	}
</style>
