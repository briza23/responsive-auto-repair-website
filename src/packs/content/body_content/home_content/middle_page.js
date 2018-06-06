import React from "react"; // eslint-disable-line no-unused-vars
import { constants } from "os";

const middle_page = (props) => { 
    const { body } = props;
    const services_details =(
        <div className="services_details white-background">
            <div className="row">
                <div className="col-md-4">
                    <h3><b>Car Maintenace</b></h3>
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <span className="primary_blue_color fa fa-car fa-4x"></span>
                        </div>
                        <div className="col-md-10">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>                        
                    </div>
                </div>
                <div className="col-md-4">
                    <h3><b>Common Services</b></h3>
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <span className="primary_blue_color fa fa-cog fa-4x"></span>
                        </div>
                        <div className="col-md-10">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>                        
                    </div>
                </div>
                <div className="col-md-4">
                    <h3><b>Break Repair & Services</b></h3>
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <span className="primary_blue_color fa fa-wrench fa-4x"></span>
                        </div>
                        <div className="col-md-10">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );

    const services = (
        <div className="services">
            <div className="text-center gray">
                <h1 className="primary_blue_color"><b>Our Best Services</b></h1>
                <p>We provide a great maintenance services for all types of vehicles.</p>
            </div>
            <div className="products">
                <div className="row">
                    {
                        body.services.map((value, index) => 
                            <div key={index} className="col-md-3 text-center prod-container">
                                <img width="367px" height="220px" src={value.image} alt="Norway"/>
                                <div className="centered">
                                    <span className="image-font">{value.name}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
    const benefits = (
        <div className="benefits">
            <div className="row">
                <div className="col-md-12 text-center">
                    <span className="white benefits-header"><b>WHY CHOOSE US?</b></span>
                    <p className="white benefits-info">We provide a great maintenance services for all types of vehicles.</p>
                </div>
            </div>
            <div className="row">
                {body.benefits.map((benefit, index) => 
                    <div key={index} className="col-md-4 text-center benefits-content">
                        <div>
                            <span className="white"><i className={benefit.logo}/></span>
                        </div>
                        <h4 className="primary_blue_color"><b>{benefit.header}</b></h4>
                        <p className="white">{benefit.information}</p>
                    </div>
                )}
            </div>      
        </div>
    );
    const content = (
    <div>
        {services_details}
        {services}
        {benefits}
    </div>
   );
   return content;
};

export default middle_page;