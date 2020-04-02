import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return createStyles({
        skillsSection: {
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }
    })
})

function Skills (props) {
    const { position, isLoading } = props
    const classes = useStyles()

    return (
        <div className={classes.skillsSection} >
            <h1>Hey</h1>
        </div>
    )
}

export default Skills
