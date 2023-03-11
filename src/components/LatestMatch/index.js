// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = details

  return (
    <div className="latest-container">
      <div className="first-container">
        <p className="team-head">{competingTeam}</p>
        <p className="para">{date}</p>
        <p className="para">{venue}</p>
        <p className="para">{result}</p>
      </div>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <div className="first-container">
        <p className="para">First Innings</p>
        <p className="para">{firstInnings}</p>
        <p className="para">Second Innings</p>
        <p className="para">{secondInnings}</p>
        <p className="para">Man Of The Match</p>
        <p className="para">{manOfTheMatch}</p>
        <p className="para">Umpires</p>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
