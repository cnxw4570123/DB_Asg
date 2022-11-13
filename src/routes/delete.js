import express from "express";
import { selectSql, deleteSql, updateSql } from "../database/sql";
const router = express.Router();

router.get('/', async (req, res) => {
    const id = Number(req.query.id);
    console.log(id);
    const part_in = await selectSql.getClassInfo(id);
    res.render('delete', {
        title: "삭제 가능",
        part_in
    })
});

router.post('/', async (req, res) => {
    console.log('delete Router : ', req.body.delBtn);
    console.log(req.body.sno);
    const data = {
        stuid: req.body.delBtn,
        sno: req.body.sno
    };

    await deleteSql.deleteParIn(data);

    res.redirect(`/delete?id=${data.sno}`);
});

module.exports = router;
