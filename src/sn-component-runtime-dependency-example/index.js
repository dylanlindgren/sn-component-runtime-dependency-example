import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => (
	<div>
		<h1>Example</h1>
		<p>This is an example of a bare-bones component.</p>
		<p>You might want to read the <a href ="https://developer.servicenow.com/dev.do#!/reference/next-experience/latest/ui-framework/getting-started/introduction">documentation</a> on the ServiceNow developer site.</p>
	</div>
);

createCustomElement('sn-component-runtime-dependency-example', {
	renderer: {type: snabbdom},
	view,
	styles
});
