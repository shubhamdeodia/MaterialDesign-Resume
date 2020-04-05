import React from 'react'
import Header from './Header/Header'
import Experience from './Experience/Experience'
import cvData from '../data/data.json'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import experienceBackgroundImage from '../images/Experience.png'
import skillsBackgroundImage from '../images/Skills.png'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import Skills from './Skills/Skills'
import ContactInfoAndDescription from './Contact/ContactInfo'
import Footer from './Footer/Footer'
import Education from './Education/Education'

const useStyles = makeStyles((theme) => {
    return {
        root: {
            maxWidth: 1028,
            margin: '0 auto'
        },
        gridContainer: {
            marginTop: 50,
            marginBottom: 50
        },
        grid: {
            display: 'flex',
            flex: 1
        },
        expPaper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            minHeight: 1028,
            overflow: 'auto',
            flex: 1,
            backgroundColor: theme.palette.background.paper,
            backgroundImage: `url(${experienceBackgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto auto',
            backgroundPosition: '-25% 25%',
            [theme.breakpoints.down('sm')]: {
                backgroundPosition: 'center left'
            }
        },
        skillPaper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            overflow: 'auto',
            minHeight: 1028,
            flex: 1,
            backgroundColor: theme.palette.background.default,
            backgroundImage: `url(${skillsBackgroundImage})`,
            backgroundSize: 'auto auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '360% 65%',
            [theme.breakpoints.down('sm')]: {
                backgroundPosition: 'center right'
            }
        },

        experienceBlock: {
            marginTop: '40px'
        },

        skillsBlock: {
            marginTop: '40px'
        }
    }
})

export const Resume = (props) => {
    const classes = useStyles()

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    return (

        <div className={classes.root}>
            <Container style={{ padding: '8px' }} >
                <Header classes={classes} profile={cvData.profile} />
                <Grid container spacing={1} className={classes.gridContainer}>
                    <Grid item xs={12} sm={12} md={8} lg={8} className={classes.grid}>
                        {/* Experience Block */}
                        <Paper className={classes.expPaper}>
                            <Container>
                                <div className={classes.experienceBlock}>
                                    <Experience isLoading={isLoading} positions={cvData.positions} />
                                </div>
                            </Container>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} className={classes.grid}>
                        {/* Skills Block */}
                        <Paper className={classes.skillPaper}>
                            <Container>
                                <div className={classes.skillsBlock}>
                                    <ContactInfoAndDescription isLoading={isLoading} profile={cvData.profile} />
                                    <Education isLoading={isLoading} education={cvData.education} />
                                    <Skills isLoading={isLoading} skills={cvData.skills} />
                                </div>
                            </Container>
                        </Paper>
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </div>

    )
}

export default Resume
