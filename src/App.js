import * as React from 'react';
import FooterLogo from "./Assets/Images/footer-logo.svg";
import ProductsNavLeft from "./Assets/Images/Icon feather-arrow-left-circle.svg";
import ProductsNavRight from "./Assets/Images/Icon feather-arrow-right-circle.svg";
import './Assets/styles/App.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormSection from './Components/FormSection/FormSection';

function App() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);}

  return (
    <div className="App">
        <body>
            <header className="header">
                <div className="container">
                    <a href="#inicio">
                        <img src={FooterLogo} alt="Logo" className="logo"/>
                        <footerLogo className="logo"/>
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
                            <div id="contentAbout">
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
                                    eirmod tempor invidunt ut
                                </p>
                            </div>
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
                                <div className="productsNav">
                                    <a href=""><img src={ProductsNavLeft} alt="Products navigation left"/></a>
                                    <a href=""><img src={ProductsNavRight} alt="Products navigation right"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="sectionServices">
                    <div className='acordeon'>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{margin:'0px'}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color:'rgba(224, 117, 47)'}}/>}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header" sx={{ backgroundColor:'rgba(248, 248, 248)', border: '1px solid rgba(227, 227, 227)'}}
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0, fontSize:'0.8rem', fontWeight:'500', color:'rgba(95, 99, 104)', width:'auto', padding:'5px'}}>
                                Sed ut perspiciatis
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ padding: '1.85rem'}}>
                            <Typography sx={{fontSize:'0.8rem', color:'rgba(95, 99, 104)', letterSpacing:'0.22px', lineHeight:'28px'}}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color:'rgba(224, 117, 47)'}}/>}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header" sx={{ backgroundColor:'rgba(248, 248, 248)', border: '1px solid rgba(227, 227, 227)'}}
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0, fontSize:'0.8rem', fontWeight:'500', color:'rgba(95, 99, 104)', width:'auto', padding:'5px'}}>Ut enim ad minima veniam</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ padding: '1.85rem'}}>
                            <Typography sx={{fontSize:'0.8rem', color:'rgba(95, 99, 104)', letterSpacing:'0.22px', lineHeight:'28px'}}>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color:'rgba(224, 117, 47)'}}/>}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header" sx={{ backgroundColor:'rgba(248, 248, 248)', border: '1px solid rgba(227, 227, 227)'}}
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0, fontSize:'0.8rem', fontWeight:'500', color:'rgba(95, 99, 104)', width:'auto', padding:'5px'}}>
                                Sit amet, consectetur, adipisci
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ padding: '1.85rem', margin:'0'}}>
                            <Typography sx={{fontSize:'0.8rem', color:'rgba(95, 99, 104)', letterSpacing:'0.22px', lineHeight:'28px'}}>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </section>
                {/* <section id="contact" className="sectionContact">
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
                        <img className="contactImage" src={ContactBgImage} alt="Contact background image"/>
                    </div>
                </section> */}
                <FormSection/>
                <footer>
                    <div className='sectionFooter'>
                        <p>2020 © All rights reserved.</p>
                        <img className='footerLogo' src={FooterLogo} alt=""/>
                    </div>
                </footer>
            </main>
        </body>
    </div>
  );
}

export default App;
