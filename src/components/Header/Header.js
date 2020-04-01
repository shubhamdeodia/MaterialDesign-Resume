import React from 'react'
import { Toolbar, Typography } from '@material-ui/core'
import { AppBar } from '@material-ui/core'

function Header (props) {
    const { classes } = props
    return (
        <AppBar className={classes.appBar} >
            <Toolbar>
                <div className={classes.headerTitle} style={{ flex: 1 }}>
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
