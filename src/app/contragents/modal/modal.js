import {renderTableBody} from './../table/table.js'



export function showModal(counterparty) {

    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.classList.add('overflow-hidden');



    const saveCounterpatyModalBtn = document.getElementById('cp-creation-modal');
    saveCounterpatyModalBtn.classList.remove('hidden');
    saveCounterpatyModalBtn.classList.add('flex');
    saveCounterpatyModalBtn.setAttribute('aria-modal','true');
    saveCounterpatyModalBtn.setAttribute('role','dialog');
    saveCounterpatyModalBtn.removeAttribute('aria-hidden');


   
    if (counterparty) {

        const modal = document.getElementById('cp-creation-modal');
        modal.querySelector('input[name="modal-cp-id"]').value = counterparty.id;
        modal.querySelector('input[name="modal-cp-name"]').value = counterparty.name;
        modal.querySelector('input[name="modal-cp-inn"]').value  = counterparty.inn;
        modal.querySelector('input[name="modal-cp-address"]').value  = counterparty.address;
        modal.querySelector('input[name="modal-cp-kpp"]').value  = counterparty.kpp;
    }

}

export function addCounterpartClickListener() {


    const saveCounterpatyModalBtn = document.getElementById('modal-cp-submit-form');
    saveCounterpatyModalBtn.addEventListener('click', (e) => {
        
        const modal = document.getElementById('cp-creation-modal');

        const idInput = modal.querySelector('input[name="modal-cp-id"]').value;
        const nameInput = modal.querySelector('input[name="modal-cp-name"]').value;
        const innInput = modal.querySelector('input[name="modal-cp-inn"]').value;
        const addressInput = modal.querySelector('input[name="modal-cp-address"]').value;
        const kppInput = modal.querySelector('input[name="modal-cp-kpp"]').value;

        
        if (idInput) { 

            let existingCp = window.counterparties.filter((c) => c.id == idInput)[0];
            existingCp.name = nameInput;
            existingCp.inn = innInput;
            existingCp.address = addressInput;
            existingCp.kpp = kppInput;
            

        } else {

            
            var counterpartyObject = {
                id: Math.random(999), 
                name: nameInput,
                inn: innInput,
                address: addressInput,
                kpp: kppInput
            }
            window.counterparties.push(counterpartyObject);
        }

        renderTableBody();

    });

}