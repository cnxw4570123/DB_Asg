import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function (req, res) {
    const building = await selectSql.getBuilding();
    const room = await selectSql.getRoom();
    const department = await selectSql.getDepartment();
    const classInfo = await selectSql.getClass();
    const students = await selectSql.getStudents();
    const club = await selectSql.getClub();


    res.render('select', {
        title: '건물 정보 테이블',
        title2: '방 정보 테이블',
        title3: '부서 정보 테이블',
        title4: '강의 정보 테이블',
        title5: '학생 정보 테이블',
        title6: '동아리 정보 테이블',
        building,
        room,
        department,
        classInfo,
        students,
        club
    })
})

module.exports = router;
