import React, { useState } from 'react'

const NavBar = () => {
    const [user, setuser] = useState(false);
    
    const googleSignIn = ()=>{
        setuser(true);
    };

    const signOut = () =>{
        setuser(false);
    }
  return (
    <nav className='nav-bar'>
        <h1>React Chat</h1>
        {user ? (
            <button onClick={signOut} className='sign-out' type='button'>Sign out</button>
        ) : (
            <button className='sign-in'>
                <img 
                onClick={googleSignIn}
                src={googleSignIn}
                alt='sign in with google'
                type='button'
                />
            </button>
        )}
        <div>

        </div>
    </nav>
    
  )
}

export default NavBar
