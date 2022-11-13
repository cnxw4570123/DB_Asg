import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const vars = req.body;
    const students = await selectSql.getStudents();
    const employee = await selectSql.getEmployee();
    let whoAmI = '';
    let checkLogin = false;
    console.log(vars.type === 'employee');
    if (vars.type == 'student') {
        students.map((student) => {
            if (Number(vars.id) === student.SNO && vars.password === student.SPW) {
                console.log('login success!');
                checkLogin = true;
                whoAmI = 'student';
            }
        })
    } else {
        employee.map((emp) => {
            console.log(emp.EMPID === vars.id);
            if (Number(vars.id) === emp.EMPID && vars.password === emp.EPW) {
                console.log('login sucess!');
                checkLogin = true;
                whoAmI = 'employee';
            }
        })
    }
    console.log(`whoAmI : ${whoAmI} and checkLogin : ${checkLogin}`);
    if (checkLogin && whoAmI === 'student') {
        res.redirect(`/delete?id=${vars.id}`);
    } else if (checkLogin && whoAmI === 'employee') {
        res.redirect('/select?id=' + vars.id);

    } else {
        console.log('login failed!');
        res.send("<script> alert('로그인에 실패 했습니다.'); location.href ='/';</script>");
    }
})

module.exports = router;