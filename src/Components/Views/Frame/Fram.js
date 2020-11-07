import React from 'react'
import Iframe from 'react-iframe'

const Fram = ({url}) => {
    console.log("texturl1",url);
    return (
        <Iframe url={url?url:"https://react-bootstrap.github.io/components/navbar/"}
        width="100%"
        height="550px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        loading="Loading..."
        />
    )
}

export default Fram
