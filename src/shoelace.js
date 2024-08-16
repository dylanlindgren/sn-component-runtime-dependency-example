import { Fragment } from "@servicenow/ui-renderer-snabbdom";

export const shoelace = () => (
	<Fragment>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css"
		/>
		<script
			type="module"
			src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/shoelace.js"
		></script>
	</Fragment>
);
