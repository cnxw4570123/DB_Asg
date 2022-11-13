import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function (req, res) {
    //employee면 사번으로 부서정보랑 해당 사원 정보 조회
    //students면 학번으로 학과정보, 동아리 포함 학생 정보 조회
    let type = req.query.type;
    let id = Number(req.query.id);
    console.log(id, type);
    if (type === 'employee') {
        const employee = await selectSql.getEmployeeById(id);
        res.render('select', {
            isEmployee: true,
            title: '직원 정보 테이블',
            employee
        })

    } else {
        const students = await selectSql.getStudentsById(id);
        const classInfo = await selectSql.getClassInfoById(id);
        res.render('select', {
            isEmployee: false,
            title: '학생 정보 테이블',
            title2: '수강정보 테이블',
            students,
            classInfo
        })
    }

});

module.exports = router;
