import {showModal} from "../../../modal/modal.js";


export function addClickEventEditRowBtn() {

    const tableBody = document.getElementsByClassName('ms-table-body')[0];
    tableBody.addEventListener('dblclick', (e) => {

        if (e.target.className.includes('ms-edit-row-btn')) {
            
            const cpId = e.target.parentElement.id;

            const cpObject = window.counterparties.filter((c) => c.id == cpId)[0];

            showModal(cpObject);

        }

    }, false); 

}