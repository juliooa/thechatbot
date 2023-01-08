<script lang="ts">
	import type { Message } from '$lib/types';
	import { createCompletion, createImage, type CompletionProps } from '$lib/openai_client';
	import Settings from '$lib/components/Settings.svelte';
	import Chatbox from '$lib/components/Chatbox.svelte';

	let message_id = 0;
	let messages: Message[] = [];
	let inputTextMessage: string = '';
	let getImage = false;
	let smartnessSelection: string;
	let personalitiesSelection: number;
	let lengthSelection: number;

	async function sendMessage() {
		let messageToSend = inputTextMessage;
		inputTextMessage = '';
		let newMessage: Message = {
			id: String(message_id++),
			myself: true,
			text: messageToSend,
			loading: false
		};
		addMessageToConversation(newMessage);

		let nextId = String(message_id++);
		addTypingMessageToConversation(nextId);

		let message: Message = getImage
			? await createImageMessageResponse(nextId, messageToSend)
			: await createTextMessageResponse(nextId, messageToSend);

		addMessageToConversationIndex(nextId, message);
	}

	function addMessageToConversationIndex(id: string, message: Message) {
		let index = messages.findIndex((message) => {
			console.log(message.id + ' vs ' + id);
			return message.id == id;
		});
		console.log(index);
		messages[index] = message;
		messages = messages;
	}

	function addTypingMessageToConversation(id: string) {
		let answerMessage: Message = {
			id,
			myself: false,
			text: '',
			loading: true
		};
		addMessageToConversation(answerMessage);
	}

	function addMessageToConversation(message: Message) {
		messages.push(message);
		messages = messages;
	}

	async function createTextMessageResponse(id: string, message: string) {
		let props: CompletionProps = {
			model: smartnessSelection,
			max_tokens: lengthSelection,
			temperature: personalitiesSelection,
			prompt: message
		};

		let answer = await createCompletion(props);
		let answerMessage: Message = {
			id,
			myself: false,
			text: answer,
			loading: false
		};
		return answerMessage;
	}

	async function createImageMessageResponse(id: string, messageToSend: string) {
		let imageResponse = await createImage(messageToSend);
		let answerMessage: Message = {
			id,
			myself: false,
			text: '',
			loading: false,
			imageUrl: imageResponse.url
		};
		return answerMessage;
	}
</script>

<div class="root">
	<div class="left-panel">
		<Settings
			bind:getImage
			bind:smartnessSelection
			bind:lengthSelection
			bind:personalitiesSelection
		/>
	</div>
	<div class="main">
		<Chatbox bind:inputTextMessage bind:messages {sendMessage} />
	</div>
</div>

<style>
	.left-panel {
		flex: 20;
	}
	.root {
		height: 100%;
		display: flex;
		justify-content: center;
	}
	.main {
		display: flex;
		justify-content: center;
		flex: 80;
	}
</style>
