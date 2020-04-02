import React from 'react'
import { Toolbar, AppBar, Fab } from '@material-ui/core'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        height: 50,
        margin: '0 auto',
        maxWidth: 1028,
        left: '50%',
        transform: 'translate(-50%, 0)'
    },
    grow: {
        flexGrow: 1
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto'
    }
}))

function Footer () {
    const classes = useStyles()
    return (
        <AppBar position='fixed' color='primary' className={classes.appBar}>
            <Toolbar>
                <Fab color='secondary' aria-label='darkMode' className={classes.fabButton}>
                    <WbIncandescentIcon />
                </Fab>
                <div className={classes.grow} />
            </Toolbar>
        </AppBar>
    )
}

export default Footer
