<script lang="ts">
	import DataProfile from '$lib/components/Data_Profile.svelte';
	import ProfileList from '$lib/components/Profile_List.svelte';
	import ProfilePicture from '$lib/components/Profile_Picture.svelte';

	const { data } = $props();
	const { user } = $derived(data);
</script>

{#if user}
	<ProfilePicture image={user.image} name={user.name} />
	<DataProfile stats={user.userData.stats} />
{/if}
