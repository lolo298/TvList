<script>
	import ButtonTopbar from "./Button_Topbar.svelte";
</script>
<nav>
    <ul>
        <li>
            <ButtonTopbar isActive={false}>A voir</ButtonTopbar>
        </li>
        <li>
            <ButtonTopbar isActive={true}>A venir</ButtonTopbar>
        </li>
    </ul>
</nav>

<style>
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    nav{
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: #9a9a9a 1px solid;
        z-index: 999;
        background-color: var(--background-color);
    }
    li{
        width: 50%;
        text-align: center;
    }
</style>