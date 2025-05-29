<script lang="ts">
 const { data } = $props();
 const { user } = $derived(data);

</script>

<h1>Search</h1>
{#if !user}
<a href="/auth">Login</a>
{/if}