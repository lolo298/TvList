<script>
	import ButtonViewMode from '$lib/components/Button_View_Mode.svelte';
	import CategoriesTitle from '$lib/components/Categories_Title.svelte';
	import CoverBlock from '$lib/components/Cover_Block.svelte';
	import Topbar from '$lib/components/Topbar.svelte';
</script>

<Topbar />
<ButtonViewMode state={true} />
<CategoriesTitle>Pas encore vue</CategoriesTitle>
<CoverBlock showProgress={false} />
<CategoriesTitle>Vue</CategoriesTitle>
