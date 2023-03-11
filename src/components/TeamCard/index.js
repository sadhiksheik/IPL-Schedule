// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <div>
      <Link className="link-item" to={`/team-matches/${id}`}>
        <li className="each-team-container">
          <img className="team-logo" alt={name} src={teamImageUrl} />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    </div>
  )
}
export default TeamCard
