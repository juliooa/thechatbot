<script lang="ts">
	export let getImage = false;
	export let personalitiesSelection: number;
	export let lengthSelection: number;
	export let smartnessSelection: string;

	let personalities = [
		{ id: 1, text: `Creativo` },
		{ id: 0.2, text: `Conservador` }
	];

	let answersLength = [
		{ id: 160, text: `Largas` },
		{ id: 20, text: `Cortas` }
	];

	let smartness = [
		{ id: 'text-davinci-003', text: `Inteligente` },
		{ id: 'text-ada-001', text: `No tanto` }
	];
</script>

<div class="settings">
	<h3>Características Bot</h3>
	<div class="setting_block">
		Personalidad
		<select bind:value={personalitiesSelection} disabled={getImage}>
			{#each personalities as personality}
				<option value={personality.id}>
					{personality.text}
				</option>
			{/each}
		</select>
	</div>
	<div class="setting_block">
		Largo respuestas
		<select bind:value={lengthSelection} disabled={getImage}>
			{#each answersLength as length}
				<option value={length.id}>
					{length.text}
				</option>
			{/each}
		</select>
	</div>
	<div class="setting_block">
		Inteligencia
		<select bind:value={smartnessSelection} disabled={getImage}>
			{#each smartness as level}
				<option value={level.id}>
					{level.text}
				</option>
			{/each}
		</select>
	</div>
	<div class="ask_image">
		<input type="checkbox" bind:checked={getImage} />
		<label for="scales">Reply with Image?</label>
	</div>
</div>

<style>
	.ask_image {
		font-size: 1.2rem;
		margin-left: 15px;
		margin-top: 10px;
	}
	input[type='checkbox'] {
		transform: scale(1.5);
	}
	select {
		font-size: 1.3rem;
	}

	h3 {
		margin-top: 15px;
	}
	.setting_block {
		display: flex;
		flex-direction: column;
		margin-left: 10px;
		margin-right: 10px;
		padding-bottom: 15px;
	}

	.settings {
		font-size: 1.3rem;
		padding: 10px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
		margin-top: 30px;
		margin-left: 30px;
		display: flex;
		flex-direction: column;
		justify-content: end;
		background: #f7f7f7;
	}
</style>
