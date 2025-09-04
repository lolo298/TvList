<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Action = CallableFunction;
	type Props = {
		action: Action;
		children?: Snippet;
    } & HTMLAttributes<HTMLDivElement>;
	const { class: className, action, children }: Props = $props();

	let container: HTMLDivElement | undefined = $state();

	let triggered = $state(false);

    function isAsyncFunction(fn: CallableFunction): boolean {
        return fn.constructor.name === 'AsyncFunction';
    }

    function runAction() {
        if (triggered) return;
        triggered = true;
        if (isAsyncFunction(action)) {
            action().finally(() => {
                triggered = false;
            });
        } else {
            action();
            triggered = false;
        }
    }

	onMount(() => {
		if (container) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							runAction();
						}
					});
				},
				{
					root: null,
					rootMargin: '200px',
					threshold: 1.0
				}
			);
			observer.observe(container);
		}
	});
</script>

<div class={className}>
	{#if children}
		{@render children()}
	{/if}
	<div class="infinite-scroll" bind:this={container}>
		<button
			onclick={() => {
                runAction();
			}}
			class="load-more"
		>
			Charger plus
		</button>
	</div>
</div>

<style>
	.infinite-scroll {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1em;
	}

	.load-more {
		background-color: var(--primary-color);
		color: white;
		border: none;
		border-radius: 5px;
		padding: 0.5em 1em;
		cursor: pointer;
	}

	.load-more:hover {
		background-color: var(--primary-color-hover);
	}
</style>
