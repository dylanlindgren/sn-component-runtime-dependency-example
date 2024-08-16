import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const view = (state, { updateState }) => {
	const { properties } = state;

	return (
		<div>
			<script
				type="module"
				src="https://cdn.jsdelivr.net/gh/vanillawc/wc-marquee@1/index.js"
			></script>
			<wc-marquee party>
				{properties.message}
			</wc-marquee>
		</div>
	);
};

createCustomElement("snc-wds-runtime-dependency-example", {
	renderer: { type: snabbdom },
	properties: {
		message: {
			default:
				"This is an example web component imported through a script tag.",
		},
	},
	view,
	styles,
});
