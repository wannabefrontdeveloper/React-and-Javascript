import React from "react";
import Notification from "./Notification"

const reservedNotifications = [
  {
    id : 1,
    message: "예 마샤딕입니다. 오늘 일정을 알려드리겠습니다.",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2nMFCohgklNR11_fn_EiSgnq_dnSMFWvwQ&usqp=CAU"
  },
  {
    id : 2,
    message: "체스트프레스 10회 4세트있습니다.",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2nMFCohgklNR11_fn_EiSgnq_dnSMFWvwQ&usqp=CAU"
  },
  {
    id : 3,

    message: "다음은 축구선수들입니다.",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2nMFCohgklNR11_fn_EiSgnq_dnSMFWvwQ&usqp=CAU"

  },

  {
    id : 4,
    message: "안녕하세요, 데용입니다.",
    imageUrl: "https://thumb.mt.co.kr/06/2022/07/2022072716230276819_1.jpg/dims/optimize/"
  },
  {
    id:5,
    message: "안녕하세요 메시입니다.",
    imageUrl: "https://image.ajunews.com//content/image/2020/12/23/20201223104457671103.jpg"
  },
  {
    id:6,
    message: "메시보다 축구못하는 호날두입니다.",
    imageUrl: "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/270/111c3a04701b68b36587a82a4a344f78_res.jpeg"
  },

]

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              comment={notification.message}
              imageUrl={notification.imageUrl}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;