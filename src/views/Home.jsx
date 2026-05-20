import { NavLink, Outlet } from "react-router"
import SponsorPlanCard from "../components/SponsorPlanCard"
import SponsorPlanForm from "../components/SponsorPlanForm"
import produt_image from '../assets/produt_image.jpg'
import icon_good01 from '../assets/icon_good01.svg'
import icon_good02 from '../assets/icon_good02.svg'
import icon_good03 from '../assets/icon_good03.svg'
import icon_good04 from '../assets/icon_good04.svg'
import store_img from '../assets/store_img.jpg'


const Home = () => {
  return <>
    <div>
      <section className="pt-5 pb-6 product-area">
        <div className="container">
          <div className="">
            <button className="tag-custom tag-1 mb-3">魔法科技</button>
            <h2>拍出會動的照片｜LivePhotos 魔法拍立得</h2>
          </div>
          <div className="row pt-4">
            <div className="col-12 col-lg-7">
              <img src={produt_image} className="product-custom" alt="相機照片" srcSet="" />
            </div>
            <div className="col-12 col-lg-5 mt-lg-0 mt-3">
              <div className="introduce-custom">
                <p className="fs-6">目標 $600,000</p>
                <h2>$280,047</h2>
                <div className="progress mb-3">
                  <div className="progress-bar" role="progressbar" aria-valuenow="41" aria-valuemin="0" aria-valuemax="100">41%</div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="fs-6">贊助人數</p>
                    <h2>1374 人</h2>
                  </div>
                  <div className="col-6">
                    <p className="fs-6">募資倒數</p>
                    <h2>27 天</h2>
                  </div>
                </div>
                <div className="icon-custom">
                  <div className="tab-group">
                    <div className="icon-tab">認證標章</div>
                    <img src={icon_good01} alt="認證標章" />
                    <span className="d-inline d-lg-none">認證標章</span>
                  </div>
                  <div className="tab-group">
                    <div className="icon-tab">品質保證</div>
                    <img src={icon_good02} alt="品質保證" />
                    <span className="d-inline d-lg-none">品質保證</span>
                  </div>
                  <div className="tab-group">
                    <div className="icon-tab">原生創意</div>
                    <img src={icon_good03} alt="原生創意" />
                    <span className="d-inline d-lg-none">原生創意</span>
                  </div>
                  <div className="tab-group">
                    <div className="icon-tab">人氣王</div>
                    <img src={icon_good04} alt="人氣王" />
                    <span className="d-inline d-lg-none">人氣王</span>
                  </div>
                </div>
                <div className="content-custom mt-3">
                  <div className="p-3">
                    專案募資中！<br />
                    在 2026/06/14 23:59 募資結束前，您都可以贊助我們！
                  </div>
                </div>
                <div>
                  <button className="btn btn-custom btn-l btn-sponsor mt-4">贊助專案</button>
                  <div className="mt-2 button-group">
                    <button className="btn btn-custom outline btn-l btn-left"><i
                      className="bi bi-heart-fill me-2"></i>追蹤專案</button>
                    <button className="btn btn-custom outline btn-l btn-right"><i
                      className="bi bi-share-fill me-2"></i>分享</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <nav className="navbar navbar-expand-lg project-nav">
          <div className="container">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">專案介紹</NavLink>
              <NavLink className="nav-link" to="/qa">常見問答</NavLink>
              <NavLink className="nav-link" to="/progres">目前進度</NavLink>
              <NavLink className="nav-link" to="/message">留言</NavLink>
            </div>
          </div>
        </nav>
      </section>
      <section>
        <div className="container mt-5 product-area2">
          <div className="row">
            <div className="col-12 col-lg-8">
              <Outlet />
              <div className="mt-6 d-none d-lg-block">
                <SponsorPlanForm />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="right-column">
                <div className="information-crad mt-4 mt-lg-0">
                  <div className="d-flex">
                    <img src={store_img} className="store_img" alt="大頭照" />
                    <div className="ms-3 mt-2 align-self-center">
                      <div className="fs-5">缺錢事務所</div>
                      <p>發起 1 個專案</p>
                    </div>
                  </div>
                  <p className="mt-3">需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div><i className="bi bi-facebook fs-3"></i></div>
                      <div className="ms-2 youtube-icon"><i className="bi bi-youtube fs-5"></i></div>
                    </div>
                    <div><button className="btn btn-custom outline-xs"><i className="bi bi-chat-dots me-1"></i>聯絡我們</button></div>
                  </div>
                </div>
                <div className="label mt-4">
                  <div className="fs-5">選一個方案來支持</div>
                </div>
                <SponsorPlanCard />
                <SponsorPlanCard />
                <SponsorPlanCard />
              </div>
            </div>
            <div className="col-12 col-lg-8 mb-6 d-block d-lg-none">
              <SponsorPlanForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
}
export default Home