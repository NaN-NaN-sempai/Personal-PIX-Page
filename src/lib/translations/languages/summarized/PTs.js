import defaults from "$lib/translations/defaults";

export default {
	name: "PT",
	level: "🗣️",
	content: {
		madeWith: "Este site foi feito com:",
		curriculum: "Currículo",
		contacts: "Contatos",
		
		intro: {
			declaration: {
				title: "DECLARAÇÃO",
				subjects: [{
					content: `Tenho ${defaults.age} anos, sou da Bahia, Brasil, e procuro uma oportunidade de aprendizado e crescimento profissional.`
				}]
			},
			differential: {
				title: "DIFERENCIAIS",
				subjects: [{
					list: true,
					content: [
						"Carteira de motorista",
						"Inglês fluente",
						"Francês básico",
						"Exímio em JavaScript",
						"Designer",
						"JSX em Adobe",
						"Desenvolvimento Web/Mobile",
						"Arduino",
					]
				}]
			},
			characteristics: {
				title: "CARACTERÍSTICAS",
				subjects: [{
					list: true,
					content: [
						"Aprendizado rápido",
						"Versatilidade",
						"Sinceridade",
						"Organização",
						"Qualidade",
						"Criatividade",
						"Trabalho em equipe",
					]
				}]
			},
		},
		education: {
			title: "FORMAÇÃO",
			subjects: [
				{
					title: "CS50's Web Programming with Python and JavaScript",
					type: "TREINAMENTO",
					time: "2023",
					content: "Curso sobre desenvolvimento web.",
				},
				{
					title: "Ciências da Computação",
					type: "SUPERIOR INCOMPLETO",
					time: "2019/2023",
					content: "Licenciatura no IF Baiano.",
				},
				{
					title: "Suporte Técnico em TI",
					type: "CURSO PROFISSIONALIZANTE",
					time: "2017/2018",
					content: "Curso no SENAI Cetind.",
				},
			]
		},
		educationPlus: {
			title: "CURSOS COMPLEMENTARES",
			subjects: [
				{
					title: "LGPD",
					type: "CURSO PROFISSIONALIZANTE",
					time: "4h - 2021",
					content: "Curso sobre proteção de dados.",
				},
				{
					title: "Lógica de Programação",
					type: "CURSO PROFISSIONALIZANTE",
					time: "14h - 2017",
					content: "Curso de lógica no SENAI.",
				},
				{
					title: "Empreendedorismo",
					type: "CURSO PROFISSIONALIZANTE",
					time: "14h - 2017",
					content: "Curso sobre gestão de negócios.",
				}
			]
		},
		projects: {
			title: "PROJETOS",
			subjects: [
				{
					title: "Projetos Pessoais",
					type: "HOBBY",
					time: "PERIODICAMENTE",
					content: `Projetos no ${defaults.link("Github", "https://github.com/NaN-NaN-sempai")} e no site pessoal: ${defaults.link(defaults.site, "https://"+defaults.site+"/")}.`,
				},
				{
					title: "PDEF",
					type: "PROJETO ACADÊMICO",
					time: "2021",
					content: `Plotador de Funções: ${defaults.link(defaults.site+"/PdeF", "https://"+defaults.site+"/PdeF")}.`,
				},
				{
					title: "LiCA App",
					type: "PROJETO ACADÊMICO",
					time: "2021",
					content: `App para exibir a ementa do curso. Disponível no Google Play Store até 14/03/2024. Disponível em: ${defaults.link("applica."+defaults.site, "https://applica."+defaults.site)}.`,
				},
				{
					title: "Oficina Sobre Computação",
					type: "ESTÁGIO",
					time: "2022",
					content: `Oficina de "Introdução à Computação". Info: ${defaults.link("oficina-introducao-computacao.vercel.app", "https://oficina-introducao-computacao.vercel.app/")}.`,
				},
				{
					title: "Artigo",
					type: "PROJETO ACADÊMICO",
					time: "2022",
					content: `Artigo publicado no Conedu sobre segurança da informação. PDF disponível em: ${defaults.link("editorarealize.com", "https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf")}.`,
				},
				{
					title: "Windows App Folder",
					type: "HOBBY",
					time: "2023",
					content: `App para organizar pastas. Repositorio no ${defaults.link("Github", "https://github.com/NaN-NaN-sempai/Windows-App-Folder")}.`,
				},
				{
					title: "UseBase",
					type: "HOBBY",
					time: "2023",
					content: `Biblioteca JavaScript para codificação de números. ${defaults.link("npmjs.com/package/usebase", "https://www.npmjs.com/package/usebase")}.`,
				},
			]
		},
		projectsPlus: {
			title: "EM DESENVOLVIMENTO",
			subjects: [
				{
					title: "MPJS",
					type: "Projeto pessoal",
					time: "2023 / EM DESENVOLVIMENTO",
					content: `Plotador gráfico avançado: ${defaults.link(defaults.site+"/MPJS", "https://"+defaults.site+"/MPJS")}.`,
				}
			]
		},
		works: {
			title: "EXPERIÊNCIA",
			subjects: [
				{
					title: "DESIGNER GRÁFICO",
					type: "INFORMAL",
					time: "2021/2024",
					content: "Designer na Inovar Personalizações. Criação de designs e automação com JSX.",
				}
			]
		},
		worksPlus: {
			title: "OUTROS",
			subjects: [
				{
					title: "PESQUISADOR",
					type: "CONTRATO",
					time: "1 mês - 2023",
					content: "Pesquisas para a UniFel.",
				},
				{
					title: "ENTREGADOR",
					type: "CONTRATO",
					time: "2 meses - 2023",
					content: "Entrega de pacotes na J&T Express.",
				},
				{
					title: "FREELANCER",
					type: "INFORMAL",
					time: "PERIODICAMENTE",
					content: "Programação, design e aulas como freelancer.",
				}
			]
		}
	}
};
