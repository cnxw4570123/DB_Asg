import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res)=> {
    const vars = req.body;
    const students = await selectSql.getStudents();
    const employee = await selectSql.getEmployee();
    let whoAmI = '';
    let checkLogin = false;
    console.log(vars.type === 'employee');
    console.log(vars.password);
    if(vars.type == 'students'){
        students.map((student) => {
            console.log(student.stuid);
            if(vars.id === student.STUID && vars.password === student.SPW){
                console.log('login success!');
                checkLogin = true;
                whoAmI = 'student';
            } else{
                console.log('login failed!');
                res.send("<script> alert('로그인에 실패 했습니다.); location.href ='/';</script>");
            }
        })
    } else {
        employee.map((emp)=> {
            console.log(emp.EMPID);
            if(vars.id === emp.EMPID && vars.password === emp.EPW){
                console.log('login sucess!');
                if(emp.emppos === 'admin'){
                    whoAmI = 'admin';
                } else{
                    whoAmI = 'user';
                }
            }
        })
    }
        if(checkLogin && whoAmI === 'admin'){
            res.redirect('/delete');
        } else if(checkLogin && whoAmI === 'user' || whoAmI === 'student'){
            res.redirect('/select');
        } else{
            console.log('login failed!');
            res.send("<script> alert('로그인에 실패 했습니다.); location.href ='/';</script>");
        }
})

module.exports = router;