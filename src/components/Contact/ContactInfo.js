import React from 'react'
import { Box } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import myPic from '../../images/myPic.jpg'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => {
    return createStyles({
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
        }
    })
})

export default function ContactInfoAndDescription (props) {
    const { isLoading } = props

    const classes = useStyles()

    return (
        <div className={classes.contactInfo}>
            <Avatar className={classes.avatar} alt='Shubham Deodia' src={myPic} />
            <Box
                color={grey['A400']}
                letterSpacing={0}
                textAlign='left'
                fontSize={16}>
                {`I have experiences in a variety of fields,
                all of which synergistically improve my ability 
                to creatively solve problems.`}
            </Box>
        </div>

    )
}
