<script>
    export let onClick = null;
    export let href = "";
    export let type = "default";

    let clickFunction = () => {};

    let hasFunction = typeof onClick === "function";

    if(hasFunction) {
        clickFunction = function (...args) {        
            if(args[0] instanceof Event) args[0].preventDefault();
            
            return onClick(...args);
        }    
    }
</script>

<a class="defaultStyledButton {hasFunction ? 'hasFunction' : ''}" data-type={type} {href} on:click={clickFunction}>
    <div class="text">
        <slot></slot>
    </div>
</a>

<style lang="scss" global>
    @use "$style/_palette.scss" as palette;

    .defaultStyledButton {
        position: relative;
        display: inline-block; 
        padding-inline: 30px;
        padding-block: 10px;
        border-radius: 9999px;
        cursor: pointer, auto;
        transition: all 0.4s cubic-bezier(.46,.03,.52,.96);
        text-decoration: none;
        border: 5px solid;

        filter: drop-shadow(-10px 15px 5px rgba(0, 0, 0, 0.25));

        .text {
            text-decoration: inherit;
            font-weight: bold;
            font-size: large;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        &:hover {
            filter: drop-shadow(-10px 15px 5px rgba(0, 0, 0, 0.5));
            text-decoration: underline;
        }

        &[data-type="default"] {
            background: palette.$secondary;
            border-color: palette.$iconbg;
            color: palette.$highlight;
        }

        &[data-type="sky"] {
            background: palette.$skyBlue;
            border-color: palette.$highlight;
            color: palette.$switchTextColor__checked;
        }

        &.hasFunction {
            text-decoration: inherit;
        }
    }
</style>