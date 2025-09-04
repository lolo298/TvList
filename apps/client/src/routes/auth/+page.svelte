<script lang="ts">
	let { data, children } = $props();
	let { supabase, params } = $derived(data);

	async function handleLogin() {
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${window.location.origin}/auth/callback`
			}
		});
	}
</script>

<div>
	<h1>Login</h1>
	<form method="POST" action="?/login">
		<button type="submit" name="submit" value="google">Google</button>
	</form>
	{#if params.error}
		<p style="color: red;">Error: {params.error}</p>
	{/if}
</div>

<style>
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
		color: #fff;
	}

	div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	button {
		background-color: transparent;
		color: white;
		border: solid 1px #555;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
		font-size: 1rem;
	}
	button:hover {
		background-color: #555;
	}
</style>
