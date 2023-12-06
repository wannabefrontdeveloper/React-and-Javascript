import React from "react";
import Player from "./Player";

function Value(props) {
  return (
    <div>
      <Player name="프랭키 데용" value={120} />
      <Player name="로날드 아라우호" value={80} />
      <Player name="페드리 곤잘레스" value={100} />
    </div>
  );
}

export default Value;