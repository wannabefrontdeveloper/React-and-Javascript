import React from "react";
import Card from "./Card";

const profiles = [
  {
    id: 1,
    title: "프랭키 데용",
    color: "red",
    
    intro: "저의 생일은 1997년 5월 12일입니다.",
    src: "https://news.nateimg.co.kr/orgImg/su/2022/07/16/537232_751659_1740.jpg",
  },
  {
    id: 2,
    title: "페드리 곤잘레스",
    color: "blue",
    intro: "저의 생일은 2002년 11월 25일입니다.",
    src: "https://news.nateimg.co.kr/orgImg/su/2021/07/12/431269_546315_0438.jpg",
  },
  {
    id: 3,
    title: "로날드 아라우호",
    color: "red",
    intro: "저의 생일은 1999년 3월 7일입니다.",
    src: "https://static.inews24.com/v1/df801b56575227.jpg",
  },
  {
    id: 4,
    title: "파블로 가비",
    color: "blue",
    intro: "저의 생일은 2004년 8월 5일입니다.",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0WwU2mlXNmQ7OGfVJkZjPoa6ZPV64DwRyA&usqp=CAU",
  },
  {
    id: 5,
    title: "라민 야말",
    color: "red",
    intro: "저의 생일은 2007년 7월 13일입니다.",
    src: "https://blog.kakaocdn.net/dn/WemdD/btssc7lvsFP/cBSdQ7b6kGnLuTd837XgFk/img.jpg",
  },
];

function ProfileCard(props) {
  return (
    <div style={{ display: "flex" }}>
      {profiles.map((li) => {
        return (
          <Card key={li.id} title={li.title} backgroundColor={li.color}>
            <p style={{ color: "white" }}>안녕하세요, {li.title}입니다.</p> {/* 텍스트 색상을 하얀색으로 설정합니다. */}
            <p style={{ color: "white" }}>{li.intro}</p> {/* 'intro' 텍스트의 색상도 하얀색으로 설정합니다. */}
            <img src={li.src} style={{ width: "300px" }} alt={li.title} />
          </Card>
        );
      })}
    </div>
  );
}

export default ProfileCard;
