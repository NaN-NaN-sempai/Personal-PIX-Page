/** @type {import('../../$types').PageLoad} */
export function load({ params }) {
  const slugs = {
    bank: params.bank,
    value: params.value,
    message: params.message,
  };

  return { slugs };
}