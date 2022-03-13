/*
 * @see https://www.npmjs.com/package/react-gravatar
 * @TODO alt tags 
*/
import Gravatar from 'react-gravatar'

// rating="pg" default="monsterid" className="CustomAvatar-image" 

function WPGravatar( {attributes} ) {
    return (
        <Gravatar 
            email="seth@flexperception.com" 
            size={150} 
            alt="User name's gravatar" />
    )
}

export default WPGravatar