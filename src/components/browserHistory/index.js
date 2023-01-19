import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class browserHistory extends Component {
  state = {
    searchInput: '',
    historyList: [],
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState((historyList: updatedHistoryList))
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const filteredHistoryList = initialHistoryList.filter(eachHistory =>
      eachHistory.history.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="history-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="app logo"
          />
          <div className="search-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
          </div>
          <div className="search-container">
            <input
              type="search"
              className="search-input"
              value={searchInput}
              placeholder="search History"
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="history-list">
            {filteredHistoryList.map(eachHistory => (
              <HistoryItem
                key={eachHistory.id}
                historyDetails={eachHistory}
                onDeleteHistory={this.onDeleteHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default browserHistory
