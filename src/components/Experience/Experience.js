import React from 'react'
import ExperienceDuration from './ExperienceDuration'
import ExperienceDescription from './ExperienceDescription'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return {
        experienceSection: {
            display: 'flex',
            flexBasis: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            background: 'transparent'
        }
    }
})

function Experience (props) {
    const { position, isLoading } = props
    const classes = useStyles()

    return (
        <div
            className={classes.experienceSection}>
            <ExperienceDuration isLoading={isLoading} position={position} classes={classes} />
            <ExperienceDescription isLoading={isLoading} position={position} classes={classes} />
        </div>
    )
}

export default Experience
