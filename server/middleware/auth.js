const { User } = require("../models/User");

let auth = (req, res, next) => {
  console.log("2. auth.js 위치");
  // 인증 처리를 하는 곳

  // 클라이언트 쿠키에서 토큰을 가져온다.
  let token = req.cookies.x_auth;

  console.log("3. 클라이언트 쿠키에서 토큰을 가져온다.");
  console.log(User);
  // 토큰을 복호화 한 후, 유저를 찾는다.
  // User.findByToken 메소드를 만들어 줌
  User.findByToken(token, (err, user) => {
    console.log("user", user);
    console.log(User);
    if (err) throw err;
    // 유저가 없으면 인증 NO
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    console.log("7.");
    console.log(req.token);
    next();
  });

  // 유저가 있으면 인증 OK
};

module.exports = { auth };
