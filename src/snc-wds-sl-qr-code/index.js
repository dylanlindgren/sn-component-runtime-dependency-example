import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import { shoelace } from "../shoelace";

const view = (state) => {
	const { properties } = state;

	return (
		<div>
			{shoelace()}
			<sl-qr-code
				value={properties.value}
				label={properties.label}
			></sl-qr-code>
		</div>
	);
};

createCustomElement("snc-wds-sl-qr-code", {
	renderer: { type: snabbdom },
	properties: {
		value: {
			default: "",
		},
		label: {
			default: "",
		},
	},
	view,
});
