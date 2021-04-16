import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import colors from "../config/colors"
import { useHistory } from 'react-router';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function Appbar() {
    const [home, setHome] = useState(true)
    const [tab1, setTab1] = useState(false)
    const [tab2, setTab2] = useState(false)

    const classes = useStyles();
    const history = useHistory()

    return (
        <div className={classes.root}>
            <AppBar style={{ height: "4rem", backgroundColor: colors.white }} position="static">
                <Toolbar variant="dense">
                    <Typography style={{ color: colors.black, marginLeft: "3vw", fontSize: "1rem" }} variant="h6" color="inherit">
                        LOGO
                    </Typography>
                    <Button onClick={() => {
                        history.push("/")
                        setHome(true)
                        setTab1(false)
                        setTab2(false)
                    }} style={{ backgroundColor: home ? "#a4508b" : null, backgroundImage: home ? "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)" : null, height: "4rem", color: home ? colors.white : colors.black, marginLeft: "3vw", fontSize: "1rem" }} variant="h6" color="inherit">
                        Home
                    </Button >
                    <Button onClick={() => {
                        history.push("/tab1")
                        setHome(false)
                        setTab1(true)
                        setTab2(false)
                    }} style={{ backgroundColor: tab1 ? "#a4508b" : null, backgroundImage: tab1 ? "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)" : null, height: "4rem", color: tab1 ? colors.white : colors.black, marginLeft: "1.5vw", fontSize: "1rem" }} color="inherit">
                        Tab1
                    </Button >
                    <Button onClick={() => {
                        history.push("/tab2")
                        setHome(false)
                        setTab1(false)
                        setTab2(true)
                    }} style={{ backgroundColor: tab2 ? "#a4508b" : null, backgroundImage: tab2 ? "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)" : null, height: "4rem", color: tab2 ? colors.white : colors.black, marginLeft: "1.5vw", fontSize: "1rem" }} color="inherit">
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
