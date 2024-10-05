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
					content: `Мне ${age} лет, я из Баии, Бразилия, и ищу возможность для обучения и профессионального роста.`
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
					content: `Проекты на <a target="_blank" href="https://github.com/NaN-NaN-sempai">Github</a> и на личном сайте: <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>.`,
				},
				{
					title: "PDEF",
					type: "АКАДЕМИЧЕСКИЙ ПРОЕКТ",
					time: "2021",
					content: `Плоттер функций: <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>`,
				},
				{
					title: "LiCA App",
					type: "АКАДЕМИЧЕСКИЙ ПРОЕКТ",
					time: "2021",
					content: `Приложение для отображения учебного плана курса. Доступно в Google Play Store до 14/03/2024. Доступно по адресу: <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>`,
				},
				{
					title: "Мастерская по вычислениям",
					type: "СТАЖИРОВКА",
					time: "2022",
					content: `Мастерская "Введение в вычисления". Информация: <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>`,
				},
				{
					title: "Статья",
					type: "АКАДЕМИЧЕСКИЙ ПРОЕКТ",
					time: "2022",
					content: `Статья, опубликованная на Conedu по вопросам информационной безопасности. PDF доступен по адресу: <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>`,
				},
				{
					title: "Windows App Folder",
					type: "ХОББИ",
					time: "2023",
					content: `Приложение для организации папок. Репозиторий на <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">GitHub</a>`,
				},
				{
					title: "UseBase",
					type: "ХОББИ",
					time: "2023",
					content: `Библиотека JavaScript для кодирования чисел. <a target="_black" href="https://www.npmjs.com/package/usebase">npmjs.com/package/usebase</a>`,
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
					content: `Расширенный графический плоттер: <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>`,
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
