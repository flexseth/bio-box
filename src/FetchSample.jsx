/* 
 * External dependencies
 */
import { useState } from '@wordpress/element'
import { useEffect } from '@wordpress/element'

/* 
 * WordPress dependencies 
 */
import apiFetch from '@wordpress/api-fetch';

function FetchSample ( {attributes, setAttribute} ) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();
    const [email, setEmail] = useState()

    function handleChangeUser(newUser) {
        setUser( {user: newUser} )      // TODO: DANGER: WILL ROBINSON
        setAttribute( {user: newUser} )
    }
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect( () => {
        
        apiFetch( { path: '/wp/v2/users/me' } )
        .then ( 
            ( user ) => {
                setUser(user)
                console.log(user)
                console.log("Display name: ", user.name)
                console.log("Bio: ", user.description)
                console.log("Email: ", user.user_email)
                setIsLoaded(true);
            }, 
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setError(error)
                setIsLoaded(true)
            }
        );
    }, [])

        useEffect( (users) => {
                apiFetch( { path: '/wp/v2/users?roles=author,editor,administrator' } )
                .then ( 
                    (users) => {
                        setIsLoaded(true);
                        setUsers(users)
                        console.log("Other users", users)
                    }, 
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setIsLoaded(true)
                        setError(error)
                    }
                );
        }, [])
    
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
      return <div>Loading...</div>;
    } 
    
    else {
      return (
            <select
                onChange={handleChangeUser}>
            {users.map(user => (
                <option 
                    key={user.id}>
                    User name: {user.name} 
                </option>
            ))}
            </select>
        );
    }
}

export default FetchSample