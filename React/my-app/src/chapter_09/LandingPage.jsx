import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMessages, setUserMessages] = useState([]);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  }

  const onClickLogout = () => {
    setIsLoggedIn(false);
    setUserMessages([]); // Clear user messages when logging out
  }

  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const handleEventClick = () => {
    if (isLoggedIn) {
      // Store the user message in the userMessages array
      setUserMessages([...userMessages, { username, message }]);
      setForm({
        username: "",
        message: "",
      });
    } else {
      alert("로그인 후 이용해주세요.");
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEventClick();
    }
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>

      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="유저명"
          value={username}
          onChange={onChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={message}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        {isLoggedIn ? (
          <button onClick={handleEventClick}>확인</button>
        ) : (
          <button onClick={handleEventClick}>로그인 후 이용해주세요</button>
        )}

        <div>
          <h2>유저명 및 설명</h2>
          <ul>
            {userMessages.map((userMsg, index) => (
              <li key={index}>
                {userMsg.username}: {userMsg.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
