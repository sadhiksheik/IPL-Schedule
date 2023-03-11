// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {result, matchStatus, competingTeamLogo, competingTeam} = matchData

  return (
    <li className="each-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <p className="name">{competingTeam}</p>
      <p className="paraa">{result}</p>
      <p className="status">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
