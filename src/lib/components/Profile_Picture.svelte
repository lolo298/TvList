<script lang="ts">
	import type { User } from '$lib/types/api';

	interface Props {
		user: User;
	}

	const { user }: Props = $props();
</script>

<div class="list">
	<div class="image">
		<img src={user.profilePicture} alt="" />
	</div>
	<h1>{user.username}</h1>
</div>

<style>
	.list {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}
	.image {
		aspect-ratio: 1 / 1;
		width: 8em;
		padding: 1rem;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}
	h1 {
		font-size: xx-large;
		color: #ffffff;
		margin: 0.5em;
		margin-bottom: 2rem;
	}
</style>
