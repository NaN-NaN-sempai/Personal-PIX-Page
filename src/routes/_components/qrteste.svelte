<script>
    import buildPixPayload from "$lib/buildPix";

    let codigo = "";



	import { onMount } from 'svelte';
    onMount(() => {
        const params = new URLSearchParams(location.hash.substring(1));
		//console.log(params)

        const value = params.get("v");

        codigo = buildPixPayload({
            key: "07bf70ca-4516-4fda-9e9b-0b39c56dadbe",
            value,
            name: "LUIS HENRIQUE DE ALMEIDA",
            city: "SR DO BONFIM",
            message: "Teste"
        });
    });
</script>

{#if codigo}
    <img src="https://api.qrserver.com/v1/create-qr-code/?format=svg&size=200x200&data={codigo}" alt="">
    <span>{codigo}</span>
{/if}

<style>
    img {
        width: 150px;
    }
    span {
        font-size: .7em;
    }
</style>