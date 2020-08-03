import React from 'react';
import logo from './logo.png';
import './AppNavbar.css';

export default class LandingPage extends React.Component{
    constructor(props) {
                   super(props)

               this.redirectToToDoPage = this.redirectToToDoPage.bind(this)

    };

    redirectToToDoPage(){
         this.props.history.push(`/todos`)
    }
    render(){
        return(
            <>
                  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div class="container">
                      <a class="navbar-brand" href="#"><img src={logo} alt="logo" class="logo-image" />Golden Real Estate</a>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                          <li class="nav-item active">
                            <a class="nav-link" href="#">Home
                              <span class="sr-only">(current)</span>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>




                  <header class="py-5 bg-image-full" style={{backgroundImage: "url(" + 'https://unsplash.it/1900/1080?image=1076' + ")"}}>

                  </header>

                  <section class="py-5">
                    <div class="container">
                      <h1>Section Heading</h1><br/>
                      <button class="btn btn-primary" onClick={()=>this.redirectToToDoPage()}>Track TODOs </button> <br/><br/>
                      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
                    </div>
                  </section>




                  <div class="py-5 bg-image-full" style={{backgroundImage: "url(" + 'https://unsplash.it/1900/1080?image=1081' + ")"}}>

                    <div style={{height:200}}></div>
                  </div>


                  <section class="py-5">
                    <div class="container">
                      <h1>Section Heading</h1>
                      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
                    </div>
                  </section>


                  <footer class="py-5 bg-dark">
                    <div class="container">
                      <p class="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
                    </div>

                  </footer>
            </>
        );
    }
}