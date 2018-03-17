import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

const header_data = {
    "company_name": "Briza's Auto Deals",
    "pages": [{"name": "Home", "link": "/", "id": "home"},
              {"name": "Services", "link": "/services", "id": "services"},
              {"name": "About Us", "link": "/about_us", "id": "about_is"},
              {"name": "Contact Us", "link": "/contact_us", "id": "contact_us"}]
}
const body_data = [{}];
const footer_data ={};

// main reducers

function header(data = header_data, action) {
    switch (action.type) {
    default:
        return data;
    }
}
function body(data = body_data, action) {
    switch (action.type) {
    default:
        return data;
    }
}

function footer(data = footer_data, action) {
    switch (action.type) {
    default:
        return data;
    }
}

// End of main reducers

// Sub Reducers
// function active_page(data = header_data.pages[0], action) {
//     switch (action.type) {
//     case "CHANGE_ACTIVE_PAGE": {
//         return action.data;
//     }
//     default:
//         return data;
//     }
// }
// End of Sub Reducers

const reducers = combineReducers({
    router: routerReducer,
    header,
    body,
    footer,
    // active_page
});

export default reducers;