<div>
    <slot></slot>
</div> 

<style lang="scss">
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;

    div {
        background: palette.$primary;
        --border: 200px;
        border-radius: 20px;
        display: flex;
        gap: 5px;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
    }
    
    @media only screen and (max-width: defaults.$mediaMaxWidth) { 
        div {
            background: linear-gradient(to top, palette.$secondary 10%, transparent);

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