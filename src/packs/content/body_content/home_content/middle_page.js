import React from "react"; // eslint-disable-line no-unused-vars

const middle_page = (props) => { 
    const { body } = props;
    console.log(body.benefits);
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
        {benefits}
    </div>
   );
   return content;
};

export default middle_page;