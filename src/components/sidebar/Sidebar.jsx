import './sidebar.css'
import {
  Bookmark,
  Chat,
  HelpOutline,
  People,
  PlayCircleFilled,
  RssFeed,
  School,
  Today,
  WorkOutline,
} from '@material-ui/icons'

import { Users } from '../../dummyData'
import SidebarFriend from './SidebarFriend/SidebarFriend'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sideBarListItemText"> Feed </span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sideBarListItemText"> Chats </span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled className="sidebarIcon" />
            <span className="sideBarListItemText"> Videos </span>
          </li>
          <li className="sidebarListItem">
            <People className="sidebarIcon" />
            <span className="sideBarListItemText"> People </span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sideBarListItemText"> Questions </span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sideBarListItemText"> Jobs </span>
          </li>
          <li className="sidebarListItem">
            <Today className="sidebarIcon" />
            <span className="sideBarListItemText"> Events </span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sideBarListItemText"> Courses </span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sideBarListItemText"> Bookmarks </span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <SidebarFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  )
}
