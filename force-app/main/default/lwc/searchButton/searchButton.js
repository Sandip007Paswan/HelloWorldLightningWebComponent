//Create just Lwc button
import { LightningElement } from 'lwc';

export default class SearchButton extends LightningElement {
    queryTerm;

    handleKeyUp(evt) {
        const isEnterKey = evt.keyCode === 13;
        if (isEnterKey) {
            this.queryTerm = evt.target.value;
        }
    }
}