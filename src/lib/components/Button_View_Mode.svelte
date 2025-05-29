<script lang="ts">
	import Fa from 'svelte-fa';
	import { faList, faGrip } from '@fortawesome/free-solid-svg-icons';

	interface Props {
		state: boolean;
	}
	const { state }: Props = $props();
</script>

<div>
	{#if state == true}
		<Fa icon={faList} size="2.5x" />
	{:else}
		<Fa icon={faGrip} size="2.5x" />
	{/if}
</div>

<style>
	div {
		background-color: #ecec75;
		height: 3em;
		width: 3em;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--background-color);
		padding: 0.1em;
	}
</style>
