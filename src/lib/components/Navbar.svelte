<script lang="ts">
    import Fa from 'svelte-fa'
    import { faCaretDown, faCaretUp, faTv, faFilm, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
</script>

<nav>
    <ul>
        <li>
            <Fa icon={faTv} />
            <a href="#">Séries</a>
        </li>
        <li>
            <Fa icon={faFilm} />
            <a href="#">Films</a>
        </li>
        <li>
            <Fa icon={faMagnifyingGlass} />
            <a href="#">Recherche</a>
        </li>
        <li>
            <Fa icon={faUser} />
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
    nav{
        padding: 1em;
    }
</style>