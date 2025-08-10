<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <rect xmlns="http://www.w3.org/2000/svg" rx="6" x="0" y="0" width="200" height="200"/>

    <circle fill="none" stroke-opacity="1" stroke-width=".5" cx="100" cy="100" r="0">
        <animate
			attributeName="r"
			calcMode="spline"
			dur="2"
			values="1;80"
			keyTimes="0;1"
			keySplines="0 .2 .5 1"
			repeatCount="indefinite"
		/>
        <animate
			attributeName="stroke-width"
			calcMode="spline"
			dur="2"
			values="0;25"
			keyTimes="0;1"
			keySplines="0 .005 .005 .005"
			repeatCount="indefinite"
		/>
        <animate
			attributeName="stroke-opacity"
			calcMode="spline"
			dur="2"
			values="1;0"
			keyTimes="0;1"
			keySplines="0 .2 .5 1"
			repeatCount="indefinite"
		/>
    </circle>
    <circle fill="none" class="" stroke-opacity="1" stroke-width=".2" cx="100" cy="100" r="0">
        <animate
			attributeName="r"
			calcMode="spline"
			dur="3.14"
			values="1;80"
			keyTimes="0;1"
			keySplines="0 .2 .5 1"
			repeatCount="indefinite"
		/>
        <animate
			attributeName="stroke-width"
			calcMode="spline"
			dur="3.14"
			values="0;25"
			keyTimes="0;1"
			keySplines="0 .01 .01 .01"
			repeatCount="indefinite"
		/>
        <animate
			attributeName="stroke-opacity"
			calcMode="spline"
			dur="3.14"
			values="1;0"
			keyTimes="0;1"
			keySplines="0 .2 .5 1"
			repeatCount="indefinite"
		/>
    </circle>
    <circle class="center" stroke-opacity="1" stroke-width=".2" cx="100" cy="100" r="0">
		<animate
			attributeName="r"
			calcMode="spline"
			dur="1.5"
			values="5;15;5"
			keyTimes="0;0.5;1"
			keySplines="0 .2 .5 1;0 .2 .5 1"
			repeatCount="indefinite"
		/>

    </circle>
</svg>

<style lang="scss">
    @use "$style/_palette.scss" as palette;

	svg {
		width: 100%;
		
        rect {
			fill: palette.$primary;
        }

		circle {
			stroke: palette.$highlight;

			&.b {
			stroke: palette.$primary;
			}

			&.center {
				fill: palette.$highlight;
			}
		}
	}
</style>