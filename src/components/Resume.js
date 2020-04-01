import React from 'react'
import Header from './Header/Header'
import Experience from './Experience/Experience'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import experienceBackgroundImage from '../images/Experience.png'
import skillsBackgroundImage from '../images/Skills.png'

import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        maxWidth: 1028,
        margin: '0 auto'
    },
    grid: {
        marginTop: 50
    },
    headerTitle: {
        float: 'right',
        flexGrow: 1
    },
    appBar: {
        margin: '0 auto',
        maxWidth: 1028,
        left: '50%',
        transform: 'translate(-50%, 0)'
    },
    expPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 1200,
        backgroundImage: `url(${experienceBackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-25% 25%',
        [theme.breakpoints.down('md')]: {
            backgroundPosition: 'center left'
        }
    },
    skillPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 1200,
        backgroundColor: theme.palette.primary.light,
        backgroundImage: `url(${skillsBackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '350% 50%',
        [theme.breakpoints.down('md')]: {
            backgroundPosition: 'center right'
        }
    },
    divider: {
        marginTop: '64px'
    },
    experienceBlock: {
        marginTop: '40px',
        '&:first-child': {
            marginTop: '64px'
        }
    }
}))

export const Resume = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container style={{ padding: '8px' }} >
                <Header classes={classes} />
                <Grid container spacing={1} className={classes.grid}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        {/* Experience Block */}
                        <Paper className={classes.expPaper}>
                            <Container>
                                <div className={classes.experienceBlock}>
                                    <Experience />
                                </div>
                            </Container>
                        </Paper> </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        {/* Skills Block */}
                        <Paper className={classes.skillPaper}>xs=12 sm=6 md=3</Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>)
}

export default Resume
