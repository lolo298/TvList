<script lang="ts">
    import Fa from 'svelte-fa'
    import { faPlay } from '@fortawesome/free-solid-svg-icons'
</script>

<div>
    <Fa icon={faPlay} size="2.5x"/>
    <p>Lecture</p>
</div>

<style>
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #74A9B5;
        width: fit-content;
        padding: 0.5em;
        border-radius: 10px;
    }
    p{
        font-size: xx-large;
        margin-left: 0.5em;
    }
</style>