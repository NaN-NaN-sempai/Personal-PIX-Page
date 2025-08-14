<div>
    <slot></slot>
</div>

<style lang="scss">
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;

    div {
        background: palette.$secondary;
        --border: 200px;
        border-radius: 30px;
        margin-left: 70px;
        width: fit-content;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 10px;
        box-shadow: -15px 19px 5px 1px rgba(0, 0, 0, 0.25);
        padding: 10px;
    }
</style>