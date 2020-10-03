import React from 'react'
import {Paper} from '@material-ui/core'

const Builder = ({children, classes}) => {
    return (<Paper>
        {children}
    </Paper>)    
}

export default Builder