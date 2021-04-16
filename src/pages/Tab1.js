import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import colors from '../config/colors';
import { Button } from '@material-ui/core';


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


function Tab1(props) {

    const [buyerCompnent, setBuyerCompnent] = useState(true)
    const [value, setValue] = React.useState('market');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div style={{ backgroundColor: colors.grey }} >
            <div className="container" >
                <div className="row justify-content-end " style={{ color: colors.white }}>
                    <p style={{ marginTop: "1vw", whiteSpace: "nowrap" }}>ETH Balance: 0.000000001
                    <span><LocalGasStationIcon style={{ width: "2vw", height: "2vw" }} /></span>
                    0.00000000001 (gwei)
                </p>
                </div>
            </div>
            <div className="container" >
                <div className="row justify-content-start" style={{ marginBottom: "1vw" }}>
                    <div className="col-md-5" style={{ marginLeft: "3vw" }} >
                        <p style={{ color: colors.white }} >
                            Token Address: ahosashdgashkdgk56456
                        </p>
                        <CssTextField
                            style={{ width: "31vw" }}
                            size="small"
                            variant="outlined"
                            id="custom-css-outlined-input" />
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row justify-content-md-center" style={{ marginTop: "3.9rem" }} >
                    <div className="col-md-5" style={{ backgroundColor: colors.black, padding: "2rem", borderRadius: "3rem" }} >
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
                            <p style={{ color: colors.white, marginTop: "10vw", fontSize: "3vw" }} >Chart</p>
                        </div>

                    </div>

                    <div className="col-md-5" style={{ marginLeft: "7vw", backgroundColor: colors.black, borderRadius: "3rem" }} >

                        <div className="row justify-content-md-center " style={{ borderBottom: "1.5px solid grey" }} >

                            <div className="col-md-6 align-self-center" style={{ backgroundColor: buyerCompnent ? "#943cad" : null, borderTopLeftRadius: "3rem" }} >
                                <div className="row justify-content-md-center " >
                                    <p onClick={() => setBuyerCompnent(true)} style={{ cursor: "pointer", color: colors.white, fontSize: "1.6rem", marginTop: "0.45vw", marginBottom: "0.38vw" }} > Buy</p>
                                </div>
                            </div>

                            <div className="col-md-6" style={{ borderLeft: "1.5px solid grey", backgroundColor: buyerCompnent ? null : "#943cad", borderTopRightRadius: "3rem" }} >
                                <div className="row justify-content-md-center " >
                                    <p onClick={() => setBuyerCompnent(false)} style={{ cursor: "pointer", color: colors.white, fontSize: "1.6rem", marginTop: "0.45vw", marginBottom: "0.38vw" }} > Sell</p>
                                </div>
                            </div>

                        </div>

                        {buyerCompnent ?

                            <div className="row justify-content-md-center " >
                                <div className="col-md-12">

                                    <div style={{ marginTop: "1.5rem" }} className="row justify-content-md-center " >
                                        <div className="col-md-4 d-flex justify-content-md-start " >
                                            <p style={{ color: "white", fontSize: "1.3rem" }} >Price</p>
                                        </div>

                                        <div className="col-md-6 d-flex justify-content-md-center  " >
                                            <CssTextField
                                                disabled={value === "market" ? true : false}
                                                style={{ width: "12vw", marginRight: "4vw" }}
                                                size="small"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                            />
                                        </div>
                                    </div>

                                    <div style={{ marginTop: "1rem" }} className="row justify-content-md-center" >
                                        <div className="col-md-10 d-flex justify-content-md-start " >
                                            <RadioGroup value={value} onChange={handleChange}>
                                                <div className="row" style={{ marginLeft: "2vw" }} >
                                                    <FormControlLabel style={{ color: colors.white }} value="market" control={<Radio />} label="Market" />
                                                    <FormControlLabel style={{ color: colors.white, marginLeft: "1vw" }} value="limit" control={<Radio />} label="Limit" />
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: "1rem" }} className="row justify-content-md-center" >
                                        <div className="col-md-4 d-flex justify-content-md-start " >
                                            <p style={{ color: "white", fontSize: "1.2rem" }} >Stop Loss (%)</p>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-md-center  " >
                                            <Button style={{ color: "white", border: "1px solid white", width: "20vw", paddingRight: "90px", marginRight: "4vw", fontWeight: "bold" }}>-</Button>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: "1rem" }} className="row justify-content-md-center" >
                                        <div className="col-md-4 d-flex justify-content-md-start " >
                                            <p style={{ color: "white", fontSize: "1.2rem" }} >Target (%)</p>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-md-center  " >
                                            <Button style={{ color: "white", border: "1px solid white", width: "20vw", paddingRight: "90px", marginRight: "4vw", fontWeight: "bold" }}>+</Button>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: "1rem" }} className="row justify-content-md-center" >
                                        <div className="col-md-4 d-flex justify-content-md-start " >
                                            <p style={{ color: "white", fontSize: "1.2rem" }} >Custom Gas</p>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-md-center  " >
                                            <CssTextField
                                                style={{ width: "12vw", marginRight: "3.6vw" }}
                                                size="small"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                            />
                                        </div>
                                    </div>

                                    <div style={{ marginTop: "1rem" }} className="row justify-content-md-center" >
                                        <div className="col-md-4 d-flex justify-content-md-start " >
                                            <p style={{ color: "white", fontSize: "1.2rem" }} >Slippage (%)</p>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-md-center  " >
                                            <CssTextField
                                                style={{ width: "12vw", marginRight: "3.6vw" }}
                                                size="small"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="row justify-content-md-center">
                                        <Button style={{ color: "white", border: "2px solid white", borderRadius: "1.5vw", height: "2.8rem", marginTop: "2vw", marginBottom: "2vw", marginLeft: "1.5vw", width: "8.5vw", fontWeight: "bold", backgroundColor: "#a4508b", backgroundImage: "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)" }}>
                                            Buy
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="row justify-content-md-center " >
                                <div className="col-md-12">

                                    <div style={{ marginTop: "1.5rem" }} className="row justify-content-md-center " >
                                        <div className="col-md-4 d-flex justify-content-md-start " >
                                            <p style={{ color: "white", fontSize: "1.3rem" }} >Price</p>
                                        </div>

                                        <div className="col-md-6 d-flex justify-content-md-center  " >
                                            <CssTextField
                                                disabled={value === "market" ? true : false}
                                                style={{ width: "12vw", marginRight: "4vw" }}
                                                size="small"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                            />
                                        </div>
                                    </div>

                                    <div style={{ marginTop: "1rem" }} className="row justify-content-md-center" >
                                        <div className="col-md-10 d-flex justify-content-md-start " >
                                            <RadioGroup value={value} onChange={handleChange}>
                                                <div className="row" style={{ marginLeft: "2vw" }} >
                                                    <FormControlLabel style={{ color: colors.white }} value="market" control={<Radio />} label="Market" />
                                                    <FormControlLabel style={{ color: colors.white, marginLeft: "1vw" }} value="limit" control={<Radio />} label="Limit" />
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: "1rem" }} className="row justify-content-md-center" >
                                        <div className="col-md-4 d-flex justify-content-md-start " >
                                            <p style={{ color: "white", fontSize: "1.2rem" }} >Stop Loss (%)</p>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-md-center  " >
                                            <Button style={{ color: "white", border: "1px solid white", width: "20vw", paddingRight: "90px", marginRight: "4vw", fontWeight: "bold" }}>-</Button>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: "1rem" }} className="row justify-content-md-center" >
                                        <div className="col-md-4 d-flex justify-content-md-start " >
                                            <p style={{ color: "white", fontSize: "1.2rem" }} >Target (%)</p>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-md-center  " >
                                            <Button style={{ color: "white", border: "1px solid white", width: "20vw", paddingRight: "90px", marginRight: "4vw", fontWeight: "bold" }}>+</Button>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: "1rem" }} className="row justify-content-md-center" >
                                        <div className="col-md-4 d-flex justify-content-md-start " >
                                            <p style={{ color: "white", fontSize: "1.2rem" }} >Custom Gas</p>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-md-center  " >
                                            <CssTextField
                                                style={{ width: "12vw", marginRight: "3.6vw" }}
                                                size="small"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                            />
                                        </div>
                                    </div>

                                    <div style={{ marginTop: "1rem" }} className="row justify-content-md-center" >
                                        <div className="col-md-4 d-flex justify-content-md-start " >
                                            <p style={{ color: "white", fontSize: "1.2rem" }} >Slippage (%)</p>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-md-center  " >
                                            <CssTextField
                                                style={{ width: "12vw", marginRight: "3.6vw" }}
                                                size="small"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="row justify-content-md-center">
                                        <Button style={{ color: "white", border: "2px solid white", borderRadius: "1.5vw", height: "2.8rem", marginTop: "2vw", marginBottom: "2vw", marginLeft: "1.5vw", width: "8.5vw", fontWeight: "bold", backgroundColor: "#a4508b", backgroundImage: "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)" }}>
                                            Sell
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                </div>

                <div className="row"  >
                    <div className="col-md-8" style={{ marginBottom: "5vw" }} >
                        <p style={{ marginTop: "7rem", color: colors.white, marginLeft: "2.4rem", fontSize: "1.4rem" }}>Active Orders</p>

                        <div className="row" style={{ border: "1px solid white", padding: "1.5vw", marginLeft: "2.4rem" }} ></div>
                        <div className="row" style={{ border: "1px solid white", padding: "1.5vw", marginLeft: "2.4rem" }} ></div>
                    </div>
                </div>
            </div>

        </div>
    );
}



export default Tab1;