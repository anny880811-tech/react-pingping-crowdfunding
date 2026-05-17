function SponsorPlanCard() {
  return <>
    <div className="product-card mt-4">
      <img src="./src/assets/plan_img.jpg" className="plan-img" alt="商品卡片相機照片" />
      <div className="mt-2 ms-3 me-3 d-flex justify-content-between">
        <div>限時優惠</div>
        <div>2 days 20:05:20</div>
      </div>
      <div className="wire mt-2"></div>
      <div className="ms-3 me-3">
        <h5 className="mt-3">買一送一，只有兩百組別錯過</h5>
        <h4>NT$ 1600</h4>
        <div>
          <button className="tag-custom tag-left me-2">已被贊助88次</button>
          <button className="tag-custom tag-right">限量<span className="text-warning">200</span>個</button>
        </div>
        <p className="card-content mt-2">受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。</p>
        <button className="btn btn-custom btn-m">贊助此專案</button>
      </div>
    </div>
  </>
}
export default SponsorPlanCard