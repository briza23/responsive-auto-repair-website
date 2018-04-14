import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

const header_data = {
    "company_name": "Briza's Auto Deals",
    "pages": [{"name": "HOME", "link": "/", "id": "home"},
              {"name": "SERVICES", "link": "/services", "id": "services"},
              {"name": "ABOUT US", "link": "/about_us", "id": "about_is"},
              {"name": "CONTACT US", "link": "/contact_us", "id": "contact_us"},],
    "open_hours": {"day": "MONDAYS-FRIDAYS", time: "8 AM - 5 PM"},
    "contact_number": "(02) 500 7069",
    "property_logo": "https://lh3.google.com/u/0/d/1p1vq26fgIE9ksRk6qC_hFa3o644hGr7E=w1832-h887-iv1"
}
const body_data = { "open_hours_days": {day: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"],
                    time: ["8:00 AM to 5:00 PM", "8:00 AM to 5:00 PM", "8:00 AM to 5:00 PM", "8:00 AM to 5:00 PM", "8:00 AM to 5:00 PM", "CLOSED", "CLOSED"]},
                    "address": "9018 Provincial Road, Brgy. San Jose, Antipolo Rizal.",
                    "contact_number": "(02) 500 7069",
                    "quote": "Our goal is to gain your trust and confidence so that when you leave the shop, you are certain that your vehicle has been properly repaired by highly trained and certified technicians.",
                    "facebook": {"link" : "https://www.facebook.com/brizasautodeals", "display": "facebook.com/brizasautodeals"}};
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