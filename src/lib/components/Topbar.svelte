<nav>
    <ul>
        <li>
            <a href="#">A voir</a>
        </li>
        <li>
            <a href="#">A venir</a>
        </li>
    </ul>
</nav>

<style>
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    a{
        color: #9a9a9a;
        text-decoration: none;
        font-size: xx-large;
        text-transform: uppercase;
    }
    nav{
        padding: 1.5em;
        font-family: "Jersey 20";
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: #9a9a9a 1px solid;
        z-index: 999;
        background-color: var(--background-color);
    }
</style>