import React, { useState, useEffect } from 'react'
import { Box, Avatar } from '@material-ui/core'
import avatar from '../../images/avatar.jpg'
import { Phone, Mail } from '@material-ui/icons'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return {
        contactInfo: {
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        avatar: {
            width: 250,
            height: 250,
            marginBottom: 17
        },
        contacts: {
            width: 250,
            marginTop: 20,
            textAlign: 'left'
        },
        description: {
            width: 250,
            marginTop: 10,
            height: 120
        },
        phone: {
            align: 'left',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            marginTop: 10
        },
        mail: {
            align: 'left',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            marginTop: 10
        },
        link: {
            align: 'left',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            marginTop: 10

        },

        buttonBackground: {
            backgroundColor: theme.palette.secondary.main
        },

        typingEffect: {
            borderRight: `2px solid ${theme.palette.common.neutral}`
        }
    }
})

function ContactInfoAndDescription (props) {
    const { isLoading, profile } = props

    const classes = useStyles()

    const [dataText, _] = useState([profile.description])

    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [speed, setSpeed] = useState(150)
    const [loop, setLoop] = useState(0)

    const index = loop % dataText.length
    const fullText = dataText[index]

    const handleTyping = () => {
        setText(
            isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
        )

        setSpeed(isDeleting ? 30 : 100)

        if (!isDeleting && text === fullText) {
            // stop for o.5 seconds and start deleting
            setTimeout(() => setIsDeleting(true), 500)
        }
        else if (isDeleting && text === '') {
            // reach the end, stop deleting and increment loop
            setIsDeleting(false)
            setLoop(loop + 1)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleTyping()
        }, speed)
        return () => clearTimeout(timer)
    })

    return (
        <div className={classes.contactInfo}>
            <Avatar className={classes.avatar} alt={profile.full_name} src={avatar} />
            <div className={classes.description}>
                <Box
                    letterSpacing={0}
                    textAlign='left'
                    fontSize={16}>
                    <span className={classes.typingEffect}>{text}</span>
                </Box>
            </div>
            <div className={classes.contacts}>
                <div className={classes.phone}>
                    <Button
                        variant='contained'
                        onClick={() => window.open(`tel:${profile.phone}`)}
                        color='secondary'>
                        <Phone />
                    </Button>
                    <Box
                        fontWeight='bold'
                        letterSpacing={0}
                        style={{ marginLeft: 15 }}
                        fontSize={14}>
                        {profile.phone}
                    </Box>
                </div>
                <div className={classes.mail}>
                    <Button
                        onClick={() => window.open(`mailto:${profile.email}`)}
                        variant='contained'
                        color='secondary'>
                        <Mail />
                    </Button>
                    <Box
                        fontWeight='bold'
                        letterSpacing={0}
                        style={{ marginLeft: 15 }}
                        fontSize={14}>
                        {profile.email}
                    </Box>
                </div>
                {profile.linkedIn
                    ? <div className={classes.link}>
                        <Button
                            variant='contained'
                            onClick={() => window.open(`${profile.linkedIn}`, '_blank')}
                            color='secondary'>
                            <LinkedInIcon />
                        </Button>
                        <Box
                            fontWeight='bold'
                            letterSpacing={0}
                            style={{ marginLeft: 15 }}
                            fontSize={14}>
                            {profile.full_name}
                        </Box>
                    </div>
                    : null
                }
                {profile.gitHub
                    ? <div className={classes.link}>
                        <Button
                            variant='contained'
                            onClick={() => window.open(`${profile.gitHub}`, '_blank')}
                            color='secondary'>
                            <GitHubIcon />
                        </Button>
                        <Box
                            fontWeight='bold'
                            letterSpacing={0}
                            style={{ marginLeft: 15 }}
                            fontSize={14}>
                            {profile.full_name}
                        </Box>
                    </div>
                    : null
                }
            </div>
        </div>

    )
}

export default ContactInfoAndDescription
