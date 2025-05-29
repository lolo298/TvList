<script>
	import Button from '$lib/components/Button_View_Mode.svelte';
	import CatTitle from '$lib/components/Categories_Title.svelte';
	import Cover from '$lib/components/Cover_Block.svelte';
	import CoverList from '$lib/components/Cover_List.svelte';
	import EpisodeInformation from '$lib/components/Episode_Information.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import PlayButton from '$lib/components/Play_Button.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import Topbar from '$lib/components/Topbar.svelte';
</script>

<section>
	<Navbar />
	<Topbar />
	<CoverList isActive={false}>
		{#snippet title()}
			Oshi No Ko
		{/snippet}
		{#snippet description()}
			EP1 - blabla
		{/snippet}
	</CoverList>
	<PlayButton />
	<EpisodeInformation episode={1} time={25}>
		{#snippet title()}Oshi No Ko{/snippet}
		{#snippet info()}blabla{/snippet}
	</EpisodeInformation>
</section>
