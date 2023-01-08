<script lang="ts">
	import MessageBlock from './MessageBlock.svelte';
	import type { Message } from '../types';
	export let inputTextMessage: string;
	export let messages: Message[];
	export let sendMessage: () => void;
</script>

<div class="chatbox">
	<div class="messages">
		{#each messages as message (message.id)}
			<MessageBlock {message} />
		{/each}
	</div>
	<form class="input-container" on:submit|preventDefault={sendMessage}>
		<input
			class="input-box"
			placeholder="Escribe tu mensaje"
			type="text"
			bind:value={inputTextMessage}
		/>
		<button class="btn btn-primary" type="submit">Enviar</button>
	</form>
</div>

<style>
	.chatbox {
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
		padding: 50px;
		margin-top: 30px;
		margin-bottom: 30px;
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: end;
		background: #f7f7f7;
	}
	input {
		border: none;
		background-image: none;
		background-color: white;
		padding: 0.5rem 1rem;
		margin-right: 1rem;
		border-radius: 1.125rem;
		box-shadow: 0 0 1rem rgba(black, 0.1), 0rem 1rem 1rem -1rem rgba(black, 0.2);
		font-weight: 400;
		font-size: 1.5rem;
		letter-spacing: 0.025em;
	}
	.messages {
		flex-grow: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: end;
	}
	.input-container {
		display: flex;
	}
	.input-box {
		flex-grow: 1;
	}

	.btn {
		font-weight: 300;
		line-height: 1.53;
		color: #697a8d;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		user-select: none;
		background-color: transparent;
		border: 1px solid transparent;
		padding: 0.4375rem 1.25rem;
		font-size: 1.4rem;
		border-radius: 0.375rem;
		transition: all 0.2s ease-in-out;
	}

	.btn:hover {
		color: #697a8d;
	}
	.btn-primary {
		color: #fff;
		background-color: #696cff;
		border-color: #696cff;
		box-shadow: 0 0.125rem 0.25rem 0 rgba(105, 108, 255, 0.4);
	}
	.btn-primary:hover {
		color: #fff;
		background-color: #5f61e6;
		border-color: #5f61e6;
		transform: translateY(-1px);
	}
	.btn-primary:disabled {
		border: 1px solid #999999;
		background-color: #cccccc;
		color: #666666;
		box-shadow: 0 0.125rem 0.25rem 0 rgba(141, 141, 141, 0.4);
	}
</style>
