import { html, LitElement } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

customElements.define('gui-wrapper', class extends ScopedElementsMixin(LitElement) {
	static get properties() {
		return {
			tagName: { type: String },
		};
	}
	
	connectedCallback(){
		super.connectedCallback();
		
		const tagName = 'test-test';
		this.defineScopedElement(tagName, class {});
		this.tagName = this.constructor.getScopedTagName(tagName);
	}
	
	render() {
		return html`
			${this.tagName || 'not defined'}
		`;
	}
});
