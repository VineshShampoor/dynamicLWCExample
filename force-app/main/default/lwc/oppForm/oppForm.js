import { LightningElement, api, track } from 'lwc';

export default class OppForm extends LightningElement {

    @api recordId;

    handleSuccess(event) {
        console.log('onsuccess event recordEditForm', event.detail.id);
        const selectEvent = new CustomEvent('recordcreated', {
            detail: { 
                objecttype: 'opportunity',
                recordid: event.detail.id
            }
        });
        this.dispatchEvent(selectEvent);
    }
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm' + event.detail.fields);
    }

    @track areDetailsVisible = false;
    handleLoad(event) {
        this.areDetailsVisible = true;
        window.console.time("LDS call");
        //details coming on the load of form
        // The LDS will take a few seconds to load the component.
        const recUi = event.detail;
        window.console.timeEnd("LDS call");
        //  window.console.log("OnLoadData-", JSON.stringify(recUi))
    }
}