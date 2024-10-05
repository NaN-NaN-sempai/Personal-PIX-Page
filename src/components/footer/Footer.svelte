<script>
	export let year = new Date().getFullYear();
	export let author = 'Luís Henrique de Almeida Gomes';

	import translations from '$trad';
	import CompoundImage from './components/CompoundImage.svelte';
	let texts;
	translations.subscribe((value) => {
		texts = value;
	});

	let socialImageSize = '1rem';
</script>

<footer>
	<div class="content">
		<div class="title">
			<span>{texts.madeWith}</span>
		</div>

		<div class="container">
			<div class="item footerCompoundImage">
				<CompoundImage
					name="Svelte"
					src="/assets/imgs/tools/developer/Svelte.png"
					href="https://svelte.dev/"
				/>
			</div>

			<div class="item footerCompoundImage">
				<CompoundImage
					name="SASS"
					src="/assets/imgs/tools/developer/SASS.png"
					href="https://sass-lang.com"
				/>
			</div>

			<div class="item footerCompoundImage">
				<CompoundImage
					name="Vercel"
					src="/assets/imgs/tools/developer/Vercel.svg"
					href="https://vercel.com/"
				/>
			</div>

			<div class="item footerCompoundImage">
				<CompoundImage
					name="GPT"
					src="/assets/imgs/tools/developer/Open AI.png"
					href="https://openai.com/chatgpt/"
				/>
			</div>
		</div>

		<hr />

		<p class="nameText">
			<a href="https://luishenrique.site">
				{author}
			</a>
			|
			<a href="https://luishenrique.site/curriculo">
				{texts.curriculum}
			</a>
			|
			<a href="https://en.wikipedia.org/wiki/2024">
				{year}
			</a>
		</p>

		<hr />
		
		<div class="container social">
			<div class="item footerCompoundImage">
				<CompoundImage
					social={true}
					name="LinkedIn"
					src="/assets/imgs/social/Linkedin.png"
					href="https://www.linkedin.com/in/lu%C3%ADs-henrique-de-almeida-949954217/"
				/>
			</div>

			<div class="item footerCompoundImage">
				<CompoundImage
					social={true}
					name="Youtube"
					src="/assets/imgs/social/Youtube.png"
					href="https://www.youtube.com/@okodadev"
				/>
			</div>

			<div class="item footerCompoundImage">
				<CompoundImage
					social={true}
					name="Instagram"
					src="/assets/imgs/social/Instagram.png"
					href="https://www.instagram.com/luis_hnrique/"
				/>
			</div>

			<div class="item footerCompoundImage">
				<CompoundImage
					social={true}
					name="NPM"
					src="/assets/imgs/social/NPM.png"
					href="https://www.npmjs.com/~okoda"
				/>
			</div>

			<div class="item footerCompoundImage">
				<CompoundImage
					social={true}
					name="Stackoverflow"
					src="/assets/imgs/social/Stackoverflow.png"
					href="https://stackoverflow.com/users/8639520/lu%c3%ads-henrique-de-almeida"
				/>
			</div>

			<div class="item footerCompoundImage">
				<CompoundImage
					social={true}
					name="Steam"
					src="/assets/imgs/social/Steam.png"
					href="https://steamcommunity.com/id/Okoda/"
				/>
			</div>

			<div class="item footerCompoundImage">
				<CompoundImage
					social={true}
					name="IMDB"
					src="/assets/imgs/social/IMDB.png"
					href="https://www.imdb.com/user/ur174614034/"
				/>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	@use '$style/_fonts.scss';
	@use '$style/_defaults' as defaults;
	@use '$style/_palette.scss' as palette;
	@use '$style/_gradients.scss' as gradients;

	a {
		text-decoration: inherit;
		color: inherit;
	}

	footer {
		margin-top: 50px;
		width: 100vw;
		text-align: center;
		font-size: 1.2rem;
		background: gradients.$main;

		color: palette.$primary;
		overflow: hidden;

		.content {
			padding: 0.75rem;
		}

		hr {
			margin-block: 30px;
			border: 2px solid palette.$primary;
			border-radius: 9999px;
		}

		.nameText {
			margin-bottom: 15px;

			a {
				border-radius: 9999px;
				padding: 5px;
				transition: padding 0.2s;

				&:hover {
					text-decoration: underline;
					background: palette.$primary;
					color: palette.$highlight;
					padding-inline: 15px;
				}
			}

			@media (max-width: defaults.$mediaMaxWidth) {
				margin-top: 30px;
			}
		}
	}

	.title {
		padding-bottom: 10px;
	}

	.container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: row;

		.item {
			position: relative;
			display: flex;
			align-items: center;

			&::after {
				content: '';
				display: inline-block;
				position: relative;
				width: 0.25rem;
				height: 1rem;
				background: palette.$primary;
				border-radius: 10px;
				margin-inline: 25px;
			}

			&:last-child::after {
				display: none;
			}
		}
		
		@media (max-width: defaults.$mediaMaxWidth) {
			.item {
				&::after {
					display: none;
				}
			}
		}
	}
</style>
