import icon_heart from '../assets/icon_heart.svg'

function SponsorPlanForm() {
  return <>
    <div>
      <img src={icon_heart} className="icon-heart" alt="愛心icon" />
      <div className="section-title">
        <h4 className="section-title-text mt-3">贊助專案</h4>
      </div>
      <div>
        <div className="mt-4 mb-3">
          <label htmlFor="title" className="form-label">贊助方案</label>
          <select className="form-select form-custom" aria-label="Default select example">
            <option value="defaultValue">請選擇一個方案</option>
            <option value="1">方案 1 </option>
            <option value="2">方案 2 </option>
            <option value="3">方案 3 </option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">收件人姓名</label>
          <input type="userName" className="form-control form-custom" id="userName" />
        </div>
        <div className="mb-3">
          <label htmlFor="tel" className="form-label">聯絡電話</label>
          <input type="tel" className="form-control form-custom" id="tel" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">聯絡信箱</label>
          <input type="email" className="form-control form-custom" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="pay" className="form-label">付款方式</label>
          <select className="form-select form-custom" aria-label="Default select example">
            <option value="defaultValue">請選擇付款方式</option>
            <option value="1">信用卡付款</option>
            <option value="2">LinePAY</option>
            <option value="3">ApplePAY</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <button className="btn btn-custom btn-l btn-form">贊助專案</button>
      </div>
    </div>
  </>
}
export default SponsorPlanForm