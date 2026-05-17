import SponsorPlanCard from "../components/SponsorPlanCard"
import SponsorPlanForm from "../components/SponsorPlanForm"

const Home = () => {
  return <>
    <div>
      <section className="pt-5 pb-6 product-area">
        <div className="container">
          <div className="">
            <button className="tag-custom tag-1 mb-2">魔法科技</button>
            <h2>拍出會動的照片｜LivePhotos 魔法拍立得</h2>
          </div>
          <div className="row pt-4">
            <div className="col-12 col-lg-7">
              <img src="./src/assets/produt_image.jpg" className="product-custom" alt="" srcSet="" />
            </div>
            <div className="col-12 col-lg-5 mt-lg-0 mt-3">
              <div className="introduce-custom">
                <p className="fs-6">目標 $600,000</p>
                <h2>$280,047</h2>
                <div className="progress-bar-custom mb-3"></div>
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
                  <img src="./src/assets/icon_good01.svg" alt="" />
                  <span className="fs-7 me-3 d-inline d-lg-none">認證標章</span>
                  <img src="./src/assets/icon_good02.svg" alt="" />
                  <span className="fs-7 me-3 d-inline d-lg-none">品質保證</span>
                  <img src="./src/assets/icon_good03.svg" alt="" />
                  <span className="fs-7 me-3 d-inline d-lg-none">原生創意</span>
                  <img src="./src/assets/icon_good04.svg" alt="" />
                  <span className="fs-7 me-3 d-inline d-lg-none">人氣王</span>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">專案介紹</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">常見問答</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">目前進度</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">留言</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section>
        <div className="container mt-5 product-area2">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div>
                <img src="./src/assets/p1.jpg" className="p1" alt="" />
              </div>
              <div className="mt-4">
                <h4 className="title">施了魔法的照片</h4>
                <p className="article-content">
                  受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
                </p>
              </div>
              <div>
                <img src="./src/assets/p2.jpg" className="p1" alt="" />
              </div>
              <div className="mt-4">
                <h4 className="title">留下當下的美好</h4>
                <p className="article-content">
                  受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
                </p>
              </div>
              <div className="mt-6 mb-6 d-none d-lg-block">
                <SponsorPlanForm/>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="right-column">
                <div className="information-crad mt-4 mt-lg-0">
                  <div className="d-flex">
                    <img src="./src/assets/store_img.jpg" className="store_img" alt="" />
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
              <SponsorPlanForm/>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
}
export default Home