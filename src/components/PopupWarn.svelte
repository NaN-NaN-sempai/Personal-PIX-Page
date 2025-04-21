<script>
	import { onMount } from "svelte";

    export let message = "lorem ipsum dolor sit amet";
    export let duration = 2;

    let body;
    let active = false;

    let timeout;
    
    export const show = (text) => {
        message = text;

        clearTimeout(timeout);

        active = true;

        timeout = setTimeout(() => {
            active = false;
        }, duration * 1000);
    }

</script>

<div class="body" data-active={active} bind:this={body}>
    { message }
</div>

<style lang="scss">
    @use "$style/palette";

    .body {
        position: absolute;
        z-index: 999;
        top: 190px;
        display: inline-block;
        background: palette.$secondary;
        border: 5px solid palette.$switchTextColor;
        border-radius: 9999px;
        max-width: 80vw;

        color: palette.$switchTextColor;
        font-weight: bold;
        font-size: 1.7rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-inline: 1.5rem;
        padding-block: .5rem;

        cursor: default;

        opacity: 1;
        
        max-height: 9999px;
        visibility: visible;
        transition: all 0.4s cubic-bezier(.46,.03,.52,.96);

        &[data-active="false"] {
            visibility: hidden;
            opacity: 0;
            max-height: 0;
        }
    }
</style>