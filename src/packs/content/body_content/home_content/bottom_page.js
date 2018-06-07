import React from "react"; // eslint-disable-line no-unused-vars

const bottom_page = (props) => {
    const { body } = props;
    const contact_us = (
        <div name="contact_us" className="row">
            <div id="contact_us" className="col-md-12 padding-contact-us">
                <div className="text-center">
                    <b className="contact_head">CONTACT US</b>
                    <p className="contact-info">Our Location and Services Inquiries</p>
                </div>
            </div>
        </div>
   );
   const contact_location_details = (
       <div className="row">
            <div className="col-md-5 details-info">
                <div className="row margin-details">
                    <div className="col-md-2 col-sm-2 col-xs-2"><span className="fa fa-map-marker fa-3x"/></div>
                    <div className="col-md-10 col-sm-10 col-xs-10"><span className="details-info-text">{body.address}</span></div>                    
                </div>
                <div className="row margin-details">
                    <div className="col-md-2 col-sm-2 col-xs-2"><span className="fa fa-mobile fa-3x"/></div>
                    <div className="col-md-10 col-sm-10 col-xs-10"><span className="details-info-text">{body.contact_number}</span></div>                    
                </div>
                <div className="row margin-details">
                    <div className="col-md-2 col-sm-2 col-xs-2"><span className="fa fa-wrench fa-3x"/></div>
                    <div className="col-md-10 col-sm-10 col-xs-10"><span className="details-info-text">{body.summaryHours}</span></div>                    
                </div>
            </div>
            <div className="col-md-7 map-style">
                <div id="map">
                </div>
            </div>        
        </div>
   );
    const content = (
    <div  className="contact_us">
        {contact_us}
        {contact_location_details}
    </div>
   );
   return content;
};

export default bottom_page;