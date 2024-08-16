import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import { shoelace } from "../shoelace";

import {
	SHOELACE_BUTTON_BLUR,
	SHOELACE_BUTTON_FOCUS,
	SHOELACE_BUTTON_INVALID,
	BUTTON_CLICKED,
} from "../constants";

const view = (state, dispatch) => {
	const { properties } = state;
	return (
		<div>
			{shoelace()}
			<sl-button
				on-sl-focus={(payload) => dispatch(SHOELACE_BUTTON_FOCUS, payload)}
				on-sl-blur={(payload) => dispatch(SHOELACE_BUTTON_BLUR, payload)}
				on-sl-invalid={(payload) => dispatch(SHOELACE_BUTTON_INVALID, payload)}
				on-click={(payload) => dispatch(BUTTON_CLICKED, payload)}
				size="large"
			>
				{properties.label}
			</sl-button>
		</div>
	);
};

createCustomElement("snc-wds-sl-button", {
	renderer: { type: snabbdom },
	properties: {
		label: {
			default: "",
		},
	},
	view,
});
