<script lang="ts">
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth';
	let name = $state('');
	let email = $state('');
	let password = $state('');
	let error = $state('');

	async function handleLogin(e: any) {
		e.preventDefault();
		const result = await authClient.signUp.email({
			name,
			email,
			password,
			
		});
		if (result?.error) {
			console.error('Login error:', result.error);
			error = result.error.message || 'An unknown error occurred';
		} else {
			console.log('Login successful, redirecting...');
			goto('/profile');
		}
	}
</script>

<div>
	<h1>Login</h1>
	<form onsubmit={handleLogin}>
		<!-- <button type="submit" name="submit" value="google">Google</button> -->
		<input type="text" name="name" placeholder="Name" required bind:value={name} />
		<input type="email" name="email" placeholder="email" required bind:value={email} />
		<input type="password" name="password" placeholder="Password" required bind:value={password} />
		<button type="submit" name="submit" value="credentials">Login</button>
	</form>
	{#if error}
		<p style="color: red;">Error: {error}</p>
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
