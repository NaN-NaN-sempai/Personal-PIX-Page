<script>
    import Year from "./Year.svelte";
    import Content from "./content/Content.svelte";
    import Flyout from "./flyout/Flyout.svelte";
    
    import translations from "$trad"; 
	import ContentPanel from "../routes/_components/ContentPanel.svelte";
	import Qrteste from "../routes/_components/qrteste.svelte";
	import ContentArea from "../routes/_components/ContentArea.svelte";
	import ContentTitle from "../routes/_components/ContentTitle.svelte";
	import GeneralField from "../routes/_components/GeneralField.svelte";
	import ContentQr from "../routes/_components/ContentQR.svelte";
	import ContentText from "../routes/_components/ContentText.svelte";
	import QrText from "../routes/_components/QrText.svelte";
	import ContentButton from "../routes/_components/ContentButton.svelte";
	import PixSvg from "../routes/_components/PIX_SVG.svelte";
	import ContentBanner from "../routes/_components/ContentBanner.svelte";
	import ContentValue from "../routes/_components/ContentValue.svelte";
	import IconField from "../routes/_components/IconField.svelte";

    let texts; 
    translations.subscribe(value => {
        texts = value;
    });





    export let data;
    const {slugs} = data;


    const defaultOwnerCpf = {
        name: "Luís Henrique de Almeida",
        icon: "/assets/imgs/icon.png",
        bg: "linear-gradient(to right, #EA7243, #E0881D)",
        type: "cpf",
        code: "***.445.865-**"
    }

    const defaultOwnerCnpj = {
        ...defaultOwnerCpf,
        type: "cnpj",
        code: "not yet implemented"
    }

    const pix = {
        NU: {
            name: "Nu Pagamentos S.A.",
            pixKey: "07bf70ca-4516-4fda-9e9b-0b39c56dadbe",
            icon: "/assets/payments/banks/NU.png",
            owner: defaultOwnerCpf,
        },
        BB: {
            name: "Banco do Brasil - checar",
            pixKey: "37895364-1c0e-410f-9958-9ba45960a586",
            owner: defaultOwnerCpf,
            icon: "/assets/payments/banks/BB.png",
        },
        SF: {
            name: "Banco Sofisa - checar",
            pixKey: "9b0ec5fd-2d80-40e0-8cdc-53cf48548e89",
            owner: defaultOwnerCpf,
            icon: "/assets/payments/banks/SF.png",
        },
        MP: {
            name: "Mercado Pago - checar",
            pixKey: "7972b8ba-250a-4896-b068-da93227b4a25",
            owner: defaultOwnerCpf,
            bg: "#00aeec",
            icon: "/assets/payments/banks/MP.png",
        },
    }

    let selected = pix[slugs.bank ?? "NU"];


    let qrCodeGenerated = "";
    const copyCode = () => {
        console.log("not yet implemented")
    }


    let code = "00020101021126580014br.gov.bcb.pix013607bf70ca-4516-4fda-9e9b-0b39c56dadbe5204000053039865802BR5924LUIS HENRIQUE DE ALMEIDA6012SR DO BONFIM62090505Teste63048EE0";
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
                <div class="contentArea">
                    <ContentArea>
                        <ContentTitle>código qr</ContentTitle>
                        <GeneralField>
                            <ContentQr {code} />
                        </GeneralField>
                        <div class="inlineField">
                            <GeneralField>
                                <ContentText> 
                                    <QrText> {code} </QrText>
                                </ContentText>
                            </GeneralField>

                            <ContentButton action={copyCode}>
                                Copiar ©
                            </ContentButton>
                        </div>
                        <div class="inlineField">
                            <ContentButton type="fit-container">
                                Ir ao app do Banco ➽
                            </ContentButton>
                        </div>
                    </ContentArea>
                </div>

                <div class="contentArea">
                    <ContentBanner>
                        <PixSvg />
                    </ContentBanner>                      
                    <ContentArea>
                        <ContentTitle>Informações</ContentTitle>
                        
                        {#if slugs.value}  
                        <ContentValue name="Valor" value={slugs.value}/>
                        {/if}

                        <IconField icon={selected.icon} bg={selected.bg}>
                            {selected.name}
                        </IconField>

                        <IconField icon={selected.owner.icon} bg={selected.owner.bg}>
                            {selected.owner.name}
                        </IconField>

                        <IconField icon={`/assets/payments/${selected.owner.type}.png`}>
                            {selected.owner.code}
                        </IconField>
                    </ContentArea>
                </div>
                <!--
                
                <Qrteste></Qrteste>
                deve ter texto explicativo, nome do banco, imagem do banco, (opcional) mostrar o valor
                
                pegar banco dos parametros, nu se não tiver parametro
                
                encaixar o DarkModeSwitch dentro do ContentPanel
                
                mudar titulo da pagina
                
                transformar imagem em svg e estilizar
                
                enviar email com emailjs
                -->
            </ContentPanel>
        </div>
    </div>
</div>

<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;


    .content {
        display: flex;
        flex-direction: row;
        justify-content: center;

        .contentArea {
            max-width: 400px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;

            .inlineField {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 5px;
            }
        }
    }


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