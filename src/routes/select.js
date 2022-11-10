import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function (req, res) {
    //employee면 사번으로 부서정보랑 해당 사원 정보 조회
    //students면 학번으로 학과정보, 동아리 포함 학생 정보 조회
    // admin 이면 학생 삭제가능
    if(req.query.type === 'employee'){

    } else{

    }
    const employeeInfo = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();
    const classInfo = await selectSql.getClass();
    const students = await selectSql.getStudents();
    const club = await selectSql.getClub();

    /*res.render('select',{
        테이블들
        isEmployee = ?
    });
     */   
    res.render('select', {
        title: '학생 정보 테이블',
        title2: '부서 정보 테이블',
        title3: '강의 정보 테이블',
        title4: '동아리 정보 테이블',
        students,
       classInfo,
        department,
        club
    })
})

module.exports = router;
