<script>
    import Year from "./Year.svelte";
    import Content from "./content/Content.svelte";
    import Flyout from "./flyout/Flyout.svelte";
    
    import translations from "$trad"; 
	import ContentPanel from "../routes/_components/ContentPanel.svelte";
	import Qrteste from "../routes/_components/qrteste.svelte";

    let texts; 
    translations.subscribe(value => {
        texts = value;
    });
</script>

<div class="wrapper">
    <div class="flyout">
        <Flyout />
    </div>
    <div class="right">
        <div class="contentHeader">
            <div class="year">
                <Year> <span class="hidden">{texts.curriculum.toUpperCase()}</span> 2025 </Year>
            </div>
            <h1 class="title">Luís Henrique de Almeida</h1>
        </div>
        <div class="content">
            <ContentPanel>
                <Qrteste></Qrteste>
                deve ter texto explicativo, nome do banco, imagem do banco, (opcional) mostrar o valor
                <br>
                <br>
                pegar banco dos parametros, nu se não tiver parametro
                <br>
                <br>
                encaixar o DarkModeSwitch dentro do ContentPanel
                <br>
                <br>
                mudar titulo da pagina
                <br>
                <br>
                transformar imagem em svg e estilizar
                <br>
                <br>
                enviar email com emailjs
            </ContentPanel>
        </div>
    </div>
</div>

<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;


    .contentHeader {
            -bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            user-select: none;
            font-family: robotoMono;
            text-transform: uppercase;
            color: palette.$highlight;
            text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .year {
            margin-left: 20px;

            .hidden {
                display: none;
            }
        }
    }

    .wrapper {
        display: flex;
        justify-content: center;
        font-size: 30px;
        text-align: right;
        padding: 25px;
        padding-top: 0;

        max-width: 1940px;

        .right {
            width: 100%;
            max-width: 1300px;
        }
    }

    

    @media only screen and (max-width: defaults.$mediaMaxWidth) { 
        .contentHeader {
            flex-direction: column;
            margin-bottom: 50px;

            .title  {
                display: none;
            }

            .year {
                width: 100%;
                margin-left: 0;

                .hidden {
                    display: inline;
                }
            }
        }
        .wrapper {
            padding: 0;
            flex-direction: column;
            align-items: center;

            .flyout {
                margin-bottom: 10px;
            }
        }
    }
</style>