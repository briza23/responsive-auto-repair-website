import React from "react"; // eslint-disable-line no-unused-vars
import { Route } from 'react-router-dom';
import home from './body_content/home';
import aboutUs from './body_content/about_us';
import services from './body_content/services';
import contactUs from './body_content/contact_us';

const Body = (type) => {
   const content = (
    <div>
        <Route exact path="/" component={home} />
        <Route exact path="/about_us" component={aboutUs} />
        <Route exact path="/services" component={services} />
        <Route exact path="/contact_us" component={contactUs} />
    </div>
   );
   return content;
};

export default Body;