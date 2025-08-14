<script>
    export let action = (e) => {
        console.log(e)
    }

    export let type = "";

    export let height = "";
</script>

<button class="container" on:click={action} style="{type=="fit-container"? "width: 100%;": ""}{height?`height: ${height};`:""}">
    <slot></slot>
</button>

<style lang="scss">
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;

    .container {
        font-size: 1rem;
        font-weight: bold;
        background: palette.$highlight;
        color: palette.$primary;
        text-align: center;

        width: fit-content;
        --border: 200px;
        border-radius: 10px;

        display: inline;
        text-wrap: nowrap;

        padding: 10px;
        padding-inline: 15px;
        border: none;
        
        box-sizing: border-box;

        &:hover {
            cursor: pointer;
        }
    }
</style>