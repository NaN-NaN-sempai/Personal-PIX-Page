<h3 class="container">
    <slot></slot>
</h3>

<style lang="scss">
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;

    .container {
        background: palette.$highlight;
        color: palette.$primary;

        text-transform: uppercase;
        text-align: center;
        text-wrap: nowrap;
        font-size: 1.7rem;
        user-select: none;

        --border: 200px;

        display: flex;
        flex-direction: column;
        align-items: center;
        
        --borderSize: 5px;
        padding: calc(10px - var(--borderSize));
        border: 3px solid palette.$primary;
        border-radius: 10px;
        
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