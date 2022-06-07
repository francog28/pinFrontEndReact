import './Assets/styles/index.css';

function App() {
    return (
        <body>
        <header className="header">
            <div className="container">
                <a href="#inicio">
                    <img src="Assets\Images\footer-logo.svg" alt="Logo" className="logo"/>
                </a>
                <nav className="navbar">
                    <ul>
                        <li><a href="#inicio">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main className="main">
            <section id="inicio" className="section-inicio">
                <div className="slider">
                    <div className="slider-items">
                        <div className="slider-item slider-item--first slider-item--active">
                            <div className="container firstSection">
                                <h2>Sed ut perspiciatis <br/> unde omnis iste natus</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error<br/> sit voluptatem accusantium
                                    doloremque.</p>
                                <a href="">Read more</a>
                                <div className="sliderNav">
                                    <ul>
                                        <li><a href="" className="navButton"></a ></li>
                                        <li><a href="" className="navButton"></a></li>
                                        <li><a href="" className="navButton"></a></li>
                                    </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="sectionAbout">
                <div className="row about-content">
                    <div className="col-7 col-offset-3">
                        <div id="aboutRectangle"></div>
                        <h2>We help bussinesses 
                            <span>grow and innovate</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                            sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut</p>
                    </div>
                </div>
            </section>
            <section id="products" className="sectionProducts">
                <div className="productsContent">
                    <div className="productsCards">
                        <div>
                            <h3>Sed ut perspiciatis</h3>
                            <h2>Nemo Enim</h2>
                        </div>
                        <div className="prodCardRight">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit 
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam.</p>
                        </div>
                        <div className="productsNav">
                                <a href=""><img src="Assets\Images\Icon feather-arrow-left-circle.svg" alt="Products navigation left"/></a>
                                <a href=""><img src="Assets\Images\Icon feather-arrow-right-circle.svg" alt="Products navigation right"/></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="sectionServices">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Sed ut perspiciatis
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.                    </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Ut enim ad minima veniam
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Sit amet, consectetur, adipisci
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="sectionContact">
                <div className="contactContent">
                    <div>
                        <h2>Get in touch 
                            <span>We are hiring!</span>
                        </h2>
                        <form className="contactForm"> 
                            <div>
                                <div className="formInput">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name"/>
                                </div>
                                <div className="formInput">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email"/>
                                </div>
                                <div className="formInput">
                                    <label for="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone"/>
                                </div>
                                <div className="formInput">
                                    <label for="message">Message</label>
                                    <input type="text" id="message" name="message"/>
                                </div>
                                <button className="buttonPrimary">Send</button>
                            </div>
                        </form>
                    </div>
                    <img className="contactImage" src="Assets\Images\contact-image-hq.jpg" alt="Contact background image"/>
                </div>
            </section>
        </main>
    </body>
    );
  }