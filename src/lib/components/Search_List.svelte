<script lang="ts">
	import type { Snippet } from 'svelte';
    import Fa from 'svelte-fa';
	import { faCircleCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

	interface Props {
		children: Snippet;
        isActive: boolean;
	}

	const { children, isActive }: Props = $props();
    
</script>

<div class="list">
    <div class="image">
        <img src="https://image.over-blog.com/_jCmqCsgfTlSWSTtWQBHwN0brpg=/filters:no_upscale()/image%2F3292067%2F20230516%2Fob_8bb98a_affiche2.png" alt="">
    </div>
    <div class="info">
        <p class="title">{@render children()}</p>
        {#if isActive == false}
        <div class="icon">
            <Fa icon={faPlus} size="1.7x"/>
        </div>
        {:else}
        <div class="icon_active">
            <Fa icon={faCircleCheck} size="1.8x"/>
        </div>
        {/if}
    </div>
</div>

<style>
    .image{
        width: 100%;
        height: 10em;
        position: relative;
    }
    .image::after{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: -1px;
        box-shadow: 0 -35px 30px var(--background-color) inset;
    }
    img{
        width: 100%;
		height: 100%;
		object-fit: cover;
        border-radius: 10px;
    }
    .list{
        height: auto;
        border: solid 2px #74A9B5;
        border-radius: 10px;
        position: relative;
    }
    .info{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1em;
        background-color: var(--background-color);
        position: relative;
    }
    .icon{
        height: 2em;
        width: 2em;
        position: absolute;
        right: 0;
        color: #74A9B5;
        margin-right: 1em;
        background-color: #414141;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title{
        font-size: x-large;
        color: #FFFFFF;
    }
    .icon_active{
        position: absolute;
        right: 0;
        margin-right: 1em;
        color: #74A9B5;
    }
</style>