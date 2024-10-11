<script>
	import { page } from '$app/stores';
	import Button from '$components/Button.svelte';
	import Lost from '$components/character/Lost.svelte';
	import Footer from '$components/footer/Footer.svelte';
	import domain from '$lib/domain';

	import translations from '$trad';
	let texts;

	let message = 'Error message';

	translations.subscribe((value) => {
		texts = value;
	});
</script>

<div class="outer">
	<div class="inner">
		<div class="char">
			<Lost/>
		</div>
		<div class="content">
			<h1 class="title">{$page.status}</h1>
			<div class="splitter" />

			<p class="message">
				{@html $page.status == 404 ?
                    texts.notFound +"<br><br>"+texts.useLinksToGoHome :
                    texts.errorInLoading + "<br>" + $page.error.message + "<br><br>" + texts.useLinksToGoHome }
			</p>

			<div class="buttons">
				<div class="homeButton">
					<Button href="/" type="sky">
						{texts.goHome}
					</Button>
				</div>

				<div class="centralize">
					<Button href={"https://"+domain}>
                        {texts.webSite}
                    </Button>
					<Button href="https://github.com/NaN-NaN-sempai">
                        <img class="buttonIcon" src="/assets/imgs/tools/developer/GitHub.png" alt="Github Icon">
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
