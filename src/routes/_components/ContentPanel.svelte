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
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: -15px 19px 5px 1px rgba(0, 0, 0, 0.25);
        padding: 13px;
    }
    
    @media only screen and (max-width: defaults.$mediaMaxWidth) { 
        div {
            background: linear-gradient(to top, palette.$secondary 10%, transparent);

            box-shadow: 0 10px 7px 2px rgba(0, 0, 0, 0.25);

            margin: 30px;
            --border: 500px;
            --borderB: 80px;
            border-radius:
                var(--border)
                var(--border)
                var(--borderB)
                var(--borderB);
        }
    }
</style>