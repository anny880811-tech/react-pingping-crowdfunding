import { useEffect, useRef, useState } from "react"
import { Outlet } from "react-router"
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import logo from '../assets/logo.jpg'

const Layout = () => {
  const modalElement = useRef(null)
  const modalInstance = useRef(null)
  const [userInformation, setUserInformation] = useState("")

  useEffect(() => {
    if (modalElement.current) {
      modalInstance.current = new bootstrap.Modal(modalElement.current, {
        keyboard: false,
        backdrop: 'static'
      });

      const handleHidden = () => {
        setUserInformation("")
        console.log('資料已重置');
      }
      modalElement.current.addEventListener('hidden.bs.modal', handleHidden);
      return () => {
        modalElement.current?.removeEventListener('hidden.bs.modal', handleHidden)
        modalInstance.current?.dispose()
      }
    }
  }, [])

  const openModal = () => {
    modalInstance.current?.show()
  }

  return <>
    <nav className="navbar navbar-expand-lg navbr-custom">
      <div className="container">
        <a className="navbar-brand me-3" href="#">
          <img src={logo} className="logo-custom" alt="logo" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

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
            <button className="btn-custom btn-s" type="button" onClick={openModal}>登入</button>
            <button className="btn-custom btn-s outline" type="button">註冊</button>
          </form>
        </div>
      </div>
    </nav>
    <div className="modal" ref={modalElement} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">登入</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">帳號</label>
              <input type="email" className="form-control form-custom" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">密碼</label>
              <input type="password" className="form-control form-custom" autoComplete="new-password" id="password" />
            </div>
            <div className="text-secondary fs-7">忘記密碼?</div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-custom btn-l mt-4 w-100">登入</button>
            <div className="modal-register mt-3 mb-2 text-secondary fs-7">還沒有帳號? <span className="text-danger">註冊一個帳號</span></div>
          </div>
        </div>
      </div>
    </div>
    <Outlet />
    <div className="footer mt-6">
      <div className="footer-main">Copyright � 拼拼 All rights reserved.</div>
    </div>
    <div className="mobile" >
      <div className="mobile-custom d-flex d-lg-none">
        贊助專案
      </div>
    </div>
  </>
}
export default Layout