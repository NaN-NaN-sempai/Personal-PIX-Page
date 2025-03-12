<script>
	import { page } from '$app/stores';
	import Button from '$components/Button.svelte';
	import Footer from '$components/footer/Footer.svelte';
	import domain from '$lib/domain';

	let errorStatus = $page.status;

	// Characters
	import Lost from '$components/character/Lost.svelte';
	import Guard from '$components/character/Guard.svelte';

	let errorCharRelations = {
		any: Lost,
		401: Guard,
		404: Lost,
	};
	let selectedChar =  Lost;

	import translations from '$trad';
	let texts;	

	let errorTitle = "";
	let errorText = "";


	let setUpError = (texts) => {
		let errorCode = $page.status + " - " + $page.error.message;

		let error = texts.httpStatus[errorStatus];
		selectedChar = errorCharRelations[errorStatus] || errorCharRelations.any;

		if(!error) {
			error = texts.httpStatus.any;
			errorText = error.message + errorCode + '<br><br>' + error.goBackText;

		} else {
			errorText = error.message + '<br><br>' + error.goBackText;
		}
	};

	translations.subscribe((value) => {
		texts = value;	
		
		setUpError(texts);
	});
	
	import { onMount } from 'svelte';
    onMount(() => {
        const params = new URLSearchParams(location.hash.substring(1));
		console.log(params)
        if(params.get('simulateHttp')){
            errorStatus = parseInt(params.get('simulateHttp')) || null;

			setUpError(texts);
        }     
    });
	
</script>

<div class="outer">
	<div class="inner">
		<div class="char">
			<svelte:component this={selectedChar} />
		</div>
		<div class="content">
			<h1 class="title"> {errorStatus} </h1>
			<div class="splitter" />

			<p class="message">
				{@html errorText}
			</p>


			<div class="buttons">
				<div class="homeButton">
					<Button href="/" type="sky">
						{texts.httpStatus.buttons.goHome}
					</Button>
				</div>

				<div class="centralize">
					<Button href={'https://' + domain}>
						{texts.httpStatus.buttons.webSite}
					</Button>
					<Button href="https://github.com/NaN-NaN-sempai">
						<img
							class="buttonIcon"
							src="/assets/imgs/tools/developer/GitHub.png"
							alt="Github Icon"
						/>
						Github
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '$style/_fonts.scss';
	@use '$style/_defaults' as defaults;
	@use '$style/_gradients.scss' as gradients;
	@use '$style/_palette.scss' as palette;

	.outer {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: palette.$highlight;
	}

	.inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 5vw;
	}

	.char {
		width: 450px;
	}
	.buttonIcon {
		height: 1.5rem;
		margin-right: 1rem;
		filter: palette.$filterInverInDarkMode;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 500px;
		margin-bottom: 100px;

		.title {
			font-family: sansation;
			font-size: 5rem;

			.errorTitle {
				font-size: 2rem;
			}
		}

		.splitter {
			height: 0.5rem;
			width: calc(100% - 20px);
			background: gradients.$main;
			border-radius: 999px;
			margin-top: 20px;
		}

		.message {
			font-size: 1.5rem;
			margin-top: 60px;
		}

		.buttons {
			margin-top: 60px;
			display: flex;
			flex-direction: column;
			align-items: center;
			--gap: 20px;
			gap: var(--gap);

			.centralize {
				display: flex;
				flex-direction: row;
				gap: var(--gap);
			}
		}
	}

	@media (max-width: defaults.$mediaMaxWidth) {
		.outer {
			margin-top: 20px;
		}

		.inner {
			flex-direction: column-reverse;
			gap: 20px;
		}

		.char {
			width: 70%;
		}

		.content {
			max-width: 100vw;
			margin: 40px;

			.title {
				font-size: 3rem;
			}
			.splitter {
				margin-top: 5px;
			}
			.message {
				margin-top: 15px;
				font-size: 1.2rem;
				text-align: center;
			}
			.buttons {
				margin-top: 40px;
			}
		}
	}
</style>
