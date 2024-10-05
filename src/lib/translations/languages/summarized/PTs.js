function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birth.getDate()))
        age--;

    return age;
}

const age = calculateAge('2001-05-18');

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
					content: `Tenho ${age} anos, sou da Bahia, Brasil, e procuro uma oportunidade de aprendizado e crescimento profissional.`
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
					content: `Projetos no <a target="_blank" href="https://github.com/NaN-NaN-sempai">Github</a> e no site pessoal: <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>.`,
				},
				{
					title: "PDEF",
					type: "PROJETO ACADÊMICO",
					time: "2021",
					content: `Plotador de Funções: <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>`,
				},
				{
					title: "LiCA App",
					type: "PROJETO ACADÊMICO",
					time: "2021",
					content: `App para exibir a ementa do curso. Disponível no Google Play Store até 14/03/2024. Disponível em: <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>`,
				},
				{
					title: "Oficina Sobre Computação",
					type: "ESTÁGIO",
					time: "2022",
					content: `Oficina de "Introdução à Computação". Info: <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>`,
				},
				{
					title: "Artigo",
					type: "PROJETO ACADÊMICO",
					time: "2022",
					content: `Artigo publicado no Conedu sobre segurança da informação. PDF disponível em: <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>`,
				},
				{
					title: "Windows App Folder",
					type: "HOBBY",
					time: "2023",
					content: `App para organizar pastas. Repositorio no  <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">GitHub</a>`,
				},
				{
					title: "UseBase",
					type: "HOBBY",
					time: "2023",
					content: `Biblioteca JavaScript para codificação de números. <a target="_black" href="https://www.npmjs.com/package/usebase">npmjs.com/package/usebase</a>`,
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
					content: `Plotador gráfico avançado: <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>`,
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
