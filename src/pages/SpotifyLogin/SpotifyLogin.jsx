import React from 'react'
import './SpotifyLogin.css'

function SpotifyLogin() {
    return (
        <>
            <div className="spotify-login">
                <h1>One more step!</h1>
                <a href="http://localhost:3001/loginSpotify">Login to Spotify</a>
                <p>We appreciate your patience, to compensate, here's an adorable Beet illustraion...</p>
                <img className="beets-pic" src="https://i.imgur.com/JAaivc8.png" alt=""></img>
                <p className="beets-text">Designed by Stavon Boavida</p>
            </div>

        </>
    )
}

export default SpotifyLogin;