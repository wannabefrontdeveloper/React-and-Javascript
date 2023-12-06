import React from "react";

function Player(props) {
  return (
    <div>
      <h1>{`이 선수의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 선수의 가치는 약 ${props.value}M 유로의 가치를 지닙니다.`}</h2>
    </div>
  )
}
export default Player;