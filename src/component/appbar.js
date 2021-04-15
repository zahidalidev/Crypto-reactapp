import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import colors from "../config/colors"

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

    return (
        <div className={classes.root}>
            <AppBar style={{ height: "3.5rem", backgroundColor: colors.white }} position="static">
                <Toolbar variant="dense">
                    <Typography style={{ color: colors.black, marginLeft: "3rem" }} variant="h6" color="inherit">
                        Logo
                    </Typography>
                    <Button style={{ color: colors.black, marginLeft: "1.5rem" }} color="inherit">
                        Home
                    </Button >
                    <Button style={{ color: colors.black, marginLeft: "1.5rem" }} color="inherit">
                        Tab1
                    </Button >
                    <Button style={{ color: colors.black, marginLeft: "1.5rem" }} color="inherit">
                        Tab2
                    </Button >
                </Toolbar>
            </AppBar>
        </div>
    );
}
