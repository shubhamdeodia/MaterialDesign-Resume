import React, { useState } from 'react'
import isMobileHook from '../../customHooks/isMobileHook'
import { Tooltip } from '@material-ui/core'
import { Box } from '@material-ui/core'

import { Card } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return {
        durationBox: {
            width: 109,
            height: 109,
            minHeight: 109,
            minWidth: 109,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.primary.main,
            [theme.breakpoints.down('sm')]: {
                width: 90,
                height: 90,
                minHeight: 90,
                minWidth: 90
            }
        }
    }
})

function ExperienceDuration (props) {
    const { position, isLoading } = props

    const classes = useStyles()

    const experienceDurationSkeleton = (
        <Skeleton animation='wave' variant='rect' height={109} width={109} />
    )

    const [zDepth, setzDepth] = useState(0)
    const [tooltipIsOpen, setTooltipIsOpen] = useState(false)
    const isMobile = isMobileHook()

    const onMouseOver = () => setzDepth(8)
    const onMouseOut = () => setzDepth(4)

    const onMouseOverTooltip = () => setTooltipIsOpen(true)
    const onMouseOutTooltip = () => setTooltipIsOpen(false)

    if (isLoading) {
        return experienceDurationSkeleton
    }
    console.log(isMobile)
    return (

        <Tooltip

            arrow

            title='2019 Jan - 2020 Jan'
            placement='right'
            aria-label='2019 Jan - 2020 Jan'>
            <Card className={classes.durationBox}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                elevation={zDepth}>
                <Box color='white' textAlign='center' fontSize={{ xs: '26px', sm: '30px', md: '32px', lg: '36px' }} fontWeight='fontWeightBold'>
                        3
                </Box>
                <Box color='white' textAlign='center' fontSize={{ xs: '14px', sm: '16px', md: '18px', lg: '18px' }} fontWeight='fontWeightBold'>
                        Months
                </Box>
            </Card>
        </Tooltip>
    )
}

export default ExperienceDuration
