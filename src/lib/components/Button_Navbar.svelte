<script lang="ts">
    import Fa from 'svelte-fa'
    import { faTv, faFilm, faMagnifyingGlass, faUser, type IconDefinition } from '@fortawesome/free-solid-svg-icons'
    export let isActive:boolean=true;
    export let icon:IconDefinition;
</script>

<div class:blue={isActive}>
    <Fa icon={icon} size="2.5x"/>
    <a href="#"><slot/></a>
</div>
        

<style>
    .blue{
        background-color: #414141;
        color: #74A9B5;
    }
    .blue > a{
        color: #74A9B5;
    }
    a{
        text-decoration: none;
        color: #9a9a9a;
        font-size: large;
        margin: 0.3em;
    }
    div{
        padding-top: 0.5em;
        display: flex;
        flex-direction: column;
    }
</style>