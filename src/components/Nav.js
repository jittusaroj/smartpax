import { useNavigate } from 'react-router-dom'
import logo from '../images/blank-profile.png'
import help from '../images/information.png'
import search from '../images/search.png'
import dashboardicon from '../images/dashboards.png'
import calendarIcon from '../images/calendar.png'
import inboxIcon from '../images/inbox.png'
import notificationIcon from '../images/bell.png'
import puzzleIcon from '../images/puzzle.png'
import profileIcon from '../images/add-user.png'

const Nav = () => {

  const navigate = useNavigate()

  return (
    <nav>
      <div className="logo"
        onClick={() => navigate('/')}
      >
        <img src="slogo.png" />
      </div>
      <div onClick={() => navigate('/dashboard')} className="icon-container">
        <img src={dashboardicon} alt="logo" />
      </div>
      <div className="icon-container">
        <img src={notificationIcon} alt="logo" />
      </div>
      <div onClick={() => navigate('/inbox')} className="icon-container">
        <img src={inboxIcon} alt="logo" />
      </div>
      <div className="icon-container">
        <img src={calendarIcon} alt="logo" />
      </div>
      <div className="controls-container">
        <div className="logo-container">
          <img src={puzzleIcon} alt="logo" />
        </div>
        <div className="logo-container">
          <img src={profileIcon} alt="logo" />
        </div>
        <div className="logo-container" onClick={() => navigate('/')}>
          <img src={search} alt="logo" />
        </div>
        <div className="logo-container">
          <img src={help} alt="logo" />
        </div>
        <div className="logo" onClick={() => navigate('/')}>
          <h1 className='profile' >A</h1>
        </div>
      </div>
    </nav>
  )
}

export default Nav