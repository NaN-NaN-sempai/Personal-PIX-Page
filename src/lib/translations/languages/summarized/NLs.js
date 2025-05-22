import defaults from "$lib/translations/defaults";

export default {
  name: "NL",
  level: "🗣️",
  content: {
    madeWith: "Deze website is gemaakt met:",
    curriculum: "Curriculum",
    contacts: "Contacten",

    intro: {
      declaration: {
        title: "VERKLARING",
        subjects: [{
          content: `Ik ben ${defaults.age} jaar oud, kom uit Bahia, Brazilië, en ben op zoek naar een kans voor professionele groei en leren.`
        }]
      },
      differential: {
        title: "VERSCHILLENDE KENMERKEN",
        subjects: [{
          list: true,
          content: [
            "Rijbewijs",
            "Vloeiend Engels",
            "Basis Frans",
            "Uitstekend in JavaScript",
            "Grafisch ontwerper",
            "JSX in Adobe",
            "Web/Mobile ontwikkeling",
            "Arduino"
          ]
        }]
      },
      characteristics: {
        title: "KENMERKEN",
        subjects: [{
          list: true,
          content: [
            "Snel leren",
            "Veelzijdigheid",
            "Eerlijkheid",
            "Organisatie",
            "Kwaliteit",
            "Creativiteit",
            "Teamwerk"
          ]
        }]
      },
    },
    education: {
      title: "OPLEIDING",
      subjects: [
        {
          title: "CS50's Web Programming with Python and JavaScript",
          type: "OPLEIDING",
          time: "2023",
          content: "Cursus over webontwikkeling."
        },
        {
          title: "Informatica",
          type: "ONVOLLEDIGE BACHELOR",
          time: "2019/2023",
          content: "Licentie aan het IF Baiano."
        },
        {
          title: "Technische Ondersteuning in IT",
          type: "BEROEPSOPLEIDING",
          time: "2017/2018",
          content: "Cursus aan het SENAI Cetind."
        }
      ]
    },
    educationPlus: {
      title: "AANVULLENDE CURSUSSEN",
      subjects: [
        {
          title: "LGPD",
          type: "BEROEPSOPLEIDING",
          time: "4u - 2021",
          content: "Cursus over gegevensbescherming."
        },
        {
          title: "Programmeerlogica",
          type: "BEROEPSOPLEIDING",
          time: "14u - 2017",
          content: "Cursus logica aan het SENAI."
        },
        {
          title: "Ondernemerschap",
          type: "BEROEPSOPLEIDING",
          time: "14u - 2017",
          content: "Cursus over bedrijfsbeheer."
        }
      ]
    },
    projects: {
      title: "PROJECTEN",
      subjects: [
        {
          title: "Persoonlijke Projecten",
          type: "HOBBY",
          time: "PERIODIEK",
          content: `Projecten op ${defaults.link("Github", "https://github.com/NaN-NaN-sempai")} en op mijn persoonlijke website: ${defaults.link(defaults.site, "https://" + defaults.site + "/")}.`
        },
        {
          title: "PDEF",
          type: "ACADEMISCH PROJECT",
          time: "2021",
          content: `Functieplotter: ${defaults.link(defaults.site + "/PdeF", "https://" + defaults.site + "/PdeF")}.`
        },
        {
          title: "LiCA App",
          type: "ACADEMISCH PROJECT",
          time: "2021",
          content: `App voor het weergeven van het cursusprogramma. Beschikbaar in de Google Play Store tot 14/03/2024. Beschikbaar op: ${defaults.link("applica." + defaults.site, "https://applica." + defaults.site)}.`
        },
        {
          title: "Workshop over Informatica",
          type: "STAGE",
          time: "2022",
          content: `Workshop "Inleiding tot Informatica". Info: ${defaults.link("oficina-introducao-computacao.vercel.app", "https://oficina-introducao-computacao.vercel.app/")}.`
        },
        {
          title: "Artikel",
          type: "ACADEMISCH PROJECT",
          time: "2022",
          content: `Artikel gepubliceerd in Conedu over informatiebeveiliging. PDF beschikbaar op: ${defaults.link("editorarealize.com", "https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf")}.`
        },
        {
          title: "Windows App Folder",
          type: "HOBBY",
          time: "2023",
          content: `App voor het organiseren van mappen. Repository op ${defaults.link("Github", "https://github.com/NaN-NaN-sempai/Windows-App-Folder")}.`
        },
        {
          title: "UseBase",
          type: "HOBBY",
          time: "2023",
          content: `JavaScript bibliotheek voor het coderen van getallen. ${defaults.link("npmjs.com/package/usebase", "https://www.npmjs.com/package/usebase")}.`
        },
        {
          title: "ConsoFy",
          type: "HOBBY / PERSOONLIJKE BEHOEFTE",
          time: "2025",
          content: `ConsoFy organiseert en stijlt de JavaScript-console. Toegang: ${defaults.link("npmjs.com/package/consofy", "https://www.npmjs.com/package/consofy")}`
        }

      ]
    },
    projectsPlus: {
      title: "IN ONTWIKKELING",
      subjects: [
        {
          title: "MPJS",
          type: "Persoonlijk project",
          time: "2023 / IN ONTWIKKELING",
          content: `Geavanceerde grafiekplotter: ${defaults.link(defaults.site + "/MPJS", "https://" + defaults.site + "/MPJS")}.`
        },
        {
          title: "Productielijn met WhatsApp",
          type: "Persoonlijk Project",
          time: "IN ONTWIKKELING",
          content: `Systeem in ontwikkeling om productielijnen van producten of diensten te beheren, met geïntegreerde WhatsApp. Privéproject nog in ontwikkeling.`
        }

      ]
    },
    works: {
      title: "ERVARING",
      subjects: [
        {
          title: "GRAFISCH ONTWERPER",
          type: "INFORMEEL",
          time: "2021/2024",
          content: "Grafisch ontwerper bij Inovar Personalizações. Ontwerpen maken en automatiseren met JSX."
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
          content: "Onderzoek voor UniFel."
        },
        {
          title: "PAKKETBEZORGER",
          type: "CONTRACT",
          time: "2 maanden - 2023",
          content: "Pakketbezorging bij J&T Express."
        },
        {
          title: "FREELANCER",
          type: "INFORMEEL",
          time: "PERIODES",
          content: "Programmering, ontwerp en lessen als freelancer."
        }
      ]
    }
  }
};
