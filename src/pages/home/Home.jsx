import Feed from "../../components/feed/Feed"
import RightBar from "../../components/rightbar/RightBar"
import Sidebar from "../../components/sidebar/Sidebar"
import TopBar from "../../components/topbar/Topbar"
import "./home.css"

export default function Home() {
    return (
        <>
            <TopBar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <RightBar />
            </div>
        </>
    )
}