import defaults from "$lib/translations/defaults";

export default {
    name: "EN",
    level: "🗣️",
    content: {
		madeWith: "This site was made with:",
        curriculum: "Curriculum",
        contacts: "Contacts",

        intro: {
            declaration: {
                title: "PROFESSIONAL STATEMENT",
                subjects: [{ content: `From Bahia, Brazil, ${defaults.age} years old. Seeking opportunities for growth. Flexible, creative, and adaptable.` }]
            },
            differential: {
                title: "DIFFERENTIATORS",
                subjects: [{
                    list: true, content: [
                        "Fluent in English",
                        "Basic French",
						"Driver's license",
                        "Designer",
                        "Programmer",
						"Experience with Adobe JSX scripts",
                        "Experienced in WEB, Mobile and Arduino development",
                    ]
                }]
            },
			characteristics: {
				title: "CHARACTERISTICS",
				subjects: [{
					list: true,
					content: [
                        "Passionate about challenges",
                        "Quick learner",
                        "Versatile",
                        "Sincere",
                        "Organized",
                        "Team player",
                        "Creative",
					]
				}]
			},
        },
        education: {
            title: "ACADEMIC BACKGROUND",
            subjects: [
                {
                    title: "CS50's Web Programming",
                    type: "SPECIALIZED TRAINING",
                    time: "2023",
                    content: "Harvard course on modern web programming.",
                },
                {
                    title: "Computer Science",
                    type: "UNDERGRADUATE - INCOMPLETE",
                    time: "2019/2023",
                    content: "Programming and tech skills at IF Baiano.",
                },
                {
                    title: "Technical Support in IT",
                    type: "PROFESSIONAL COURSE",
                    time: "2017/2018",
                    content: "Foundational tech course at SENAI Cetind.",
                },
            ]
        },
        educationPlus: {
            title: "ADDITIONAL COURSES",
            subjects: [
                {
                    title: "LGPD",
                    type: "PROFESSIONAL COURSE",
                    time: "2021",
                    content: "Privacy and Data Protection course.",
                },
                {
                    title: "Programming Logic",
                    type: "PROFESSIONAL COURSE",
                    time: "2017",
                    content: "Fundamentals of programming.",
                },
                {
                    title: "Entrepreneurship",
                    type: "PROFESSIONAL COURSE",
                    time: "2017",
                    content: "Skills in business management.",
                }
            ]
        },
        projects: {
            title: "WORKS AND PROJECTS",
            subjects: [
                {
                    title: "Personal Projects",
                    type: "HOBBY",
                    time: "PERIODICALLY",
                    content: `Check my ${defaults.link("Github", "https://github.com/NaN-NaN-sempai")} and ${defaults.link(defaults.site, "https://"+defaults.site+"/")} for more projects.`,
                },
                {
                    title: "PDEF",
                    type: "ACADEMIC PROJECT",
                    time: "2021",
                    content: `JavaScript platform for graph creation. Visit: ${defaults.link("PDEF", "https://"+defaults.site+"/PdeF")}.`,
                },
                {
                    title: "LiCA App",
                    type: "ACADEMIC PROJECT",
                    time: "2021",
                    content: `Android app for Agricultural Sciences syllabus. Visit: ${defaults.link("LiCA", "https://applica."+defaults.site)}.`,
                },
                {
                    title: "Workshop on Computing",
                    type: "ACADEMIC INTERNSHIP",
                    time: "2022",
                    content: `Online workshop on computing basics. Details at: ${defaults.link("Workshop", "https://oficina-introducao-computacao.vercel.app/")} (pt-BR)`,
                },
                {
                    title: "Published Article",
                    type: "ACADEMIC PROJECT",
                    time: "2022",
                    content: `Article on info security in schools. PDF at: ${defaults.link("editorarealize.com", "https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf")} (pt-BR)`,
                },
                {
                    title: "Computer Program",
                    type: "HOBBY / PERSONAL NEED",
                    time: "2023",
                    content: `Windows app for organizing files. Visit the ${defaults.link("Github Repo", "https://github.com/NaN-NaN-sempai/Windows-App-Folder")}.`,
                },
                {
                    title: "UseBase",
                    type: "HOBBY / PERSONAL NEED",
                    time: "2023",
                    content: `JavaScript library for encoding numbers. Available at ${defaults.link("NPM", "https://www.npmjs.com/package/usebase")}.`,
                },
            ]
        },
        projectsPlus: {
            title: "PROJECTS IN DEVELOPMENT",
            subjects: [
                {
                    title: "MPJS",
                    type: "Personal project",
                    time: "2023 / IN DEVELOPMENT",
                    content: `Math Plotter with advanced features. Visit: ${defaults.link("MPJS", "https://"+defaults.site+"/MPJS")}.`,
                }
            ]
        },
        works: {
            title: "PROFESSIONAL EXPERIENCE",
            subjects: [
                {
                    title: "GRAPHIC DESIGNER",
                    type: "INFORMAL",
                    time: "2021/2024",
                    content: "Designer at Inovar Personalizações, enhanced design methodologies and systems.",
                }
            ]
        },
        worksPlus: {
            title: "OTHERS",
            subjects: [
                {
                    title: "RESEARCHER",
                    type: "CONTRACT",
                    time: "2023",
                    content: "Research for UniFel in Bahia.",
                },
                {
                    title: "PACKAGE DELIVERY",
                    type: "CONTRACT",
                    time: "2023",
                    content: "Delivery person at J&T Express.",
                },
                {
                    title: "FREELANCER",
                    type: "INFORMAL",
                    time: "PERIODICALLY",
                    content: "Freelance programming, design, teaching, and tutorials.",
                }
            ]
        }
    }
};
