const defaultOwnerCpf = {
	name: 'Luís Henrique de Almeida',
	icon: '/assets/imgs/icon.png',
	bg: 'linear-gradient(to right, #EA7243, #E0881D)',
	type: 'cpf',
	code: '***.445.865-**'
};

const defaultOwnerCnpj = {
	...defaultOwnerCpf,
	type: 'cnpj',
	code: 'not yet implemented'
};

const defaultPixData = {
	key: '',
	name: 'LUIS HENRIQUE DE ALMEIDA',
	city: 'SR DO BONFIM'
};

const paymentData = {
	NU: {
		origin: 'br',
		type: 'pix',
		name: 'Nu Pagamentos S.A.',
		pixData: { ...defaultPixData, key: '07bf70ca-4516-4fda-9e9b-0b39c56dadbe' },
		icon: '/assets/payments/banks/NU.png',
		owner: defaultOwnerCpf
	},
	MP: {
		origin: 'br',
		type: 'pix',
		name: 'Mercado Pago - checar',
		pixData: { ...defaultPixData, key: '7972b8ba-250a-4896-b068-da93227b4a25' },
		bg: '#00aeec',
		icon: '/assets/payments/banks/MP.png',
		owner: defaultOwnerCpf
	},
	BB: {
		origin: 'br',
		type: 'pix',
		name: 'Banco do Brasil - checar',
		pixData: { ...defaultPixData, key: '37895364-1c0e-410f-9958-9ba45960a586' },
		icon: '/assets/payments/banks/BB.png',
		owner: defaultOwnerCpf
	},
	SF: {
		origin: 'br',
		type: 'pix',
		name: 'Banco Sofisa - checar',
		pixData: { ...defaultPixData, key: '9b0ec5fd-2d80-40e0-8cdc-53cf48548e89' },
		icon: '/assets/payments/banks/SF.png',
		owner: defaultOwnerCpf
	}
};

/** @type {import('../../$types').PageLoad} */
export function load({ params }) {
	const slugs = {
		method: params.method,
		value: params.value,
		message: params.message
	};

	return { slugs, paymentData };
}
