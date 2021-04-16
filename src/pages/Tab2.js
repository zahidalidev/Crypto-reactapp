import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import colors from '../config/colors';
import { Button} from '@material-ui/core';
                                                                                                            
const CssTextField = withStyles({
    root: { 
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: colors.white,
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);





function Tab2(props) {

    const [buyerCompnent, setBuyerCompnent] = useState(true)

    return (
        < >
        
        <div  style={{marginLeft:"73vw",color:colors.white}}>
            <p style={{marginTop:"1vw"}}>ETH Balance: 0.000000001   ⛽ 0.00000000001 (gwei)</p>
        </div>

        <div style={{marginLeft:"14.7vw",marginBottom:"1vw"}}>
            <p style={{ color: colors.white }} >
                Token Address: ahosashdgashkdgk56456
            </p>

            <CssTextField
                style={{ width: "31vw" }}
                size="small"
                variant="outlined"
                id="custom-css-outlined-input"
            />
        </div>


        <div className="container">

            <div className="row justify-content-md-center" style={{ marginTop: "3.9rem" }} >
                <div className="col-md-5" style={{ backgroundColor: colors.black, padding: "2rem",borderRadius:"1rem"}} >
                    {/* <div className="row justify-content-md-center " >
                        <p style={{ color: colors.white }} >
                            Token Address: ahosashdgashkdgk56456
                        </p>
                    </div>
                    <div className="row justify-content-md-center " >
                        <CssTextField
                            style={{ width: "20rem" }}
                            size="small"
                            variant="outlined"
                            id="custom-css-outlined-input"
                        />
                    </div>  In case you want token field along with the chart component you can uncomment this    */}
                     
                     
                    {/* chart component length and width will increase when you out module in respective div*/} 

                    <div className="row justify-content-md-center " >
                        <p style={{ color: colors.white,marginTop:"10vw",fontSize:"3vw" }} >Chart</p>
                    </div>

                </div>
                
                <div className="col-md-5" style={{ marginLeft: "7vw", backgroundColor: colors.black,borderRadius:"1rem" }} >

                    <div className="row justify-content-md-center " style={{ borderBottom: "1.5px solid grey" }} >
                        <div className="col-md-6 align-self-center" style={{ backgroundColor: buyerCompnent ? "#943cad" : null }} >
                            <div className="row justify-content-md-center " >
                                <p onClick={() => setBuyerCompnent(true)} style={{ cursor: "pointer", color: colors.white, fontSize: "1.6rem", marginTop: "0.45vw", marginBottom: "0.38vw" }} > Buy</p>
                            </div>
                        </div>

                        <div className="col-md-6" style={{ borderLeft: "1.5px solid grey", backgroundColor: buyerCompnent ? null : "#943cad" }} >
                            <div className="row justify-content-md-center " >
                                <p onClick={() => setBuyerCompnent(false)} style={{ cursor: "pointer", color: colors.white, fontSize: "1.6rem", marginTop: "0.45vw", marginBottom: "0.38vw" }} > Sell</p>
                            </div>
                        </div>

                    </div>

                    {buyerCompnent ?
                        <div className="row justify-content-md-center " >
                            <div className="col-md-12">
                                
                                
                                <div style={{ marginTop: "1.5rem" }} className="row justify-content-md-center " >
                                    
                                    <div className="col-md-3 d-flex justify-content-md-center " >
                                        <p style={{ color: "white",fontSize:"1.3rem" }} >Price</p>
                                    </div>
                                    
                                    <div className="col-md-6 d-flex justify-content-md-center  " >
                                        <CssTextField
                                            style={{ width: "10rem",marginRight:"0.5vw" }}
                                            size="small"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />
                                    </div>
                                
                                </div>
                                
                                
                                <div style={{ marginTop: "2rem" }} className="row justify-content-md-center" > 
                                    
                                    <div className="col-md-4 d-flex justify-content-md-center " >
                                        <p style={{ color: "white",fontSize:"1.2rem" }} >Stop Loss (%)</p>
                                    </div>
                                    
                                    <div className="col-md-6 d-flex justify-content-md-center  " >
                                        <Button style={{color:"white",border:"2px solid white",width:"10.5rem",paddingRight:"90px",marginRight:"4.1rem",fontWeight:"bold"}}>-</Button>
                                    </div>
                                
                                </div>
                                
                                
                                
                                <div style={{ marginTop: "2rem" }} className="row justify-content-md-center" > 
                                    
                                    <div className="col-md-4 d-flex justify-content-md-center " >
                                        <p style={{ color: "white",fontSize:"1.2rem" }} >Target (%)</p>
                                    </div>
                                    
                                    <div className="col-md-6 d-flex justify-content-md-center  " >
                                        <Button style={{color:"white",border:"2px solid white",width:"10.5rem",paddingRight:"90px",marginRight:"4.1rem",fontWeight:"bold"}}>+</Button>
                                    </div>
                                
                                </div>
                                
                                
                                <div style={{ marginTop: "2rem" }} className="row justify-content-md-center" > 
                                    
                                    <div className="col-md-4 d-flex justify-content-md-center " >
                                        <p style={{ color: "white",fontSize:"1.2rem" }} >Custom Gas</p>
                                    </div>
                                    
                                    <div className="col-md-6 d-flex justify-content-md-center  " >
                                    <CssTextField
                                            style={{ width: "10vw",marginRight:"3.6vw" }}
                                            size="small"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />
                                    </div>
                                
                                </div>
                                

                                <div style={{ marginTop: "2rem" }} className="row justify-content-md-center" > 
                                    
                                    <div className="col-md-4 d-flex justify-content-md-center " >
                                        <p style={{ color: "white",fontSize:"1.2rem" }} >Slippage (%)</p>
                                    </div>
                                    
                                    <div className="col-md-6 d-flex justify-content-md-center  " >
                                    <CssTextField
                                            style={{ width: "10vw",marginRight:"3.6vw" }}
                                            size="small"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />
                                    </div>
                                
                                </div>

                                <div className="row justify-content-md-center">
                                
                                 <Button style={{color:"white",border:"2px solid white",borderRadius:"1.5vw",height:"2.8rem",marginTop:"2vw",marginLeft:"1.5vw",width:"8.5vw",fontWeight:"bold",backgroundColor: "#a4508b",backgroundImage: "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)"}}>Buy
                                 </Button>
                                
                                </div>
                             
                            
                            </div>
                        </div>
                        :
                        <div className="row justify-content-md-center " >
                        <div className="col-md-12">
                            
                            
                            <div style={{ marginTop: "1.5rem" }} className="row justify-content-md-center " >
                                
                                <div className="col-md-3 d-flex justify-content-md-center " >
                                    <p style={{ color: "white",fontSize:"1.3rem" }} >Price</p>
                                </div>
                                
                                <div className="col-md-6 d-flex justify-content-md-center  " >
                                <CssTextField
                                    style={{ width: "10rem",marginRight:"0.5vw" }}
                                    size="small"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                />
                                </div>
                            
                            </div>
                            
                            
                            <div style={{ marginTop: "2rem" }} className="row justify-content-md-center" > 
                                
                                <div className="col-md-4 d-flex justify-content-md-center " >
                                    <p style={{ color: "white",fontSize:"1.2rem" }} >Stop Loss (%)</p>
                                </div>
                                
                                <div className="col-md-6 d-flex justify-content-md-center  " >
                                <Button style={{color:"white",border:"2px solid white",width:"10.5rem",paddingRight:"90px",marginRight:"4.1rem",fontWeight:"bold"}}>-</Button>
                                </div>
                            
                            </div>
                            
                            
                            
                            <div style={{ marginTop: "2rem" }} className="row justify-content-md-center" > 
                                
                                <div className="col-md-4 d-flex justify-content-md-center " >
                                    <p style={{ color: "white",fontSize:"1.2rem" }} >Target (%)</p>
                                </div>
                                
                                <div className="col-md-6 d-flex justify-content-md-center  " >
                                <Button style={{color:"white",border:"2px solid white",width:"10.5rem",paddingRight:"90px",marginRight:"4.1rem",fontWeight:"bold"}}>+</Button>
                                </div>
                            
                            </div>
                            
                            
                            <div style={{ marginTop: "2rem" }} className="row justify-content-md-center" > 
                                
                                <div className="col-md-4 d-flex justify-content-md-center " >
                                    <p style={{ color: "white",fontSize:"1.2rem" }} >Custom Gas</p>
                                </div>
                                
                                <div className="col-md-6 d-flex justify-content-md-center  " >
                                <CssTextField    
                                    style={{ width: "10vw",marginRight:"3.6vw" }}
                                    size="small"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                />
                                </div>
                            
                            </div>
                            

                            <div style={{ marginTop: "2rem" }} className="row justify-content-md-center" > 
                                
                                <div className="col-md-4 d-flex justify-content-md-center " >
                                    <p style={{ color: "white",fontSize:"1.2rem" }} >Slippage (%)</p>
                                </div>
                                
                                <div className="col-md-6 d-flex justify-content-md-center  " >
                                <CssTextField
                                    style={{ width: "10vw",marginRight:"3.6vw" }}
                                    size="small"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                />
                                </div>
                            
                            </div>

                            <div className="row justify-content-md-center">
                            
                             <Button style={{color:"white",border:"2px solid white",borderRadius:"1.5vw",height:"2.8rem",marginTop:"2vw",marginLeft:"1.5vw",width:"8.5vw",fontWeight:"bold",backgroundColor: "#a4508b",backgroundImage: "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)"}}>Sell
                             </Button>
                            
                            </div>
                         
                        
                        </div>


                        


                    </div>
                    }
                </div>

            </div>

             <div>
                
                <p style={{marginTop:"7rem",color:colors.white,marginLeft:"2.4rem",fontSize:"1.4rem"}}>Active Orders</p>
                
                <CssTextField
                style={{ width: "68vw",marginTop:"0.5rem",marginLeft:"2.7rem" }}
                size="small"
                variant="outlined"
                id="custom-css-outlined-input"
                ></CssTextField>
                
                <CssTextField
                style={{ width: "68vw",marginLeft:"2.7rem" }}
                size="small"
                variant="outlined"
                id="custom-css-outlined-input"
                ></CssTextField>
             
             </div>
        </div>
        </>
    );
}



export default Tab2;