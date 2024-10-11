import defaults from "$lib/translations/defaults";

export default {
	name: "RU",
	level: "🗣️",
	content: {
		madeWith: "Этот сайт сделан с помощью:",
		curriculum: "Резюме",
		contacts: "Контакты",

		intro: {
			declaration: {
				title: "ЗАЯВЛЕНИЕ",
				subjects: [{
					content: `Мне ${defaults.age} лет, я из Баии, Бразилия, и ищу возможность для обучения и профессионального роста.`
				}]
			},
			differential: {
				title: "ПРЕИМУЩЕСТВА",
				subjects: [{
					list: true,
					content: [
						"Водительские права",
						"Свободный английский",
						"Базовый французский",
						"Отличные навыки JavaScript",
						"Дизайнер",
						"JSX в Adobe",
						"Веб/Мобильная разработка",
						"Arduino",
					]
				}]
			},
			characteristics: {
				title: "ХАРАКТЕРИСТИКИ",
				subjects: [{
					list: true,
					content: [
						"Быстрое обучение",
						"Универсальность",
						"Честность",
						"Организованность",
						"Качество",
						"Творчество",
						"Командная работа",
					]
				}]
			},
		},
		education: {
			title: "ОБРАЗОВАНИЕ",
			subjects: [
				{
					title: "CS50's Web Programming with Python and JavaScript",
					type: "ТРЕНИНГ",
					time: "2023",
					content: "Курс по веб-разработке.",
				},
				{
					title: "Компьютерные науки",
					type: "НЕРЕШЕННОЕ ВЫСШЕЕ ОБРАЗОВАНИЕ",
					time: "2019/2023",
					content: "Бакалавриат в IF Baiano.",
				},
				{
					title: "Техническая поддержка в ИТ",
					type: "ПРОФЕССИОНАЛЬНЫЙ КУРС",
					time: "2017/2018",
					content: "Курс в SENAI Cetind.",
				},
			]
		},
		educationPlus: {
			title: "ДОПОЛНИТЕЛЬНЫЕ КУРСЫ",
			subjects: [
				{
					title: "LGPD",
					type: "ПРОФЕССИОНАЛЬНЫЙ КУРС",
					time: "4ч - 2021",
					content: "Курс по защите данных.",
				},
				{
					title: "Логика программирования",
					type: "ПРОФЕССИОНАЛЬНЫЙ КУРС",
					time: "14ч - 2017",
					content: "Курс логики в SENAI.",
				},
				{
					title: "Предпринимательство",
					type: "ПРОФЕССИОНАЛЬНЫЙ КУРС",
					time: "14ч - 2017",
					content: "Курс по управлению бизнесом.",
				}
			]
		},
		projects: {
			title: "ПРОЕКТЫ",
			subjects: [
				{
					title: "Личные проекты",
					type: "ХОББИ",
					time: "ПЕРИОДИЧЕСКИ",
					content: `Проекты на ${defaults.link("Github", "https://github.com/NaN-NaN-sempai")} и на личном сайте: ${defaults.link(defaults.site, "https://"+defaults.site+"/")}.`,
				},
				{
					title: "PDEF",
					type: "АКАДЕМИЧЕСКИЙ ПРОЕКТ",
					time: "2021",
					content: `JavaScript платформа для создания графиков. Посетите: ${defaults.link("PDEF", "https://"+defaults.site+"/PdeF")}.`,
				},
				{
					title: "LiCA App",
					type: "АКАДЕМИЧЕСКИЙ ПРОЕКТ",
					time: "2021",
					content: `Приложение для отображения учебного плана курса. Доступно в Google Play Store до 14/03/2024. Доступно по адресу: ${defaults.link("LiCA", "https://applica."+defaults.site)}.`,
				},
				{
					title: "Мастерская по вычислениям",
					type: "СТАЖИРОВКА",
					time: "2022",
					content: `Мастерская "Введение в вычисления". Информация: ${defaults.link("Workshop", "https://oficina-introducao-computacao.vercel.app/")} (pt-BR)`,
				},
				{
					title: "Статья",
					type: "АКАДЕМИЧЕСКИЙ ПРОЕКТ",
					time: "2022",
					content: `Статья, опубликованная на Conedu по вопросам информационной безопасности. PDF доступен по адресу: ${defaults.link("editorarealize.com", "https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf")} (pt-BR)`,
				},
				{
					title: "Windows App Folder",
					type: "ХОББИ",
					time: "2023",
					content: `Приложение для организации папок. Репозиторий на ${defaults.link("Github", "https://github.com/NaN-NaN-sempai/Windows-App-Folder")}.`,
				},
				{
					title: "UseBase",
					type: "ХОББИ",
					time: "2023",
					content: `Библиотека JavaScript для кодирования чисел. ${defaults.link("NPM", "https://www.npmjs.com/package/usebase")}.`,
				},
			]
		},
		projectsPlus: {
			title: "В РАЗРАБОТКЕ",
			subjects: [
				{
					title: "MPJS",
					type: "Личный проект",
					time: "2023 / В РАЗРАБОТКЕ",
					content: `Расширенный графический плоттер: ${defaults.link("MPJS", "https://"+defaults.site+"/MPJS")}.`,
				}
			]
		},
		works: {
			title: "ОПЫТ",
			subjects: [
				{
					title: "ГРАФИЧЕСКИЙ ДИЗАЙНЕР",
					type: "НЕФОРМАЛЬНО",
					time: "2021/2024",
					content: "Дизайнер в Inovar Personalizações. Создание дизайнов и автоматизация с использованием JSX.",
				}
			]
		},
		worksPlus: {
			title: "ДРУГИЕ",
			subjects: [
				{
					title: "ИССЛЕДОВАТЕЛЬ",
					type: "КОНТРАКТ",
					time: "1 месяц - 2023",
					content: "Исследования для UniFel.",
				},
				{
					title: "ДОСТАВЩИК",
					type: "КОНТРАКТ",
					time: "2 месяца - 2023",
					content: "Доставка посылок в J&T Express.",
				},
				{
					title: "ФРИЛАНСЕР",
					type: "НЕФОРМАЛЬНО",
					time: "ПЕРИОДИЧЕСКИ",
					content: "Программирование, дизайн и уроки в качестве фрилансера.",
				}
			]
		}
	}
};
