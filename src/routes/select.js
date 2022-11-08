import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function (req, res) {
    const department = await selectSql.getDepartment();
    const classInfo = await selectSql.getClass();
    const students = await selectSql.getStudents();
    const club = await selectSql.getClub();


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
