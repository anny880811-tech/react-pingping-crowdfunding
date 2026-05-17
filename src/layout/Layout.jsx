import { Outlet } from "react-router"

const Layout = () => {
  return <>
    <nav className="navbar navbar-expand-lg navbr-custom">
      <div className="container">
        <a className="navbar-brand me-3" href="#">
          <img src="./src/assets/logo.jpg" className="logo-custom" alt="logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active me-3" aria-current="page" href="#">關於</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3" href="#">挖寶</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">我有個大膽的想法</a>
            </li>
          </ul>
          <form className="d-flex gap-3">
            <button className="btn-custom btn-s" type="submit">登入</button>
            <button className="btn-custom btn-s outline" type="submit">註冊</button>
          </form>
        </div>
      </div>
    </nav>
    <Outlet />
    <div className="footer">
      <div className="footer-main">Copyright � 拼拼 All rights reserved.</div>
    </div>
  </>
}
export default Layout