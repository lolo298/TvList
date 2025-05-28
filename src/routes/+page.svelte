<script>
    import Button from "$lib/components/Button.svelte";
import CatTitle from "$lib/components/CatTitle.svelte";
	import Cover from "$lib/components/Cover.svelte";
import Navbar from "$lib/components/Navbar.svelte";
	import Topbar from "$lib/components/Topbar.svelte";
</script>

<section>
    <Navbar/>
    <Topbar/>
    <CatTitle>En cours</CatTitle>
    <Cover/>
    <Cover progress={false}/>
    <Button/>
</section>