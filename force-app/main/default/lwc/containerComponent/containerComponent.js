import { LightningElement, api } from 'lwc';


const FORM_MAPPING = {
    caseForm: () => import("c/caseForm"),
    contactForm: () => import("c/contactForm"),
    oppForm: () => import("c/OppForm"),
};

export default class ContainerComponent extends LightningElement {

    @api recordId;
    value = 'None';
    formCtor;

    get options() {
        return [
            { label: '--Select--', value: 'None' },
            { label: 'Case Form', value: 'caseForm' },
            { label: 'Contact Form', value: 'contactForm' },
            { label: 'Opp Form', value: 'oppForm' },
        ];
    }	
			
    handleChange(event) {
        this.value = event.detail.value;
        
        if(this.value=='None'){
            return;
        }

        FORM_MAPPING[this.value]().then(({ default: formCtor }) => {
            this.formCtor = formCtor;
        });

    }

}