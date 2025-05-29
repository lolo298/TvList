<script lang="ts">
	import { faTv, faFilm, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
	import ButtonNavbar from './Button_Navbar.svelte';
</script>

<nav>
	<ul>
		<li>
			<ButtonNavbar icon={faTv} isActive={false} href="/">Series</ButtonNavbar>
		</li>
		<li>
			<ButtonNavbar icon={faFilm} isActive={false} href="/films">Films</ButtonNavbar>
		</li>
		<li>
			<ButtonNavbar icon={faMagnifyingGlass} isActive={false} href="/search">Recherche</ButtonNavbar>
		</li>
		<li>
			<ButtonNavbar icon={faUser} isActive={false} href="/profile">Profil</ButtonNavbar>
		</li>
	</ul>
</nav>

<style>
	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		list-style-type: none;
	}
	li {
		width: 25%;
		text-align: center;
		color: #9a9a9a;
	}
	nav {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		border-top: #9a9a9a 1px solid;
		z-index: 999;
		background-color: var(--background-color);
	}
</style>
