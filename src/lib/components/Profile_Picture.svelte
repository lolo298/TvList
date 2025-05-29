<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		name: Snippet;
	}

	const { name }: Props = $props();
</script>

<div class="list">
    <div class="image">
        <img src="https://image.over-blog.com/_jCmqCsgfTlSWSTtWQBHwN0brpg=/filters:no_upscale()/image%2F3292067%2F20230516%2Fob_8bb98a_affiche2.png" alt="">
    </div>
    <h1>{@render name()}</h1>
</div>

<style>
    .list{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    .image{
        width: 10em;
        height: 10em;
    }
    img{
        width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
    }
    h1{
        font-size: xx-large;
        color: #FFFFFF;
        margin: 0.5em;
    }
</style>