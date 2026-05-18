function Qa() {
  const qaData = [
    {
      id: 'Q1',
      title: '影片拍完之後可以編輯嗎？',
      content: '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！',
    },
    {
      id: 'Q2',
      title: '有提供保固或維修服務嗎？',
      content: '有的！我們提供自購買日起算一年的非人為損壞保固服務。若超過保固期限或因意外造成損壞，我們也設有專業的維修檢測服務，您可以隨時聯繫線上客服協助送修流程哦！',
    },
    {
      id: 'Q3',
      title: '補充包底片要去哪裡購買呢？',
      content: '您可以直接在我們的官方網站、各大電商平台（如蝦皮官方旗艦店、Momo 購物網），或是全台合作的實體誠品書店與文創選物店購買到專屬的補充包底片哦！',
    },
    {
      id: 'Q4',
      title: '印出來的拍立得照片需要充電嗎？',
      content: '照片本身是不需要充電的哦！印表機本身內建高續航力鋰電池，充滿電後約可連續列印 30~40 張照片，讓您出門在外也能隨心所欲、即時分享快樂瞬間！',
    },
    {
      id: 'Q5',
      title: '運送方式及付款方式有哪些呢？',
      content: '我們提供多樣化的選擇！運送方面支援「超商取貨（7-11/全家）」與「宅配到府」；付款則支援「信用卡線上刷卡」、「ATM 轉帳」以及「超商取貨付款」，讓您購物更便利！',
    },
    {
      id: 'Q6',
      title: '退換貨方式及規則是什麼呢？',
      content: '我們提供消費日起算「7 天鑑賞期」（非試用期）。收到商品後若有非人為的瑕疵或破損，請保持包裝與內容物完整並聯繫客服，我們將為您免費安排退換貨取件服務哦！',
    }
  ]
  return <>
    <div>
      <div className="accordion" id="accordionExample">
        {qaData.map((item, index) => {
          return (
            <div className="accordion-item mb-3" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                  <div className="d-flex align-item-center">
                    <div className="qa-tag">{item.id}</div>
                    <div className="ms-3 qa-title">{item.title}</div>
                  </div>
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  {item.content}
                </div>
              </div>
            </div>
          )
        })}

        {/* <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <div className="d-flex align-item-center">
                <div className="qa-tag">Q1</div>
                <div className="ms-3 qa-title">影片拍完之後可以編輯嗎？</div>
              </div>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
            </div>
          </div>
        </div> */}
      </div>
    </div >
  </>
}
export default Qa