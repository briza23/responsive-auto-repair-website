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
                    "benefits": [{"logo": "fa fa-thumbs-up fa-3x", "header": "SPECIALIZATION", "information": "Problem with diesel or gasoline engine is not a problem. Trained technicians use the most up-to-date product knowledge and latest technology available"},
                                 {"logo": "fa fa-check-circle fa-3x", "header": "YEARS OF EXPERIENCE", "information": "The founders of Brizasautodeals Tony and Nomer, Has over 25 years of experience in the industry. The clients can ensure that the quality of work is the best."},
                                 {"logo": "fa fa-child fa-3x", "header": "COMPETETIVE PRICE", "information": "Brizasautodeals offers low price and quality service. There is no doubt, That brizasuatodeals will have a good potential, To be the leading Automotive company in the Philippines."}],
                    "summaryHours": "Mondays-Fridays: 8am -5pm",
                    "services": [{"image": "finishing-1-1415870.jpg", "name":"Steering"},
                                {"image": "finishing-1240052.jpg", "name":"Painting"},
                                {"image": "finishing-1442605.jpg", "name":"Rust Roofing"},
                                {"image": "man-at-work-1526213.jpg", "name":"Air conditioning"},
                                {"image": "transmission-1425377.jpg", "name":"Brake System"},
                                {"image": "wheel-1252599.jpg", "name":"Oil Replacement"},
                                {"image": "wood-carving-1-1239493.jpg", "name":"Labor Fluid"},
                                {"image": "zzr-pipe-1459804.jpg", "name":"Additives/Greassing"}],
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