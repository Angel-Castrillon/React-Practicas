import { useState } from 'react'
import './App.css'
export function TwitterFollowCard ({ formatUserName, userName = 'Unknown', children}){

    const [isFollowing, setIsFollowing] = useState(() =>{
        const stored = localStorage.getItem(`initialIsFollowing-${userName}`)
        return stored === 'true'
    })

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ?
     'tw-followCard-button is-following' : 'tw-followCard-button'

     const handleClikc = () =>{
        const newState = !isFollowing
        setIsFollowing(!isFollowing)
        localStorage.setItem(`initialIsFollowing-${userName}`, newState)
     }

    return (
        <article className='tw-followCard'>
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/x/${userName}`} alt="Avatar del usuario"/>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClikc}>
                    {text}
                </button>
            </aside>
        </article>
    )
}