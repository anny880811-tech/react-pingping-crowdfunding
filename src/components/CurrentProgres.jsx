function CurrentProgres() {
  const progresData = [
    {
      img: '/src/assets/news01.jpg',
      title: '高雄體驗會｜免費參加送帆布袋',
      date: '2021-06-20',
      content: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    },
    {
      img: '/src/assets/news02.jpg',
      title: '限時早鳥倒數中！把握最後 7 折優惠時機',
      date: '2021-06-25',
      content: '感謝大家開賣以來的關注！最划算的超早鳥優惠名額已經所剩無幾，還在猶豫的朋友趕快把握機會，別錯過最挺贊助者的限定優惠囉！',
    },
    {
      img: '/src/assets/news03.jpg',
      title: '設計師手札｜打造這台相機的幕後初衷',
      date: '2021-06-28',
      content: '在募資進行的同時，我們想和大家聊聊這款相機的設計理念。從初期的草圖到無數次的外觀調整，我們是如何在復古與現代科技中找到完美平衡的？',
    },
  ]
  return <>
    <div>
      {progresData.map((item, index) => {
        return (
          <div className="progres-card mb-3" key={index}>
            <div><img src={item.img} className="progres-img" alt="進度照片" /></div>
            <div className="progres-content ms-3">
              <h6 className="mb-0">{item.title}</h6>
              <div>{item.date}</div>
              <div className="d-none d-lg-block mt-2">{item.content}</div>
              <div className="mt-3 more">MORE</div>
            </div>
          </div>
        )
      })}

    </div>
  </>
}

export default CurrentProgres