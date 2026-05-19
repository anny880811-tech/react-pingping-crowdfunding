function Message() {
  const messageData = [
    {
      img: '/src/assets/user_img01.jpg',
      userName: '廖小杰',
      date: '2020年5月22日 11:32',
      content: '晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！',
      reply: '你要嘛起床的時候開燈，要嘛給我們更多錢開發阿',
    },
    {
      img: '/src/assets/user_img02.jpg',
      userName: '卡阿伯',
      date: '2020年5月21日 16:03',
      content: '希望有更多花色可以選擇！我女兒最近喜歡綠色'
    },
    {
      img: '/src/assets/user_img02.jpg',
      userName: '賈師',
      date: '2020年5月21日 10:02',
      content: '可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣'
    },
    {
      img: '/src/assets/user_img02.jpg',
      userName: '俊俊',
      date: '2020年5月19日 11:55',
      content: 'test123 看一下我是不是真的可以留言'
    },
  ]
  return <>
    <div className="message">
      <div className="comment-notice d-none d-lg-flex">
        <div className="ms-3 message-comment-notice">只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎<span className="text-danger">聯絡提案人</span>！</div>
      </div>
      {messageData.map((item, index) => {
        return (<div className="message-card mt-3" key={index}>
          <div className="message-header">
            <div>
              <img src={item.img} alt="使用者照片" />
            </div>
            <div className="ms-3 align-self-center">
              <div>{item.userName}</div>
              <div>{item.date}</div>
            </div>
          </div>
          <div className="mt-3">{item.content}</div>
          {item.reply && (<div className="message-card-reply mt-3">
            <div className="text-danger">提案者回覆</div>
            <div>{item.reply}</div>
          </div>)}
        </div>)
      })}

    </div>
  </>
}

export default Message
