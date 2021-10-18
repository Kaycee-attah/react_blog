import React from 'react';

export default function blog() {
    return (
        <div className="main-container">
            <section className="container-1">
                <div className="card-1">
                    <div className="card-1-wrapper">
                        <h1 className="card-text">Educating the public on issues of life</h1>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        {/* <div className="button-container">
                            <button>Sign Up</button>
                        </div> */}
                    </div>
                </div>
                <div className="card-2-container">
                    <div className="divider">
                        Featured Article
                    </div>
                    <div className="card-2">
                    <div className="featured-article-wrapper">
                        <div className="featured-article">
                            <h2>Using AWS S3 for Storing Blog images</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <div class="custom-shape-divider-bottom-1634329256">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <section className="container-2">
                
               <div className="motor-wrapper">
                    <h2>Our at React Blog is to make people be the best versions of themselves they can be by writing on issues ranging from mental health to better learning habits and so on.</h2>
                    <span>Join</span> our community today.
               </div>
            </section>
        </div>
    )
}