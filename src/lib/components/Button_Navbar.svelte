<script lang="ts">
	import Fa from 'svelte-fa';
	import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		isActive: boolean;
		icon: IconDefinition;
		href?: string;
	}

	const { children, isActive, icon, href }: Props = $props();
</script>

<a class:blue={isActive} href={href || '#'}>
	<Fa {icon} size="2.5x" />
	<span>
		{@render children()}
	</span>
</a>

<style>
	.blue {
		background-color: #414141;
		color: #74a9b5;
	}
	a {
		padding-top: 0.5em;
		display: flex;
		flex-direction: column;

		text-decoration: none;
		color: #9a9a9a;
		font-size: large;
		margin: 0.3em;
	}
	span {
		margin-top: 0.5em;
	}
</style>
