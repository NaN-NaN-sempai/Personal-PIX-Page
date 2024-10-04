<script>
	export let year = new Date().getFullYear();
	export let author = 'Luís Henrique de Almeida Gomes';

	import translations from '$trad';
	let texts;
	translations.subscribe((value) => {
		texts = value;

        console.log(texts.madeWith);
        
	});
</script>

<footer>
	<div class="content">
        
        <div class="title">
            <span>{texts.madeWith}</span>
		</div>
        
		<div class="container">
            <a class="compoundImage" href="https://svelte.dev/">
				<div class="image">
					<img src="/assets/imgs/tools/developer/Svelte.png" alt="Svelt Icon" />
				</div>
				<div class="text">
					<span>Svelte Kit</span>
				</div>
			</a>

			<div class="separator" />

			<a class="compoundImage" href="https://sass-lang.com">
				<div class="image">
					<img src="/assets/imgs/tools/developer/SASS.png" alt="Svelt Icon" />
				</div>
				<div class="text">
					<span>SASS</span>
				</div>
			</a>

			<div class="separator" />

			<a class="compoundImage" href="https://vercel.com/">
				<div class="image">
					<img src="/assets/imgs/tools/developer/Vercel.svg" alt="Svelt Icon" />
				</div>
				<div class="text">
					<span>Vercel</span>
				</div>
			</a>

			<div class="separator" />

			<a class="compoundImage" href="https://openai.com/chatgpt/">
				<div class="image">
					<img src="/assets/imgs/tools/developer/Open AI.png" alt="Svelt Icon" />
				</div>
				<div class="text">
					<span>GPT</span>
				</div>
			</a>
		</div>

        <p class="nameText">
            {author} - {texts.curriculum} - {year}
        </p>

	</div>
</footer>

<style lang="scss">
	@use '$style/_fonts.scss';
	@use '$style/_defaults' as defaults;
	@use '$style/_palette.scss' as palette;
    @use '$style/_gradients.scss' as gradients;
	footer {
		margin-top: 50px;
		width: 100vw;
		text-align: center;
		font-size: 1.2rem;
		background: gradients.$main;

		color: palette.$primary;
        overflow: hidden;

		.content {
			padding: .75rem;
		}
        
        .nameText {
            margin-top: 10px;

            @media (max-width: defaults.$mediaMaxWidth) {
                margin-top: 30px;
            }
        }
	}

	.title {
		padding-bottom: 10px;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;

		.separator {
			width: 0.25rem;
			height: 1rem;
			background: palette.$primary;
			border-radius: 10px;
			margin-inline: 25px;
		}

		.compoundImage {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 10px;
			text-decoration: inherit;
			color: inherit;
            padding: 5px;
            border-radius: 9999px;
            transition: padding-right .2s;

            &:hover {
                text-decoration: underline;
                background: palette.$primary;
                color: palette.$highlight;
                padding-right: 10px;
            }

			.image {
				--size: 1.5rem;
				width: var(--size);
				height: var(--size);
				padding: 5px;
				background: white;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 9999px;
				outline: 2px solid black;

				img {
					height: 100%;
				}
			}
		}

		@media (max-width: defaults.$mediaMaxWidth) {
            display: grid;
            grid-template-columns: 1fr 1fr;

			.separator {
				display: none;
			}

			.compoundImage {
				flex-direction: column;
                gap: 5px;
                border-radius: 10px;
                padding-inline: 10px;

                &:hover {
                    padding: 5px;
                    padding-inline: 10px;
                }
			}
		}
	}
</style>
