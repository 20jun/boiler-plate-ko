import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

// options
// null => 아무나 출입이 가능한 페이지
// true => 로그인한 유저만 출입이 가능한 페이지
// false => 로그인한 유저는 출입 불가능한 페이지
// adminRoute = null << 어드민 유저만 들어가기를 원하는 페이지면 true
export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    // 페이지가 이동할때마다 작동
    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log(res);

        // 로그인 하지 않은 상태
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          // 로그인 한 상태
          // 어드민이 아닌데 어드민만 들어갈 수 있는 페이지에 들어가려고 하는 경우
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
