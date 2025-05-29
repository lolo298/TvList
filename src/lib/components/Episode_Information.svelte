<div class="list">
    <p class="episode"><slot name="episode"/></p>
    <div class="image">
        <img src="https://image.over-blog.com/_jCmqCsgfTlSWSTtWQBHwN0brpg=/filters:no_upscale()/image%2F3292067%2F20230516%2Fob_8bb98a_affiche2.png" alt="">
    </div>
    <div class="info">
        <h2><slot name="title"/></h2>
        <p class="ep_info"><slot name="info"/></p>
    </div>
    <p class="time"><slot name="time"/></p>
</div>

<style>
    .list{
        box-sizing: border-box;
        background-color: #414141;
        display: flex;
        flex-direction: row;
        padding: 1em;
        align-items: center;
        border-radius: 10px;
        color: #FFFFFF;
        font-family: "Inter";
    }
    .image{
       width: 6em;
       height: 6em;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
    .info{
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 6em;
        margin-left: 1em;
    }
    h2{
        margin-bottom: 0.2em;
        font-size: xx-large;
        font-weight: bold;
    }
    p{
        font-size: large;
    }
    .episode{
        width: 10%;
        font-size: xx-large;
        color: #9A9A9A;
    }
    .time{
        font-size: larger;
        font-weight: bold;
    }
    .ep_info{
        color: #9A9A9A;
    }
</style>