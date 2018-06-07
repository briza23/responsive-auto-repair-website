# Auto Care Template

Responsive Auto Repair Website.

## Getting Started

This project is created using ES6, Redux, Bootstrap, Jquery, and Create React (See here for create react documentation https://github.com/facebook/create-react-app). This is used for templates, and this project is free. Feel free to clone the project.

### Prerequisites

To run the app you need to have:
<br />
npm - https://www.npmjs.com/get-npm 
<br />
OR
<br />
yarn - https://yarnpkg.com/lang/en/docs/install/

### Installing

Clone the project using 
```
  git clone https://github.com/briza23/responsive-auto-repair-website.git
```
Go to project
```
cd responsive-auto-repair-website
```
For npm users
```
npm start
```
For yarn users
```
yarn start
```
By default it will run at port `3000`

## How it works?

Go to reducers file, you will see a lot of text that is listed there. All you have to do is to change it to yours!

```javascript
const header_data = {
    "company_name": "Briza's Auto Deals",
    "pages": [{"name": "HOME", "link": "/", "id": "home"},
              {"name": "SERVICES", "link": "/services", "id": "services"},
              {"name": "ABOUT US", "link": "/about_us", "id": "about_us"},
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
```

## Deployment

Currently the demo is hosted in heroku,

## Demo

See the demo here https://brizasautodeals.herokuapp.com/


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

Developer: * **Jann Anthony Briza** - [briza23](https://github.com/briza23)
Designer: * **Jenniza Anne Petalbert** - [jenniza](https://www.behance.net/user/?username=jennizapetalbert)


See also the list of [contributors](https://github.com/briza23/responsive-auto-repair-website/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
