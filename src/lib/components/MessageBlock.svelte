<script lang="ts">
	import robot_avatar from '$lib/assets/robot.png';
	import julio_avatar from '$lib/assets/julio.jpg';
	import dots from '$lib/assets/dots.gif';
	import type { Message } from '../types';
	export let message: Message;
</script>

<div class="container {message.myself ? 'own-container' : ''}">
	<img class="avatar" src={message.myself ? julio_avatar : robot_avatar} alt="avatar" />
	<section class={message.myself ? 'message own-message' : 'message'}>
		{#if message.loading}
			<div><img width="50" src={dots} alt="typing" /></div>
		{:else if message.imageUrl != undefined}
			<img class="image_message" src={message.imageUrl} alt="image_message" />
		{:else}
			<div>{message.text}</div>
		{/if}
	</section>
</div>

<style>
	.image_message {
		max-height: 400px;
	}
	.avatar {
		border-radius: 50%;
		width: 70px;
		height: 70px;
		max-width: 70px;
		max-height: 70px;
		margin: 5px;
	}
	.container {
		display: flex;
	}
	.container.own-container {
		flex-direction: row-reverse;
	}
	.message {
		display: flex;
		box-sizing: border-box;
		padding: 0.5rem 1rem;
		margin: 1rem;
		background: #fff;
		border-radius: 1.125rem 1.125rem 1.125rem 0;
		min-height: 2.25rem;
		width: fit-content;
		max-width: 66%;
		font-size: 1.5rem;
	}

	.message.own-message {
		align-self: flex-end;
		margin: 1rem 1rem 1rem auto;
		border-radius: 1.125rem 1.125rem 0 1.125rem;
		background: #333;
		color: white;
	}
</style>
