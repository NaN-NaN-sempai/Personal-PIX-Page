<script>
	import GeneralField from "./GeneralField.svelte";

    export let value = 0; 
    export let name = "Field Name";

    function formatNumber(num) {
        return new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(num.replace(",", "."));
    }

    let displayAmount = formatNumber(value);

</script>

<div class="container">
    <GeneralField>
        <p class="title">{name}</p>
        
        <div class="value">
            <GeneralField color="primary">
                <div class="displayAmount">
                    <p class="coin"> R$ </p>
                    <p class="amount"> {displayAmount} </p>
                </div>
            </GeneralField>
        </div>
    </GeneralField>
</div>

<style lang="scss">
    @use "$style/_palette.scss" as palette;
    .container {
        width: 100%;

        .value {
            width: 100%;
            font-size: 1rem;

            .displayAmount {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;

                .coin {
                    text-align: left;
                }
            }
        }

        p {
            font-family: sans-serif;
            
            width: 100%;

            color: palette.$highlight;

            &.title {
                font-size: 1.3rem;
                font-weight: bold;
                text-align: right;
                text-transform: uppercase;
                margin-right: 22px;
            }
        }
    }
</style>