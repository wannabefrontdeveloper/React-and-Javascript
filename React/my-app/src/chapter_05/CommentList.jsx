import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "프랭키 데용",
    comment: "안녕하세요, 데용입니다.",
    imageUrl: "https://thumb.mt.co.kr/06/2022/07/2022072716230276819_1.jpg/dims/optimize/"
  },
  {
    name: "리오넬 메시",
    comment: "안녕하세요 메시입니다.",
    imageUrl: "https://dimg.donga.com/wps/NEWS/IMAGE/2023/05/04/119139435.2.jpg"
  },
  {
    name: "크리스티아누 호날두",
    comment: "메시가 저보다 축구를 잘합니다.",
    imageUrl: "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/270/111c3a04701b68b36587a82a4a344f78_res.jpeg"
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment
            name={comment.name}
            comment={comment.comment}
            imageUrl={comment.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
