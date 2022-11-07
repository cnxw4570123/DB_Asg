import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

router.get('/students', async (req, res) => {
    const stu_res = await selectSql.getStudents();
    res.render('updateStudent', {
        title: "학생 테이블 갱신",
        stu_res
    })
});


router.post('/students', async (req, res) => {
    const stu_vars = req.body;
    const stu_data = {
        stuid: stu_vars.stuid,
        sno: stu_vars.sno,
        sname: stu_vars.sname,
        semail: stu_vars.semail,
        sphnum: stu_vars.sphnum,
        smajor: stu_vars.smajor,
        sclubid: stu_vars.sclubid
    };
    await updateSql.updateStudents(stu_data);

    res.redirect('/select');
});

module.exports = router;