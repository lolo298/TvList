<script lang="ts">
	import SearchList from '$lib/components/Search_List.svelte';
	import InfiniteScroll from '$lib/components/Infinite_Scroll.svelte';

	const { data } = $props();
	const { user, trending } = $derived(data);
	// svelte-ignore state_referenced_locally
	let shows = $state(trending);
	let page = $state(2);
</script>

<a href="/auth">login</a>
<h1>Search</h1>
<!-- <SearchList isActive={true}>Oshi no Ko</SearchList> -->
<div class="wrapper">
	<InfiniteScroll
		class="search-list"
		action={async () => {
			console.log('Loading more shows...');
			const res = await fetch('/api/trending?page=' + page);
			if (!res.ok) {
				throw new Error('Failed to fetch trending shows');
			}
			const newShows = await res.json();
			console.log('New shows:', newShows);

			if (newShows.length > 0) {
				page += 1;
				shows = [...shows, ...newShows];
			}
		}}
	>
		{#if shows.length === 0}
			<p>Loading...</p>
		{/if}
		{#if shows.length > 0}
			<p>Trending</p>
		{/if}
		{#each shows as item}
			<SearchList show={item} isActive={false} />
		{/each}
	</InfiniteScroll>
</div>

<style>
	.wrapper :global(.search-list) {
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 1em;
	}
</style>
