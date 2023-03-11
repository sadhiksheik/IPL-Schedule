// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, matchesData: {}}

  componentDidMount() {
    this.getMatchesData()
  }

  getFormattedData = matchDetails => ({
    umpires: matchDetails.umpires,
    result: matchDetails.result,
    manOfTheMatch: matchDetails.man_of_the_match,
    id: matchDetails.id,
    date: matchDetails.date,
    venue: matchDetails.venue,
    competingTeam: matchDetails.competing_team,
    competingTeamLogo: matchDetails.competing_team_logo,
    firstInnings: matchDetails.first_innings,
    secondInnings: matchDetails.second_innings,
    matchStatus: matchDetails.match_status,
  })

  getMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const newObject = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(each =>
        this.getFormattedData(each),
      ),
    }
    console.log(newObject)
    this.setState({isLoading: false, matchesData: newObject})
  }

  renderMatchDetails = () => {
    const {matchesData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchesData
    return (
      <>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-img"
        />
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <LatestMatch details={latestMatchDetails} key={latestMatchDetails.id} />
        <ul className="ul-matches">
          {recentMatches.map(each => (
            <MatchCard key={each.id} matchData={each} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="match-card-bg">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderMatchDetails()
        )}
      </div>
    )
  }
}
export default TeamMatches
