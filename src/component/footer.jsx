import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
                <footer className = "page-footer font-weight-lighter" style={{backgroundColor: "#1c2331", color: "white", fontWeight: "350"}}>

                    <div style = {{
backgroundColor: "#a4508b",
backgroundImage: "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)"}}>
                        <div className = "container">
                            <div className = "row py-4 d-flex align-items-center">
                                <div className = "col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                    <h6 className = "mb-0" style={{fontWeight: "350"}} >Get connected with us on social networks!</h6>
                                </div>
                                
                                <div className = "col-md-6 col-lg-7 text-center text-md-right">
                                    <a className = "fb-ic">
                                        <i className = "text-white mr-4">Owner name here</i>
                                    </a>
                                    <a target="_blank"  className = "fb-ic">
                                        <i className = "fa fa-facebook-f text-white mr-4"> </i>
                                    </a>

                                    <a target="_blank"  className = "gplus-ic">
                                        <i className = "fa fa-github text-white mr-4"> </i>
                                    </a>
                                
                                    <a target="_blank"  className = "li-ic">
                                        <i className = "fa fa-linkedin text-white mr-4"> </i>
                                    </a>

                                    <a className = "fb-ic">
                                        
                                    </a>
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                
                    <div className = "container text-center text-md-left mt-5">
                        <div className = "row mt-3">
                            <div className = "col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className = "text-uppercase font-weight-bold">Lorem Ipsum Text</h6>
                                <hr style={{backgroundColor: "#711c88", width: "60px"}} className = "accent-2 col-md-4 mt-0 d-inline-block mx-auto" />
                                <p style={{fontSize: "14.4px", fontFamily: "Lato !important"}}>Lorem Ipsum text here you can write anything if you want!
                            
                                </p>
                            </div>
                            
                            <div className = "col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className = "text-uppercase font-weight-bold">Products</h6>
                                <hr style={{backgroundColor: "#711c88", width: "60px"}} className = "accent-2 col-md-4 mt-0 d-inline-block mx-auto" />
                                <p>
                                <a className="text-white" target="_blank" >Lorem Ipsum</a>
                                </p>
                                <p>
                                <a className="text-white" target="_blank" >Lorem Ipsum</a>
                                </p>
                                <p>
                                <a className="text-white" target="_blank" >Lorem Ipsum</a>
                                </p>
                                <p>
                                <a className="text-white" target="_blank" >Lorem Ipsum</a>
                                </p>
                                
                            </div>
                            <div className = "col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className = "text-uppercase font-weight-bold">Useful links</h6>
                                <hr style={{backgroundColor: "#711c88", width: "60px"}} className = "accent-2 col-md-4 mt-0 d-inline-block mx-auto" />
                                <p>
                                <a className="text-white" target="_blank" >Lorem Ipsum</a>
                                </p>
                                <p>
                                <a className="text-white" target="_blank" >Lorem Ipsum</a>
                                </p>
                                <p>
                                <a className="text-white" target="_blank" >Lorem Ipsum</a>
                                </p>
                                <p>
                                <a className="text-white" target="_blank" >Lorem Ipsum</a>
                                </p>
                            </div>
                            <div className = "col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className = "text-uppercase font-weight-bold">Contact</h6>
                                <hr style={{backgroundColor: "#711c88", width: "60px"}} className = "accent-2 col-md-4 mt-0 d-inline-block mx-auto" />
                                <p>
                                <i className = "fa fa-envelope mr-3"></i> emial@gmail.com</p>
                                <p>
                                <i className = "fa fa-phone mr-3"></i> + 92 1234455656</p>
                                
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundColor: "#161c27"}} className = "footer-copyright text-center py-3">© 2021 Copyright:
                        <a style={{color: "#0f9ac4"}} target="_blank" > Crypto App</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;