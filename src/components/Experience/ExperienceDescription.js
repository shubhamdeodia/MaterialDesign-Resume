import React from 'react'
import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import List from '@material-ui/core/List'
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

function ExperienceDescription (props) {
    const { classes } = props

    return (
        <div className={classes.experienceDescription}>

            <Box
                className={classes.companyName}
                color='primary.main'
                bgcolor='background.paper'
                textAlign='left'
                fontSize={{ xs: '26px', sm: '30px', md: '32px', lg: '36px' }}>
                    Amdocs
            </Box>

            <Box
                className={classes.position}
                color='primary.main'
                fontWeight='bold'
                bgcolor='background.paper'
                textAlign='left'
                fontSize={18}>
                Senior FrontEnd Developer
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
