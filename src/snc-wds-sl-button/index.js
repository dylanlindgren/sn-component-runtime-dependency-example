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

	function onButtonInsert(vnode) {
		vnode.elm.addEventListener("sl-blur", (payload) => {
			dispatch(SHOELACE_BUTTON_BLUR, payload)
		});

		vnode.elm.addEventListener("sl-focus", (payload) => {
			dispatch(SHOELACE_BUTTON_FOCUS, payload)
		});

		vnode.elm.addEventListener("sl-invalid", (payload) => {
			dispatch(SHOELACE_BUTTON_INVALID, payload)
		});
	}

	function onClick() {
		dispatch(BUTTON_CLICKED)
	}

	return (
		<div>
			{shoelace()}
			<sl-button hook-insert={onButtonInsert} on-click={onClick} size="large">
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
