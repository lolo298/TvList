<script lang="ts">
    export let progress:boolean = true;
</script>

<div class="cover">
    <img src="https://image.over-blog.com/_jCmqCsgfTlSWSTtWQBHwN0brpg=/filters:no_upscale()/image%2F3292067%2F20230516%2Fob_8bb98a_affiche2.png" alt="">
    {#if progress==true}
    <div class="progress-bar">
        <div class="progress"></div>
    </div>
    {/if}
</div>

<style>
    .cover{
        height: 10em;
        width: 8em;
        position: relative;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
    .progress-bar{
        background-color: #9a9a9a;
        height: 7%;
        border-radius: 5px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .progress{
        background-color: #ECEC75;
        height: 100%;
        border-radius: 5px;
        position: absolute;
        left: 0;
        width: 0;
    }
</style>