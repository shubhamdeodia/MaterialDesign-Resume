import React from 'react'
import experience from '../../Data/data.json'
import ExperienceDuration from './ExperienceDuration'
import ExperienceDescription from './ExperienceDescription'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    console.log(theme)
    return createStyles({
        experience: {
            display: 'flex',
            flexBasis: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center'

        },
        durationBox: {
            width: 109,
            height: 109,
            minWidth: 109,
            minHeight: 109,
            paddingTop: '10px',
            backgroundColor: theme.palette.primary.main
        },
        experienceDescription: {
            paddingLeft: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%'
        },

        durationYears: {
            whiteSpace: 'nowrap'
        },

        companyName: {
            whiteSpace: 'nowrap'
        },
        list: {
            padding: '0px'
        },
        listItem: {
            padding: '0px',
            display: 'flex',
            alignItems: 'flex-start'

        },
        listIcon: {
            marginTop: '5px',
            minWidth: '30px',
            padding: '0px 0px 0px 0px'
        }

    })
})

function Experience (props) {
    const classes = useStyles()

    return (
        <div className={classes.experience}>
            <ExperienceDuration positions={experience.positions.contents} classes={classes} />
            <ExperienceDescription classes={classes} />
        </div>

    )
}

export default Experience
