import React from "react"; // eslint-disable-line no-unused-vars

const footerDetails = (props) => {
   const{ body } = props;
   const content = (
        <div className="footer-details">
            <div className="row">
                <div className="col-md-4 first-div">
                    <img className="details-info" alt="property_logo" width="222px" src={"company_logo.png"} />
                    <div className="text-left details-info">
                        <h4>{body.quote}</h4>
                    </div>                
                </div>
                <div className="col-md-4 second-div">
                    <h4>
                        <b>
                            <span className="fa fa-mobile fa-2x primary_blue_color fa-padding"/>
                            Call us
                        </b>
                        <br/>
                        <span className="details-info">{body.contact_number}</span>
                    </h4>
                    <h4><b><span className="fa fa-map-marker fa-2x primary_blue_color fa-padding"/> Our Location</b><br/>
                        <div className="details-info">
                            <span>{body.address}</span>
                        </div>    
                    </h4>
                    <h4><b><span className="fa fa-facebook fa-2x primary_blue_color fa-padding"/> Follow us</b><br/>
                        <div className="details-info">
                            <span><a target="blank" href={body.facebook.link}>{body.facebook.display}</a></span>
                        </div>    
                    </h4>                                                            
                </div>
                <div className="col-md-4">
                    <h4><strong><span className="fa fa-wrench primary_blue_color fa-2x"/> Operating Hours</strong></h4>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6 padding-left-48">
                            {body.open_hours_days.day.map(day => <h5 className="primary_blue_color">{day}</h5>)}
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            {body.open_hours_days.time.map(time => <h5 className="white">{time}</h5>)}
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
   );
   return content;
};

export default footerDetails;