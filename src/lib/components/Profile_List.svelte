<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		name: Snippet;
	}

	const { name }: Props = $props();
</script>

<div class="list">
    <h2>{@render name()}</h2>
    <div class="image_list">
        <div class="image">
            <img src="https://image.over-blog.com/_jCmqCsgfTlSWSTtWQBHwN0brpg=/filters:no_upscale()/image%2F3292067%2F20230516%2Fob_8bb98a_affiche2.png" alt="">
        </div>
        <div class="image">
            <img src="https://image.over-blog.com/_jCmqCsgfTlSWSTtWQBHwN0brpg=/filters:no_upscale()/image%2F3292067%2F20230516%2Fob_8bb98a_affiche2.png" alt="">
        </div>
    </div>
</div>

<style>
    .image{
        width: 4em;
        height: 5em;
        margin: 0.5em;
    }
    img{
        width: 100%;
		height: 100%;
		object-fit: cover;
        border-radius: 5px;
    }
    .image_list{
        display: flex;
        flex-direction: row;
    }
    .list{
        border: solid 2px #74A9B5;
        width: max-content;
        text-align: center;
        border-radius: 5px;
    }
    h2{
        margin: 0.5em;
        font-size: x-large;
        color: #74A9B5;
    }
</style>