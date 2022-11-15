import cookieParser from "cookie-parser";
import express from "express";
import expressSession from 'express-session';
const router = express.Router();

router.use(cookieParser()); // 쿠키와 세션 모두 템플릿, 이렇게 사용
// router.use(expressSession({ // 
//     secret: 'dilab',
//     resave: true,
//     saveUninitialized: true,
// }))

router.get('/logout', (req, res) => {
    if (req.cookies.user) { // 쿠키도 있고 user가 있으면
        res.clearCookie('user') //로그인 되어 있으면 로그아웃, 없으면 로그인
        res.redirect("/");
    } else {
        res.redirect("/");
    }
})

module.exports = router;