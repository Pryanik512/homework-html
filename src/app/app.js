import html from "./app.html";
import modal from "./contragents/modal/modal.html";
import {addCounterpartClickListener} from "./contragents/modal/modal.js";
import tableHTML from "./contragents/table/table.html";
import deleteRowBtnHTML from "./contragents/table/buttons/deleteRowBtn/deleteRow.html";
import './app.css'
import {renderTableHead, renderTableBody} from './contragents/table/table.js'

import {addClickEventDeleteRowBtn} from './contragents/table/buttons/deleteRowBtn/deleteRow.js'
import {addClickEventEditRowBtn} from './contragents/table/buttons/editRowBtn/editRowBtn.js'
import counterpartyList  from "./contragents/table/counterparties";


window.counterparties = counterpartyList;

const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

const header = rootElement.getElementsByTagName('header')[0];

header.innerHTML = header.innerHTML + modal;

const mainView = document.getElementsByClassName('ms-main-view')[0];

mainView.innerHTML = tableHTML + deleteRowBtnHTML;

renderTableHead();
renderTableBody();
addClickEventDeleteRowBtn();
addClickEventEditRowBtn();
addCounterpartClickListener();