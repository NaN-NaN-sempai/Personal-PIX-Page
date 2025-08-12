<script>
    export let style = ""
</script>

<p {style}>
    <slot></slot>
</p>

<style lang="scss">
    @use "$style/_palette.scss" as palette;

    p {
        font-family: sans-serif;
        font-size: 1rem;

        color: palette.$highlight;
    }
</style>