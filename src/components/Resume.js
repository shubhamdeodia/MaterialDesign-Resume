import React from 'react'
import Header from './Header/Header'
import Experience from './Experience/Experience'
import cvData from '../Data/data.json'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import experienceBackgroundImage from '../images/Experience.png'
import skillsBackgroundImage from '../images/Skills.png'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import Skills from './Skills/Skills'
import ContactInfoAndDescription from './Contact/ContactInfo'
import Footer from './Footer/Footer'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        maxWidth: 1028,
        margin: '0 auto'
    },
    grid: {
        marginTop: 50
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
        marginTop: '40px'
    },

    skillsBlock: {
        marginTop: '40px'
    }
}))

export const Resume = (props) => {
    const classes = useStyles()

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    const experiences = cvData.positions.contents.map((position) => {
        return (
            <div key={position.id} className={classes.experienceBlock} >
                <Experience isLoading={isLoading} position={position} />
            </div>
        )
    })

    return (
        <div className={classes.root}>
            <Container style={{ padding: '8px' }} >
                <Header classes={classes} />
                <Grid container spacing={1} className={classes.grid}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        {/* Experience Block */}
                        <Paper className={classes.expPaper}>
                            <Container>
                                {experiences}
                            </Container>
                        </Paper> </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        {/* Skills Block */}
                        <Paper className={classes.skillPaper}>
                            <Container>
                                <div className={classes.skillsBlock}>
                                    <ContactInfoAndDescription />
                                    <Skills />
                                </div>
                            </Container>
                        </Paper>
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </div>)
}

export default Resume
