<script lang="ts">
	import SearchList from '$lib/components/Search_List.svelte';

	const { data } = $props();
	const { user } = $derived(data);
</script>

<h1>Search</h1>
<SearchList isActive={true}>Oshi no Ko</SearchList>
<a href="/auth">login</a>
