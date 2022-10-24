import React from "react";

function ShowMessage(props){
    const {status, message} = props
    console.log(status)
    const classes = ['alert', status]
    return(
        <div className={classes.join(' ')} role="alert">
            {message}
        </div>
    )
}

export default ShowMessage;