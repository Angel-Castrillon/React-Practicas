import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";
import users from './data/users.json'



export function App (){
    const formatUser = (userName) => `@${userName}`



    return (
        <section className='App'>
        {users.map(({ userName, name }) => (
            
          <TwitterFollowCard
            key={userName}
            userName={userName}
            formatUserName={formatUser}
          >
            {name}
          </TwitterFollowCard>
        ))}
      </section>
  
    )
}