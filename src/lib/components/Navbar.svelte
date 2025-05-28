<script lang="ts">
    import Fa from 'svelte-fa'
    import { faCaretDown, faCaretUp, faTv, faFilm, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
</script>

<nav>
    <ul>
        <li>
            <Fa icon={faTv} size="2.5x"/>
            <a href="#">Séries</a>
        </li>
        <li>
            <Fa icon={faFilm} size="2.5x"/>
            <a href="#">Films</a>
        </li>
        <li>
            <Fa icon={faMagnifyingGlass} size="2.5x"/>
            <a href="#">Recherche</a>
        </li>
        <li>
            <Fa icon={faUser} size="2.5x"/>
            <a href="#">Profil</a>
        </li>
    </ul>
</nav>

<style>
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style-type: none;
    }
    li{
        display: flex;
        flex-direction: column;
        color: #9a9a9a;
    }
    a{
        text-decoration: none;
        color: #9a9a9a;
        margin: 0.5em;
        font-size: large;
    }
    nav{
        padding: 0.5em;
        font-family: "Jersey 20";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: #9a9a9a 1px solid;
        padding-top: 1em;
        z-index: 999;
        background-color: var(--background-color);
    }
</style>