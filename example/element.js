import '../src/index.js';

const el = document.createElement('DIV');
document.body.appendChild(el);

el.innerHTML = `		
	<snc-wds-sl-qr-code value="https://www.dylanlindgren.com" label="Visit my website!"></snc-wds-sl-qr-code>
	<snc-wds-sl-button label="This is a test button"></snc-wds-sl-button>
`;