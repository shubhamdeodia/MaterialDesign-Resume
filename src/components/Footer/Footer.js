import React, { useContext } from 'react'
import { ThemeDispatchContext } from '../../context/ThemeContext'
import { Toolbar, AppBar, Fab } from '@material-ui/core'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    bottomAppBar: {
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
    const dispatch = useContext(ThemeDispatchContext)
    return (
        <AppBar position='fixed' color='primary' className={classes.bottomAppBar}>
            <Toolbar>
                <Fab
                    color='secondary'
                    aria-label='darkMode'
                    className={classes.fabButton}
                    onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
                    <WbIncandescentIcon />
                </Fab>
                <div className={classes.grow} />
            </Toolbar>
        </AppBar>
    )
}

export default Footer
