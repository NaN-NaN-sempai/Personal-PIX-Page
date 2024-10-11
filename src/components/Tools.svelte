<script>
	import Scroller from './Scroller.svelte';

	/*
    //Use this in case of image update to get the image list

    let designer = import.meta.glob('$lib/assets/imgs/tools/designer/*');
    let adobe = import.meta.glob('$lib/assets/imgs/tools/designer/Adobe/*');
    let developer = import.meta.glob('$lib/assets/imgs/tools/developer/*');

    let tools = {...adobe, ...designer, ...developer};
    
    for (const path in tools) {
        const name = path.split('/').pop()
            .replace('.png', '')
            .replace('.svg', '');

        console.log(`"${path}"`);
        
    } */

	let toolsArray = [];

	async function loadImages() {
		let tools = [
			'designer/Adobe/Illustrator.png',
			'designer/Adobe/Photoshop.png',
			'designer/Adobe/Fresco.png',
			'designer/Adobe/Premiere.png',
			'designer/Adobe/XD.png',

			'designer/Figma.png',
			'designer/Photopea.png',

			'developer/HTML.png',
			'developer/CSS.png',
			'developer/Javascript.png',
			'developer/SASS.png',
			'developer/Svelte.png',
			'developer/Vue.png',
			'developer/Electron.png',
			'developer/Node JS.png',
			'developer/ESLint.png',
			'developer/Mongo.png',
			'developer/MySQL.png',
			'developer/SQLite.png',
			'developer/Oracle Apex.png',
			'developer/GitHub.png',
			'developer/Firebase.png',
			'developer/Vercel.svg',
			'developer/Next JS.png',
			'developer/Stack Overflow.png',
			'developer/Typescript.png',
			'developer/C Sharp.png',
			'developer/Python.png',
			'developer/Open AI.png'
		];

		let switchDarkModeList = [
			"Open AI",
			"GitHub",
			"Vercel",
			"Next JS"
		]

		for (let item of tools) {
			const name = item.split('/').pop().replace('.png', '').replace('.svg', '');

			toolsArray.push({
				name,
				path: `/assets/imgs/tools/${item}`,
				darkMode: switchDarkModeList.includes(name)
			});
		}
	}

	loadImages();
</script>

<div class="wrapper">
	<Scroller>
		{#each toolsArray as tool}
			<div class="imageContainer" data-toolname={tool.name}>
				<img class="toolImage" src={tool.path} alt={tool.name} data-darkmode={tool.darkMode} />
			</div>
		{/each}
	</Scroller>
</div>

<style lang="scss">
	@use '$style/_palette' as palette;

	.wrapper {
		width: 100%;
		max-width: 1940px;
	}
	.toolImage {
		height: 60px;

		--shadow: drop-shadow(0 10px 2px rgba(0, 0, 0, 0.25));
		--shadowHover: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.5));
		filter: var(--shadow);

		transition: filter 0.5s;

		&[data-darkmode='true'] {	
			filter:
				palette.$filterInverInDarkMode
				var(--shadow);

			&:hover {
				filter:
					palette.$filterInverInDarkMode
					var(--shadowHover);
			}
		}

		&:hover {
			filter: var(--shadowHover);
		}
	}
	.imageContainer {
		position: relative;
		cursor: url('$lib/assets/cursor/star.png') 23 23, wait;

		&::after {
			content: attr(data-toolname);
			position: absolute;
			top: -15px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 10;

			background: palette.$secondary;
			border: 3px solid palette.$highlight;
			color: palette.$switchTextColor;

			white-space: nowrap;
			font-size: 0;
			text-align: center;
			border-radius: 9999px;
			padding: 2px 10px;
			pointer-events: none;
			filter: blur(3px);

			opacity: 0;
			overflow: hidden;

			transition: 0.2s;
		}

		&:hover::after {
			opacity: 1;
			font-size: 14px;
			filter: drop-shadow(0 5px 2px rgba(0, 0, 0, 0.25));
		}
	}
</style>
