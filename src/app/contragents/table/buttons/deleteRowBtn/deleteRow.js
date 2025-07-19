import {renderTableBody} from '../../table.js';


export function addClickEventDeleteRowBtn() {
    const tableBody = document.getElementsByClassName('ms-table-body')[0];
    tableBody.addEventListener('click', (e) => {

        if (e.target.className.includes('ms-delete-row-btn')) {

            
            
            const row = e.target.parentElement.parentElement;

            window.counterparties = window.counterparties.filter((c) => c.id != row.id);
            
            renderTableBody();

        }

    }, false); 

}