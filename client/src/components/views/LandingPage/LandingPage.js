import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";

function LandingPage(props) {
  const onClickHandler = () => {
    console.log("1. LandingPage에서 onClick");
    axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃 하는데 실패하였습니다.");
      }
    });
  };

  const user = useSelector((state) => state.user.userData);
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작 페이지</h2>
      {/* 로그아웃 버튼을 로그인 했을 때만 볼 수 있게 해주고 싶어서
      Store 안에 loginSuccess 값이나 userId 값을 체크해서 값이 존재할 때만
      버튼을 렌더해주려고 하는데 이 값들들 어떻게 접근해야 하는지?*/}
      {/* 답변 : useSelector를 이용
      useSelector(state => state.user) */}
      <br />

      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default withRouter(LandingPage);
