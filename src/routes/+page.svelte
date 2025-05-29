<script>
    import Button from "$lib/components/Button_View_Mode.svelte";
import CatTitle from "$lib/components/Categories_Title.svelte";
	import Cover from "$lib/components/Cover_Block.svelte";
	import CoverList from "$lib/components/Cover_List.svelte";
import Navbar from "$lib/components/Navbar.svelte";
	import PlayButton from "$lib/components/Play_Button.svelte";
	import Tags from "$lib/components/Tags.svelte";
	import Topbar from "$lib/components/Topbar.svelte";
</script>

<section>
    <Navbar/>
    <Topbar/>
    <CoverList isActive={false}><svelte:fragment slot="title">Oshi No Ko</svelte:fragment><svelte:fragment slot="description">EP1 - blabla</svelte:fragment></CoverList>
    <PlayButton/>
</section>