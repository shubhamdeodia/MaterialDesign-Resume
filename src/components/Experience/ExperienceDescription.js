/* eslint-disable react/prop-types */
import React from 'react'
import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import List from '@material-ui/core/List'
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Skeleton from '@material-ui/lab/Skeleton'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return {
        experienceDescription: {
            paddingLeft: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%'
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
    }
})

function ExperienceDescription (props) {
    const { position, isLoading } = props

    const classes = useStyles()

    const experienceDescriptionSkeleton = (
        <div className={classes.experienceDescription}>
            <Skeleton animation='wave' variant='text' height={51} />
            <Skeleton animation='wave' variant='text' height={17} />
            <Skeleton animation='wave' variant='text' height={25} />
            <Skeleton animation='wave' variant='text' height={66} />
        </div>

    )
    if (isLoading) {
        return experienceDescriptionSkeleton
    }

    return (
        <div className={classes.experienceDescription}>
            <Box
                className={classes.companyName}
                color='primary.main'
                bgcolor='background.paper'
                textAlign='left'
                fontSize={{ xs: '26px', sm: '30px', md: '32px', lg: '36px' }}>
                {position.organization}
            </Box>
            <Box
                className={classes.companyName}
                color='primary.main'
                bgcolor='background.paper'
                fontStyle='italic'
                textAlign='left'
                fontSize={12}>
                {position.location}
            </Box>
            <Box
                className={classes.position}
                color='primary.main'
                fontWeight='bold'
                bgcolor='background.paper'
                textAlign='left'
                fontSize={{ xs: '14px', sm: '16px', md: '18px', lg: '18px' }}>

                {position.title}
            </Box>
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <ListItemIcon className={classes.listIcon}>
                        <ArrowRightRoundedIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText
                        className={classes.listText}
                        primary={
                            <Typography variant='subtitle2' paragraph >
                                Designed and developed web-based components for a variety of applications
                            </Typography>
                        } />
                </ListItem>
            </List>
        </div>
    )
}

export default ExperienceDescription
