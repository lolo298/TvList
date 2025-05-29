<script lang="ts">
    export let isActive:boolean=true;
</script>

<div class:blue={isActive}>
    <a href="#"><slot/></a>
</div>

<style>
    a{
        color: #9a9a9a;
        text-decoration: none;
        font-size: xx-large;
        text-transform: uppercase;
    }
    .blue{
        background-color: #414141;
        color: #74A9B5;
    }
    .blue > a{
        color: #74A9B5;
    }
    div{
        padding: 1.5em;
    }
</style>