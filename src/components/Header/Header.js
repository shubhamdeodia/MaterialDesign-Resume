import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Toolbar, Typography } from '@material-ui/core'
import { AppBar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    headerTitle: {
        float: 'right',
        flexGrow: 1
    },
    appBar: {
        margin: '0 auto',
        maxWidth: 1028,
        left: '50%',
        transform: 'translate(-50%, 0)'
    }

}))

function Header (props) {
    const classes = useStyles()
    return (
        <AppBar className={classes.appBar} >
            <Toolbar>
                <div className={classes.headerTitle}>
                    <Typography align='right' variant='h6'>
                        <b>Shubham Deodia</b>
                    </Typography>
                    <Typography align='right' variant='subtitle2'>
                        Software Engineer (Front End Expertise)
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
