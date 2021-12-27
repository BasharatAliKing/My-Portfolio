import React, { Component ,useEffect} from "react";
import "./App.css";
import AOS from "aos";
import  "aos/dist/aos.css";

function App(){
    useEffect(() => {
        AOS.init()
      
    }, [])
    
        return (
            <>
                <section id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <nav className="navbar navbar-dark navbar-expand-lg">
                                    <a href="">
                                        <h1><img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={process.env.PUBLIC_URL + "/logo.png"} alt="My-Pic" width="120px" /></h1>
                                    </a>
                                    <button class="navbar-toggler">
                                        <span class="navbar-toggler-icon" data-toggle="collapse" data-target="#mynavbar"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="mynavbar">
                                        <ul className="navbar-nav ml-5 mr-auto ">
                                            <li className="nav-item" ><a className="nav-link active" href=""><span data-hover="HOME " >HOME</span></a></li>
                                            <li className="nav-item" ><a className="nav-link" href="#work"><span data-hover="WORK">WORK</span></a></li>
                                            <li className="nav-item" ><a className="nav-link" href=""><span data-hover="PORTFOLIO">PORTFOLIO</span></a></li>
                                            <li className="nav-item" ><a className="nav-link" href="#about"><span data-hover="ABOUT ME">ABOUT ME</span></a></li>

                                            <li className="nav-item" ><a className="nav-link" href="#contact"><span data-hover="CONTACT ">CONTACT </span></a></li>

                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-9">
                                <h2 data-aos="fade-down"  data-aos-duration="1000" >Hey, I Am </h2>
                                <h1 data-aos="fade-up"  data-aos-duration="1000" class="animated animated-text">
                                    <span data-aos="fade-right"  data-aos-duration="1000" class="hey">Hey folks, I'm</span>
                                    <div class="animated-info">
                                        <span class="animated-item">Basharat Ali</span>
                                        <span class="animated-item">Developer</span>
                                        <span class="animated-item">UI Specialist</span>
                                    </div>
                                </h1>
                                <p className="para" data-aos="fade-up"  data-aos-duration="1000">
                                    Web Developer and React Developer
                                </p>
                                <button data-aos="fade-up"
     data-aos-duration="2000"><a  href="#work">VIEW MY WORK</a></button>
                            </div>
                            <div data-aos="fade-left"
     data-aos-duration="3000" className="col-lg-3 col-md-3"><img src={process.env.PUBLIC_URL + "/me.jpg"} alt="My-Pic" width="250px" />
                            </div>
                        </div>
                    </div>
                </section>


                <section id="work">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1  data-aos="fade-right"  data-aos-duration="1000">Work</h1>
                            </div>
                            <p data-aos="fade-up"  data-aos-duration="1000">A Cross sectoin off my recent projects and works so please check it.</p>
                            <ul id="links" className='list-unstyled'>

                                <li className='nav-item' data-aos="fade-up"  data-aos-duration="1000"><a className='nav-link' href="https://bdking-dogarrantacar.netlify.app/">https://bdking-dogarrantacar.netlify.app/</a></li>
                                <li className='nav-item' data-aos="fade-up"  data-aos-duration="1000"><a className='nav-link' href="https://bdking-firstreactapp.netlify.app/">https://bdking-firstreactapp.netlify.app/</a></li>
                                <li className='nav-item' data-aos="fade-up"  data-aos-duration="1000"><a className='nav-link' href="https://bdking-ecowebportals.netlify.app/">https://bdking-ecowebportals.netlify.app/</a></li>
                                <li className='nav-item' data-aos="fade-up"  data-aos-duration="1000"><a className='nav-link' href="https://bdking-onlinefastfoods.netlify.app/">https://bdking-onlinefastfoods.netlify.app/</a></li>
                                <li className='nav-item' data-aos="fade-up"  data-aos-duration="1000"><a className='nav-link' href="https://bdking-iphone-back.netlify.app/">https://bdking-iphone-back.netlify.app/</a></li>
                                <li className='nav-item' data-aos="fade-up"  data-aos-duration="1000"><a className='nav-link' href="https://bdkinglogin-form.netlify.app/">https://bdkinglogin-form.netlify.app/</a></li>
                                <li className='nav-item' data-aos="fade-up"  data-aos-duration="1000"><a className='nav-link' href="http://bdkingonline-meals.netlify.app/">http://bdkingonline-meals.netlify.app/</a></li>
                                <li className='nav-item' data-aos="fade-up"  data-aos-duration="1000"><a className='nav-link' href="https://bdking-chalmaraputt-movie.netlify.app/#putt3">https://bdking-chalmaraputtmovie.netlify.app/</a></li>
                                <li className='nav-item' data-aos="fade-up"  data-aos-duration="1000"><a className='nav-link' href="https://bdkingwarmachines.netlify.app/">https://bdking-warmachines.netlify.app/</a></li>
                                <li className='nav-item' data-aos="fade-up"  data-aos-duration="1000"><a className='nav-link' href="https://bdkingvivagames.netlify.app/">https://bdking-vivagames.netlify.app/</a></li>
                                <li className='nav-item' data-aos="fade-up"  data-aos-duration="1000"><a className='nav-link' href="https://bdkingjss.netlify.app/">https://bdkingjss.netlify.app/</a></li>
                                <li className='nav-item' data-aos="fade-up"  data-aos-duration="1000"><a className='nav-link' href="https://basharatali-responsivedesign.netlify.app/">https://basharatali-responsivedesign.netlify.app/</a></li>
                            </ul>
                            <div className=" col-12">

                            </div>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1  data-aos="fade-right"  data-aos-duration="1000">About Me</h1>
                            </div>
                            <div className="col-md-8">
                                <p className="mt-4" data-aos="fade-up"  data-aos-duration="1000">Hey, I Am Basharat Ali, I am Web Developer from LHR. Pakistan. I create custom websites to help businesses do better Online. I am a front end web developer. I know how to work with HTML,HTML5, CSS, CSS3, javascript, Advance JavaScript and I also Work on React JavaScript. I have already built projects using HTML CSS and javascript. If you need a front-end web developer feel free to contact me. I Can do your work as you want. And if you need a React js developer then you can contact me i make do this at a good budget. If you want to visit my Gig then the link is given below at Contact session. <span>Thanks.... to you </span></p>
                            </div>
                            <div className="col-md-3 offset-1">
                                <img data-aos="fade-left"  data-aos-duration="1000" src={process.env.PUBLIC_URL + "/me.jpg"} alt="" className='me' width="200px" />
                            </div>
                            <div className="col-lg-6 col-md-10">
                                <h4 data-aos="fade-down"  data-aos-duration="1000">Here i will discuss some web development processes.</h4>
                            </div>
                                 <div className="row mt-5">
                                     <div className="col-md-2 ali">
                                         CONCEPT
                                     </div>
                                     <div className="col-md-2 ali">
                                         DESIGN
                                     </div>
                                     <div className="col-md-2 ali">
                                         CODING
                                     </div>
                                     <div className="col-md-2 ali">
                                         TESTING
                                     </div>
                                     <div className="col-md-2 ali">
                                         LAUNCH
                                     </div>
                                 </div>
                              
                                <div className="row">
                                    <div className="col-md-5">
                                        <h4 data-aos="fade-down"  data-aos-duration="1000" className='mt-5'>Tools | Work with</h4>
                                    </div>
                                    <div id='image' className="col-lg-8 col-md-12 mt-4">
                                        <img data-aos="fade-right"  data-aos-duration="1000" src={process.env.PUBLIC_URL + "/vscode-logo.png"} alt="" />
                                        <img data-aos="fade-up"  data-aos-duration="1000" src={process.env.PUBLIC_URL + "/html-logo.png"} alt="" />
                                        <img data-aos="fade-up"  data-aos-duration="1000" src={process.env.PUBLIC_URL + "/css-logo.png"} alt="" />
                                        <img data-aos="fade-down"  data-aos-duration="1000" src={process.env.PUBLIC_URL + "/js-logo.png"} alt="" />
                                        <img data-aos="fade-up"  data-aos-duration="1000" src={process.env.PUBLIC_URL + "/bootstrap-logo.png"} alt="" />
                                        <img data-aos="fade-left"  data-aos-duration="1000" src={process.env.PUBLIC_URL + "/logo512.png"} alt="" />
                                    </div>
                               
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 data-aos="fade-right"  data-aos-duration="1000">Contact</h1>
                               
                                <p data-aos="fade-up"  data-aos-duration="1000" className='mt-4'>Got a Project in mind? Need to Collaaborate or Bounce Ideas Of ?</p>
                             <h2 data-aos="fade-right"  data-aos-duration="1000">HIT ME UP!</h2>
                         </div>
                         <div className="col-md-8">
                             <ul className='navbar-nav'>
                                 <li data-aos="fade-up"  data-aos-duration="1000" className='nav-item'><a href="" className='nav-link'>
                                     <img src={process.env.PUBLIC_URL + "/mail-logo.png"} alt="My-Pic" className='mr-3'  width="40px"/>
                                   <span className='ml-4'>basharatalidogar14@gmail.com</span> </a></li>
                                 <li data-aos="fade-up"  data-aos-duration="1000" className='nav-item'><a href="" className='nav-link'>
                                     <img src={process.env.PUBLIC_URL + "/whatsapp-logo.png"} alt="My-Pic" className='mr-3'  width="30px"/>
                                   <span className='ml-4'>+92 303 69 39 413</span> </a></li>
                                 <li data-aos="fade-up"  data-aos-duration="1000" className='nav-item'><a href="https://twitter.com/Bashara84911062?t=QfZXvQPthPRVGwAqyQftpg&s=09" className='nav-link'>
                                     <img src={process.env.PUBLIC_URL + "/twitter-logo.png"} alt="My-Pic" className='mr-3'  width="30px"/>
                                   <span className='ml-4'>@Bashara84911062</span> </a></li>
                                 <li data-aos="fade-up"  data-aos-duration="1000" className='nav-item'><a href="https://www.instagram.com/bdking1947/" className='nav-link'>
                                     <img src={process.env.PUBLIC_URL + "/insta-logo.png"} alt="My-Pic" className='mr-3'  width="30px"/>
                                   <span className='ml-4'>bdking1947</span> </a></li>
                                 <li data-aos="fade-up"  data-aos-duration="1000" className='nav-item'><a href="https://www.facebook.com/basharatdogar.basharatdogar.90" className='nav-link'>
                                     <img src={process.env.PUBLIC_URL + "/Facebook-logo.png"} alt="My-Pic" className='facebook'  width="50px"/>
                                   <span className='ml-4'>basharatalidogar</span> </a></li>
                             </ul>
                         </div>
                           </div>
                           <footer >Copyright &copy; basharatalidogar14@gmail.com All Right Reversed !</footer>
                     
                    </div>
                </section>
            </>
        )
    }
export default App;