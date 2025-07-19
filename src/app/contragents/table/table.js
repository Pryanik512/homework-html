

export function renderTableHead() {
    const mainView = document.getElementsByClassName('ms-main-view')[0];
    const table = document.getElementsByClassName('ms-table')[0];

    const tHeadElement = table.querySelector('thead');
    const templateHeadRow = mainView.querySelector("template[id='template-head-column']");

    // Create Element
    const headRowElement = document.createElement('tr');

    for(const column of ['Наименование', 'ИНН', 'Адрес', 'КПП', '']) {
        // Clone element
        const columnElement = templateHeadRow.content.children[0].cloneNode(true);

        // Set element content
        columnElement.innerHTML = column;

        // Append Element to another element
        headRowElement.appendChild(columnElement)
    }

    tHeadElement.appendChild(headRowElement)

}


export function renderTableBody() {


    const mainView = document.getElementsByClassName('ms-main-view')[0];

    const table = document.getElementsByClassName('ms-table')[0];


    const tBodyElement = table.querySelector('tbody');
    tBodyElement.innerHTML = '';


    const templateRowHead = mainView.querySelector("template[id='template-row-head']");
    const templateRowColumn = mainView.querySelector("template[id='template-row-column']");
    const templateDeleteRowBtn = mainView.querySelector("template[id='template-delete-row-btn']");


    const createRowColumn = (content) => {
        const rowColumn = templateRowColumn.content.children[0].cloneNode();
        rowColumn.innerHTML = content;
        return rowColumn;
    }

    const createDeleteRowBtn = () => {
        const btnName = templateDeleteRowBtn.content.children[0].children[0].innerHTML;
        const btn = templateDeleteRowBtn.content.children[0].children[0].cloneNode();
        btn.innerHTML = btnName;

        const rowColumn = templateDeleteRowBtn.content.children[0].cloneNode();
        rowColumn.appendChild(btn);
        return rowColumn;
    }



    for(const cp of window.counterparties) {
        const bodyRowElement = document.createElement('tr');

        bodyRowElement.id = cp.id;
        bodyRowElement.classList.add('bg-white'); 
        bodyRowElement.classList.add('border-b'); 
        bodyRowElement.classList.add('dark:bg-gray-800');  
        bodyRowElement.classList.add('dark:border-gray-700');  
        bodyRowElement.classList.add('border-gray-200'); 
        bodyRowElement.classList.add('hover:bg-gray-50');
        bodyRowElement.classList.add('dark:hover:bg-gray-600');

        const rowHead = templateRowHead.content.children[0].cloneNode();

        bodyRowElement.appendChild(rowHead)
        bodyRowElement.appendChild(createRowColumn(cp.inn));
        bodyRowElement.appendChild(createRowColumn(cp.address));
        bodyRowElement.appendChild(createRowColumn(cp.kpp));
        bodyRowElement.appendChild(createDeleteRowBtn());
        
        rowHead.innerHTML = cp.name;

        tBodyElement.appendChild(bodyRowElement)
    }

}