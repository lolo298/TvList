<script lang="ts">
	import Fa from 'svelte-fa';
	import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		isActive: boolean;
		icon: IconDefinition;
	}

	const { children, isActive, icon }: Props = $props();
</script>

<div class:blue={isActive}>
	<Fa {icon} size="2.5x" />
	<a href="#">{@render children()}</a>
</div>

<style>
	.blue {
		background-color: #414141;
		color: #74a9b5;
	}
	.blue > a {
		color: #74a9b5;
	}
	a {
		text-decoration: none;
		color: #9a9a9a;
		font-size: large;
		margin: 0.3em;
	}
	div {
		padding-top: 0.5em;
		display: flex;
		flex-direction: column;
	}
</style>
