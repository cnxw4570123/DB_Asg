import e from "express";
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
    console.log(vars.type);

    if(vars.type == '학생'){
        students.map((student) => {
            console.log(student.stuid);
            if(vars.id === student.stuid && vars.pw === student.spw){
                console.log('login success!');
                checkLogin = true;
                whoAmI = 'student';
            }
        })
    } else {
        employee.map((emp)=> {
            console.log(emp.empid);
            if(vars.id === emp.empid && vars.pw === emp.epw){
                console.log('login sucess!');
                if(emp.emppos === 'admin'){
                    whoAmI = 'admin';
                } else{
                    whoAmI = 'user';
                }
            }
        })

        if(checkLogin && whoAmI === 'admin'){
            res.redirect('/delete');
        } else if(checkLogin && whoAmI === 'student'){
            res.redirect('/select');
        } else{
            console.log('login failed!');
            res.redirect("<script> alert('로그인에 실패 했습니다.); location.href ='/'l;</script>");
        }
    }
})

module.exports = router;