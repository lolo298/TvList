<script>
	import { getSerie } from '$lib/api';
import Arrow from '$lib/components/Arrow.svelte';
	import ButtonViewMode from '$lib/components/Button_View_Mode.svelte';
	import Button from '$lib/components/Button_View_Mode.svelte';
	import CategoriesTitle from '$lib/components/Categories_Title.svelte';
	import CatTitle from '$lib/components/Categories_Title.svelte';
	import CoverBlock from '$lib/components/Cover_Block.svelte';
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

	const { data } = $props();
	const { prefs } = $derived(data);
</script>

<section>
	<Topbar />
	<div class="top">
		<div class="catTitle">
		<CategoriesTitle>En cours</CategoriesTitle>
		</div>
		<div class="mode">
			<ButtonViewMode state={true}></ButtonViewMode>
		</div>
	</div>
	<div class="list">
		<div class="cover">
			{#await getSerie(456)}
			{:then info} 
				<CoverBlock showProgress={true} src={info.cover?info.cover:""} alt={info.id.toString()}></CoverBlock>
			{/await}
		</div>
		<div class="cover">
			{#await getSerie(456)}
			{:then info} 
				<CoverBlock showProgress={true} src={info.cover?info.cover:""} alt={info.id.toString()}></CoverBlock>
			{/await}
		</div>
		<div class="cover">
			{#await getSerie(456)}
			{:then info} 
				<CoverBlock showProgress={true} src={info.cover?info.cover:""} alt={info.id.toString()}></CoverBlock>
			{/await}
		</div>
		<div class="cover">
			{#await getSerie(456)}
			{:then info} 
				<CoverBlock showProgress={true} src={info.cover?info.cover:""} alt={info.id.toString()}></CoverBlock>
			{/await}
		</div>
	</div>
	<div class="catTitle">
		<CategoriesTitle>Pas commencés</CategoriesTitle>
	</div>
	<p>{prefs.defaultPage}</p>
</section>

<style>
	.catTitle{
		width: 15em;
		margin: 1em;
	}
	.mode{
		margin: 1em;
	}
	.top{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	.list{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.cover{
		margin-top: 1em;
		margin-bottom: 1em;
	}
</style>