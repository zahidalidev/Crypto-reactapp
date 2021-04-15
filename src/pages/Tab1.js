import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import colors from '../config/colors';

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

    return (
        <div className="container">
            <div className="row justify-content-md-center" style={{ marginTop: "5rem" }} >
                <div className="col-md-5" style={{ backgroundColor: colors.black, padding: "2rem" }} >
                    <div className="row justify-content-md-center " >
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
                    </div>
                </div>
                <div className="col-md-5" style={{ marginLeft: "5rem", backgroundColor: colors.black }} >

                    <div className="row justify-content-md-center " style={{ borderBottom: "1.5px solid grey" }} >
                        <div className="col-md-6 align-self-center" style={{ backgroundColor: buyerCompnent ? colors.primary : null }} >
                            <div className="row justify-content-md-center " >
                                <p onClick={() => setBuyerCompnent(true)} style={{ cursor: "pointer", color: colors.white, fontSize: "1.6rem", marginTop: "0.4rem", marginBottom: "0.4rem" }} > Buy</p>
                            </div>
                        </div>

                        <div className="col-md-6" style={{ borderLeft: "1.5px solid grey", backgroundColor: buyerCompnent ? null : colors.primary }} >
                            <div className="row justify-content-md-center " >
                                <p onClick={() => setBuyerCompnent(false)} style={{ cursor: "pointer", color: colors.white, fontSize: "1.6rem", marginTop: "0.4rem", marginBottom: "0.4rem" }} > Sell</p>
                            </div>
                        </div>

                    </div>

                    {buyerCompnent ?
                        <div className="row justify-content-md-center " >
                            <div className="col-md-12">
                                <div style={{ marginTop: "1rem" }} className="row justify-content-md-center " >
                                    <div className="col-md-3 d-flex justify-content-md-center " >
                                        <p style={{ color: "white" }} >Price</p>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-md-center  " >
                                        <CssTextField
                                            style={{ width: "10rem" }}
                                            size="small"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />
                                    </div>
                                </div>
                                <div className="row" ></div>
                                <div className="row" ></div>
                                <div className="row" ></div>
                            </div>
                        </div>
                        :
                        <div className="row justify-content-md-center " >
                            <p style={{ color: "white" }} >Sell component</p>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
}



export default Tab1;