import defaults from "$lib/translations/defaults";

export default {
    name: "NL",
    level: "👶🏻",
    content: {
        madeWith: "Deze site is gemaakt met:",
        curriculum: "Curriculum",
        contacts: "Contacten",

        httpStatus: {
            buttons: {
                goHome: "Terug naar huis 🏠",
                webSite: "Persoonlijke website",
            },
            401: {
                message: "Ongeautoriseerde toegang. Je hebt geen toestemming om deze pagina te bekijken.",
                goBackText: "Gebruik een van de onderstaande links om naar een toegestane pagina te gaan."
            },
            404: {
                message: "De pagina die je probeerde te openen is niet gevonden of bestaat niet.",
                goBackText: "Gebruik een van de onderstaande links om een bestaande pagina te bezoeken."
            },
            any: {
                message: "Er is een onverwachte fout opgetreden. Probeer het later opnieuw.<br><br>Foutcode: ",
                goBackText: "Gebruik een van de onderstaande links om naar een andere pagina te gaan."
            }
        },

        noSummarized: {
            text: "Samengevatte versie niet beschikbaar voor de geselecteerde taal."
        },

        intro: {
            declaration: {
                title: "PROFESSIONELE VERKLARING",
                subjects: [{
                    content: `Ik kom uit Bahia, Brazilië, ik ben ${defaults.age} jaar oud en ik ben op zoek naar een professionele kans die mij een leer- en ontwikkeltraject biedt. Ik ben flexibel, creatief, efficiënt en pas me gemakkelijk aan nieuwe uitdagingen en veranderingen aan. Ik ben enthousiast om mijn vaardigheden toe te passen en aan deze reis richting professioneel succes te beginnen!`
                }]
            },
            differential: {
                title: "DIFFERENTIATOREN",
                subjects: [{
                    list: true,
                    content: [
                        "Rijbewijs",
                        "Vloeiend Engels",
                        "Basis Frans",
                        "Uitstekend in JavaScript",
                        "Sterke expertise in design",
                        "Ervaring met JSX-scripts voor Adobe-apps",
                        "Ervaring met web- en mobiele ontwikkeling",
                        "Ervaring met het maken van systemen",
                        "Ervaring met Arduino-ontwikkeling",
                    ]
                }]
            },
            characteristics: {
                title: "KENMERKEN",
                subjects: [{
                    list: true,
                    content: [
                        "Gepassioneerd door uitdagingen",
                        "Snel lerend",
                        "Veelzijdig en aanpasbaar",
                        "Eerlijk en ethisch",
                        "Toegewijd aan organisatie",
                        "Toegewijd aan excellentie en kwaliteit",
                        "Samenwerkend en efficiënt in teamwerk",
                        "Creatief en innovatief in technologische oplossingen",
                    ]
                }]
            },
        },
        education: {
            title: "OPLEIDING",
            subjects: [
                {
                    title: "CS50's Web Programming with Python and JavaScript",
                    type: "GESPECIALISEERDE TRAINING",
                    time: "2023",
                    content: "Ik heb deelgenomen aan de cursus aangeboden door Harvard, waar ik mijn kennis van webprogrammering heb verdiept. Ik heb essentiële concepten geleerd om moderne en dynamische webapplicaties te ontwikkelen.",
                },
                {
                    title: "Informatica",
                    type: "HOGER ONDERWIJS - NIET VOLTOOID",
                    time: "2019/2023",
                    content: "Ik heb mijn kennis van programmeren en technologie verder geconsolideerd tijdens de opleiding aan IF Baiano - Sr. do Bonfim, Bahia, Brazilië, waar ik het merendeel van mijn projecten heb uitgevoerd.",
                },
                {
                    title: "IT-technische ondersteuning",
                    type: "BEROEPSOPLEIDING",
                    time: "2017/2018",
                    content: "Ik begon mijn academische carrière met een cursus IT-technische ondersteuning bij SENAI Cetind in Lauro de Freitas, Bahia, Brazilië, en verkreeg een solide basis over netwerken, programmeren, technische ondersteuning en andere onderwerpen, wat mijn passie voor het vakgebied versterkte.",
                },
            ]
        },
        educationPlus: {
            title: "AANVULLENDE CURSUSSEN",
            subjects: [
                {
                    title: "LGPD",
                    type: "BEROEPSOPLEIDING",
                    time: "4 uur - 2021",
                    content: `Ik volgde een online cursus aan SENAI São Paulo, Brazilië, over "Privacy en gegevensbescherming" en leerde over informatiebeveiliging en privacyregelgeving.`,
                },
                {
                    title: "Transversale vaardigheden in programmeerlogica",
                    type: "BEROEPSOPLEIDING",
                    time: "14 uur - 2017",
                    content: "Ik volgde op afstand een cursus bij SENAI Bahia, Brazilië, over programmeerlogica en verwierf basiskennis over programmering en logica.",
                },
                {
                    title: "Transversale vaardigheden in ondernemerschap",
                    type: "BEROEPSOPLEIDING",
                    time: "14 uur - 2017",
                    content: "Ik volgde een online cursus bij SENAI Bahia, Brazilië, over ondernemerschap en verwierf essentiële vaardigheden met betrekking tot ondernemerschap en bedrijfsbeheer.",
                }
            ]
        },
        projects: {
            title: "WERK EN PROJECTEN",
            subjects: [
                {
                    title: "Persoonlijke Projecten",
                    type: "HOBBY",
                    time: "PERIODIEK",
                    content: `Naast de hier genoemde projecten heb ik een breed scala aan projecten beschikbaar op mijn GitHub-profiel:
					${defaults.link("github.com/NaN-NaN-sempai", "https://github.com/NaN-NaN-sempai")} of op mijn persoonlijke website: ${defaults.link(defaults.site, "https://" + defaults.site + "/")}. Mijn projecten tonen mijn passie voor leren en mijn vermogen om innovatieve oplossingen te creëren door middel van programmering.`,
                },
                {
                    title: "PDEF",
                    type: "ACADEMISCH PROJECT",
                    time: "2021",
                    content: `Plotter voor Functies (PDEF), project gevraagd tijdens het vak Grafische Toepassingen aan IF Baiano. De PDEF is een platform waarmee grafieken kunnen worden gemaakt met JavaScript. Dit project werd een waardevol hulpmiddel voor het visualiseren en begrijpen van grafische concepten en was een persoonlijke mijlpaal als programmeur. Te bekijken op: ${defaults.link(defaults.site + "/PdeF", "https://" + defaults.site + "/PdeF")}.`,
                },
                {
                    title: "LiCA App",
                    type: "ACADEMISCH PROJECT",
                    time: "2021",
                    content: `De LiCA App was mijn eerste Android-app, ontwikkeld met mijn collega Joel Junior als onderdeel van het vak Grafische Toepassingen aan IF Baiano. Deze app was bedoeld om het curriculum van de opleiding Agrarische Wetenschappen te tonen en was beschikbaar in de Google Play Store tot 14/03/2024. Beschikbaar op: ${defaults.link("applica." + defaults.site, "https://applica." + defaults.site)}.`
                },
                {
                    title: "Workshop over Informatica",
                    type: "ACADEMISCHE STAGE",
                    time: "2022",
                    content: `Voor het vak Stage I aan IF Baiano organiseerden mijn collega Marcos Santos en ik een online workshop (vanwege de COVID-19 pandemie) over "Introductie tot Informatica", waarin onderwerpen aan bod kwamen zoals de geschiedenis van informatica, hardware, software, netwerken, programmeren, webontwikkeling en werkgelegenheidskansen. Meer informatie op: ${defaults.link("oficina-introducao-computacao.vercel.app", "https://oficina-introducao-computacao.vercel.app/")}.`
                },
                {
                    title: "Gepubliceerd Artikel",
                    type: "ACADEMISCH PROJECT",
                    time: "2022",
                    content: `Ik nam deel aan het Instituutsprogramma voor Beurzen voor Lerarenopleiding (PIBID), werkte samen met de natuurkundeleraar Damon Ferreira Farias en met collega's publiceerde ik een artikel op Conedu over informatiebeveiliging op scholen. PDF beschikbaar op: ${defaults.link("editorarealize.com", "https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf")}.`
                },
                {
                    title: "Programma voor Windows",
                    type: "HOBBY / PERSOONLIJKE BEHOEFTE",
                    time: "2023",
                    content: `Windows App Folder is een Windows-toepassing gebouwd met Electron.js waarmee je aangepaste mappen kunt maken om apps of bestanden te organiseren, geïnspireerd op de app-mappen van Samsung op Android. Beschikbaar op: ${defaults.link("github.com/NaN-NaN-sempai/Windows-App-Folder", "https://github.com/NaN-NaN-sempai/Windows-App-Folder")}.`
                },
                {
                    title: "UseBase",
                    type: "HOBBY / PERSOONLIJKE BEHOEFTE",
                    time: "2023",
                    content: `UseBase is een veelzijdige JavaScript-bibliotheek ontworpen om het coderen en decoderen van getallen in verschillende numerieke systemen te vereenvoudigen. Of het nu gaat om binaire, hexadecimale, aangepaste tekensets of zelfs emoji's: UseBase biedt een flexibele oplossing. Beschikbaar op ${defaults.link("npmjs.com/package/usebase", "https://www.npmjs.com/package/usebase")}.`
                },
            ]
        },
        projectsPlus: {
            title: "PROJECTEN IN ONTWIKKELING",
            subjects: [
                {
                    title: "MPJS",
                    type: "Persoonlijk project",
                    time: "2023 / IN ONTWIKKELING",
                    content: "Math Plotter Javascript (MPJS) is een evolutie van PDEF, nu met een verbeterde interface die de Monaco Editor bevat en een geavanceerdere JavaScript-syntaxis voor het maken van complexe grafieken. Beschikbaar op: ${defaults.link(defaults.site + '/MPJS', 'https://' + defaults.site + '/MPJS')}"
                }
            ]
        },
        works: {
            title: "PROFESSIONELE ERVARING",
            subjects: [
                {
                    title: "GRAFISCH ONTWERPER",
                    type: "INFORMEEL",
                    time: "2021/2024",
                    content: "Ik werkte bij Inovar Personalizações als grafisch ontwerper, waarbij ik exclusieve ontwerpen maakte voor bindwerk en karton. Gedurende deze periode paste ik mijn vaardigheden als ontwikkelaar toe door een nieuwe methodologie in te voeren voor het maken van ontwerpen en het creëren van JSX-scripts voor Adobe, en ik verbeterde het klanten- en bestelsysteem dat door het bedrijf werd gebruikt."
                }
            ]
        },
        worksPlus: {
            title: "ANDERE",
            subjects: [
                {
                    title: "ONDERZOEKER",
                    type: "CONTRACT",
                    time: "1 maand - 2023",
                    content: "Gedurende een maand reisde ik door verschillende steden in Bahia voor onderzoek in opdracht van het bedrijf UniFel."
                },
                {
                    title: "PAKKETBEZORGER",
                    type: "CONTRACT",
                    time: "2 maanden - 2023",
                    content: "Ik werkte als pakketbezorger bij J&T Express, waar ik organisatorische vaardigheden, routebeheer en het behalen van doelen verbeterde. Verantwoordelijk voor de tijdige levering van pakketten, handhaafde ik een hoge prestatiestandaard."
                },
                {
                    title: "FREELANCER",
                    type: "INFORMEEL",
                    time: "PERIODES",
                    content: "Ik werk als freelancer, waarbij ik mijn diensten aanbied in zowel programmeren als ontwerp. Ik geef ook les en tutorials in het vakgebied."
                }
            ]
        }
    }
}
