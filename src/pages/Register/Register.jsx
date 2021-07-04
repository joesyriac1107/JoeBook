import './register.css'

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">JoeBook</h3>
                    <span className="loginDesc">
                        Connect with friends and the world aroung you on JoeBook.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" type="text" className="loginInput" />
                        <input placeholder="Email" type="text" className="loginInput" />
                        <input placeholder="Password" type="text" className="loginInput" />
                        <input placeholder="Re-enter Password" type="text" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
