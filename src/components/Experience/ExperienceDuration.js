import React from 'react'

import { Card, Box } from '@material-ui/core'

function ExperienceDuration (props) {
    const firstPosition = props.positions[0]
    const { classes } = props
    return (
        <Card className={classes.durationBox} raised >

            <Box color='white' textAlign='center' className={classes.durationYears} fontSize={10} >
                        Jan 2018 - Jan 2019
            </Box>
            <Box color='white' textAlign='center' fontSize={36} fontWeight='fontWeightBold'>
                        3
            </Box>
            <Box color='white' textAlign='center' fontSize={18} fontWeight='fontWeightBold'>
                        Months
            </Box>

        </Card>
    )
}

export default ExperienceDuration
