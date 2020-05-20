import React, {Component} from 'react'

class Carousel extends Component{
    render() {
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fashion-store-1da9a.appspot.com/o/Fbug_Web_compressed.jpg?alt=media&token=0a7785e8-5bff-4aaa-9450-1dcfefa82ea1" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fashion-store-1da9a.appspot.com/o/Web-Banner-5.png?alt=media&token=0dc2204e-2a96-4c7a-b717-34ddba27c4d8" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fashion-store-1da9a.appspot.com/o/Fbug_Web_compressed.jpg?alt=media&token=0a7785e8-5bff-4aaa-9450-1dcfefa82ea1" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }

}
