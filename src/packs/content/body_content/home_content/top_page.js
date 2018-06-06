import React from "react"; // eslint-disable-line no-unused-vars

const top_page = (type) => {
   const content = (
    <div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="item active">
            <img width="100%" src="498888104.jpg"  alt="Los Angeles" />
            </div>
    
            <div className="item">
            <img width="100%" src="673723668.jpg" alt="Chicago"/>
            </div>
        
            <div className="item">
            <img width="100%" src="522394158.jpg" alt="New york" />
            </div>

            <div className="item">
            <img width="100%" src="submarine-interiour-4-1563934.jpg" alt="New york" />
            </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
        </div>
    </div>
   );
   return content;
};

export default top_page;