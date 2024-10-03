import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.jsx';

function Home() {
    return (
        <div className="carousel">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="src/assets/slide01.jpg" className="d-block w-100" alt="Imagen 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="src/assets/slide02.jpg" className="d-block w-100" alt="Imagen 2" />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

                
                
            </div>
            </div>
            
        
    );
}

export default Home;
