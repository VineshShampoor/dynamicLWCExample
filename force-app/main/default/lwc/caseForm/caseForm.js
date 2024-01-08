import { LightningElement, api, track } from 'lwc';

export default class CaseForm extends LightningElement {

    @api recordId;

    handleSuccess(event) {
        console.log('onsuccess event recordEditForm', event.detail.id)
    }
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm' + event.detail.fields);
    }

    @track areDetailsVisible = false;
    handleLoad(event) {
        this.areDetailsVisible = true;
        console.log("recordId passed " + this.recordId);
        window.console.time("LDS call");
        //details coming on the load of form
        // The LDS will take a few seconds to load the component.
        const recUi = event.detail;
        window.console.timeEnd("LDS call");
        //  window.console.log("OnLoadData-", JSON.stringify(recUi))
    }
}