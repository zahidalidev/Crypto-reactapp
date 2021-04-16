import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import colors from "../config/colors"
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function Appbar() {
    const classes = useStyles();
    const history = useHistory()

    return (
        <div className={classes.root}>
            <AppBar style={{ height: "4.5rem", backgroundColor: colors.white }} position="static">
                <Toolbar variant="dense">
                    <Typography style={{ color: colors.black, marginLeft: "3vw",marginTop:"1vw",fontSize:"1.2vw" }} variant="h6" color="inherit">
                        LOGO 
                    </Typography>
                    <Button onClick={() => history.push("/")} style={{ color: colors.black, marginLeft: "3vw",marginTop:"1vw",fontSize:"1.2vw" }} variant="h6" color="inherit">
                        Home
                    </Button >
                    <Button onClick={() => history.push("/tab1")} style={{ color: colors.black, marginLeft: "1.5vw",marginTop:"1vw",fontSize:"1.2vw",border:"1px solid #2a303c",borderRadius:"0.5vw"  }} color="inherit">
                        Tab1
                    </Button >
                    <Button onClick={() => history.push("/tab2")}  style={{ color: colors.black, marginLeft: "1.5vw",marginTop:"1vw",fontSize:"1.2vw",border:"1px solid #2a303c",borderRadius:"0.5vw"  }} color="inherit">
                        Tab2
                    </Button >
                    {/* <Typography style={{ color: colors.black, marginLeft: "50vw",marginTop:"1vw",fontSize:"1.5vw",cursor:"pointer" }} variant="h6" color="inherit">
                        Wallet : 
                    </Typography> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}
