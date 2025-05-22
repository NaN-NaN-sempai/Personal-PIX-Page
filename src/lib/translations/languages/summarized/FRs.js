import defaults from "$lib/translations/defaults";

export default {
    name: "FR",
    level: "👶🏻",
    content: {
        madeWith: "Ce site a été fait avec :",
        curriculum: "Curriculum Vitae",
        contacts: "Contacts",
        intro: {
            declaration: {
                title: "DÉCLARATION PROFESSIONNELLE",
                subjects: [{
                    content: `Je suis de Bahia, Brésil, j'ai ${defaults.age} ans, et je cherche une opportunité professionnelle pour grandir. Je suis rapide à apprendre, créatif, adaptable, et enthousiaste à l'idée de relever de nouveaux défis.`
                }]
            },
            differential: {
                title: "DIFFÉRENCIATEURS",
                subjects: [{
                    list: true,
                    content: [
                        "Fluent en anglais",
                        "Notions de français",
                        "Permis de conduire",
                        "Designer",
                        "Programmeur",
                        "Développement Adobe JSX",
                        "Développement WEB, Mobile et Arduino",
                    ]
                }]
            },
            characteristics: {
                title: "CARACTÉRISTIQUES",
                subjects: [{
                    list: true,
                    content: [
                        "Passionné par les défis",
                        "Apprenant rapide",
                        "Polyvalent",
                        "Sincère",
                        "Organisé",
                        "Travail en équipe",
                        "Créatif",
                    ]
                }]
            },
        },
        education: {
            title: "PARCOURS ACADÉMIQUE",
            subjects: [
                {
                    title: "CS50's Web Programming",
                    type: "FORMATION SPÉCIALISÉE",
                    time: "2023",
                    content: "Formation Harvard sur la programmation web moderne.",
                },
                {
                    title: "Informatique",
                    type: "LICENCE - INCOMPLETE",
                    time: "2019/2023",
                    content: "Formation en programmation à l'IF Baiano.",
                },
                {
                    title: "Support Technique en Informatique",
                    type: "COURS PROFESSIONNEL",
                    time: "2017/2018",
                    content: "Cours sur le support technique au SENAI Cetind.",
                }
            ]
        },
        educationPlus: {
            title: "COURS COMPLÉMENTAIRES",
            subjects: [
                {
                    title: "LGPD",
                    type: "COURS PROFESSIONNEL",
                    time: "2021",
                    content: "Formation sur la confidentialité des données.",
                },
                {
                    title: "Logique de Programmation",
                    type: "COURS PROFESSIONNEL",
                    time: "2017",
                    content: "Cours sur les bases de la programmation.",
                },
                {
                    title: "Entrepreneuriat",
                    type: "COURS PROFESSIONNEL",
                    time: "2017",
                    content: "Cours sur l'entrepreneuriat.",
                }
            ]
        },
        projects: {
            title: "TRAVAUX ET PROJETS",
            subjects: [
                {
                    title: "Projets Personnels",
                    type: "LOISIR",
                    time: "PÉRIODIQUEMENT",
                    content: `Voir mes projets sur ${defaults.link("Github", "https://github.com/NaN-NaN-sempai")} ou mon site : ${defaults.link(defaults.site, "https://" + defaults.site + "/")}.`,
                },
                {
                    title: "PDEF",
                    type: "PROJET ACADÉMIQUE",
                    time: "2021",
                    content: `Plateforme de création de graphiques. Voir : ${defaults.link("PDEF", "https://" + defaults.site + "/PdeF")}.`,
                },
                {
                    title: "LiCA App",
                    type: "PROJET ACADÉMIQUE",
                    time: "2021",
                    content: `Application Android pour le programme de Sciences Agronomiques. Voir : ${defaults.link("LiCA", "https://applica." + defaults.site)}.`,
                },
                {
                    title: "Atelier sur l'Informatique",
                    type: "STAGE ACADÉMIQUE",
                    time: "2022",
                    content: `Atelier en ligne sur l'informatique. Voir : ${defaults.link("Atelier", "https://oficina-introducao-computacao.vercel.app/")} (pt-BR)`,
                },
                {
                    title: "Article Publié",
                    type: "PROJET ACADÉMIQUE",
                    time: "2022",
                    content: `Article sur la sécurité de l'information. Voir : ${defaults.link("Article", "https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf")} (pt-BR)`,
                },
                {
                    title: "Programme pour Windows",
                    type: "LOISIR / BESOIN PERSONNEL",
                    time: "2023",
                    content: `Application pour organiser des fichiers. Voir : ${defaults.link("Github Repo", "https://github.com/NaN-NaN-sempai/Windows-App-Folder")}.`,
                },
                {
                    title: "UseBase",
                    type: "LOISIR / BESOIN PERSONNEL",
                    time: "2023",
                    content: `Bibliothèque JavaScript pour l'encodage de nombres. Voir : ${defaults.link("NPM", "https://www.npmjs.com/package/usebase")}.`,
                },
                {
                    title: "ConsoFy",
                    type: "PASSION / BESOIN PERSONNEL",
                    time: "2025",
                    content: `ConsoFy organise et stylise la console JavaScript. Accès : ${defaults.link("npmjs.com/package/consofy", "https://www.npmjs.com/package/consofy")}`
                }

            ]
        },
        projectsPlus: {
            title: "PROJETS EN DÉVELOPPEMENT",
            subjects: [
                {
                    title: "MPJS",
                    type: "Projet personnel",
                    time: "2023 / EN DÉVELOPPEMENT",
                    content: `Math Plotter avec interface avancée. Voir : ${defaults.link("MPJS", "https://" + defaults.site + "/MPJS")}.`,
                },
                {
                    title: "Ligne de Production avec WhatsApp",
                    type: "Projet Personnel",
                    time: "EN DÉVELOPPEMENT",
                    content: `Système en production pour gérer des lignes de production avec WhatsApp intégré. Projet privé encore en développement.`
                }

            ]
        },
        works: {
            title: "EXPÉRIENCE PROFESSIONNELLE",
            subjects: [
                {
                    title: "GRAPHISTE",
                    type: "INFORMEL",
                    time: "2021/2024",
                    content: "Design chez Inovar Personalizações, amélioration des méthodologies de design.",
                }
            ]
        },
        worksPlus: {
            title: "AUTRES",
            subjects: [
                {
                    title: "RECHERCHEUR",
                    type: "CONTRAT",
                    time: "2023",
                    content: "Recherche pour UniFel en Bahia.",
                },
                {
                    title: "LIVREUR",
                    type: "CONTRAT",
                    time: "2023",
                    content: "Livreur chez J&T Express.",
                },
                {
                    title: "FREELANCE",
                    type: "INFORMEL",
                    time: "PÉRIODIQUEMENT",
                    content: "Services en programmation, design, cours et tutoriels.",
                }
            ]
        }
    }
};
