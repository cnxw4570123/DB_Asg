import express from "express";
import { selectSql, deleteSql, updateSql } from "../database/sql";
const router = express.Router();

router.get('/', async (req, res) => {
    const students = await selectSql.getStudents();

    res.render('delete', {
        title: "삭제 가능",
        students
    })
});

router.post('/', async (req, res) => {
    console.log('delete Router : ', req.body.delBtn);

    const data = {
        stuid: req.body.delBtn,
    };
    const participate_in = selectSql.getClassInfo(data.stuid);
    const club = selectSql.getClub(data.stuid);

    if (participate_in != null) {
        await deleteSql.deleteParIn(data.stuid);
    }

    if (club != null) {
        await updateSql.updateClub(data.stuid);
    }


    await deleteSql.deleteStudents(data);

    res.redirect('/delete');
});

module.exports = router;
