<script>
	import Arrow from '$lib/components/Arrow.svelte';
	import Button from '$lib/components/Button_View_Mode.svelte';
	import CatTitle from '$lib/components/Categories_Title.svelte';
	import Cover from '$lib/components/Cover_Block.svelte';
	import CoverList from '$lib/components/Cover_List.svelte';
	import DataProfile from '$lib/components/Data_Profile.svelte';
	import EditProfileButton from '$lib/components/Edit_Profile_Button.svelte';
	import EpisodeInformation from '$lib/components/Episode_Information.svelte';
	import ExitButton from '$lib/components/Exit_Button.svelte';
	import Filter from '$lib/components/Filter.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import PlayButton from '$lib/components/Play_Button.svelte';
	import Plus from '$lib/components/Plus.svelte';
	import ProfileList from '$lib/components/Profile_List.svelte';
	import ProfilePicture from '$lib/components/Profile_Picture.svelte';
	import SearchList from '$lib/components/Search_List.svelte';
	import Star from '$lib/components/Star.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import Topbar from '$lib/components/Topbar.svelte';
</script>

<section>
	<Navbar />
	<Topbar />
	<EpisodeInformation episode={1} time={25}>
		{#snippet title()}Oshi No Ko{/snippet}
		{#snippet info()}blabla{/snippet}
	</EpisodeInformation>
	<SearchList isActive={true}>Oshi no Ko</SearchList>
	<Arrow/>
</section>
