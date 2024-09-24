<script>
    import DarkModeSwitch from '$components/DarkModeSwitch.svelte';
    import ChooseLanguageSwitch from '$components/ChoseLanguageSwitch.svelte';
    import Intro from '$components/Intro.svelte';
    import Tools from '$components/Tools.svelte';
    import Education from '$components/Education.svelte';
    import SecondFlyout from '$components/flyout/SecondFlyout.svelte';
    import Year from '$components/Year.svelte';
    import Projects from '$components/Projects.svelte';
    import Works from '$components/Works.svelte';
    import SummarizeText from '$components/SummarizeText.svelte';
    
    import translations from "$trad"; 
    let texts; 
    translations.subscribe(value => {
        texts = value;
    });
</script>


<div class="outer">
    <div class="inner">
        <div class="darkmode centralize">
            <DarkModeSwitch />
        </div>
        <div class="chooselang centralize">
            <ChooseLanguageSwitch />
        </div>
        <div class="summarize centralize">
            <SummarizeText />
        </div>
        <div class="intro">
            <Intro />
        </div>
        <div class="tools">
            <Tools />
        </div>
        <div class="education">
            <Education />
        </div>
        <div class="splitter">
            <div class="name">
                <span> Luís Henrique de Almeida </span>
            </div>
            <div class="secondFlyout">
                <SecondFlyout />
            </div>
            <Year><span class="hidden">{texts.curriculum.toUpperCase()}</span> 2024</Year>
        </div>
        <div class="projects">
            <Projects />
        </div>
        <div class="works">
            <Works />
        </div>
    </div>
</div>

<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;
    @use "$style/_cursors.scss" as cursors;

    @media only screen and (min-width: defaults.$mediaMinWidth) {
        .outer {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .inner > * {
        margin-block: 20px;
    }

    .centralize {
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
    .chooselang {
        margin-top: -10px;
    }
    .summarize {
        margin-top: -5px;
        margin-bottom: -10px;
    }

    .splitter {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 30px;

        .hidden {
            display: none;

            @media (max-width: defaults.$mediaMaxWidth) {
                display: block;
            }
        }

        .name {
            font-family: sansation;
            font-weight: bold;
            text-transform: uppercase;
            color: palette.$highlight;
            text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
            font-size: 40px;
            text-align: center;
            user-select: none;

            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        @media (max-width: defaults.$mediaMaxWidth) {
            flex-direction: column;
        }
    }
</style>