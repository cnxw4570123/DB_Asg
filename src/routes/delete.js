import express from "express";
import { selectSql, deleteSql, updateSql } from "../database/sql";
const router = express.Router();

router.get('/', async (req, res) => {
    const part_in = await selectSql.getClassInfo();

    res.render('delete', {
        title: "삭제 가능",
        part_in
    })
});

router.post('/', async (req, res) => {
    console.log('delete Router : ', req.body.delBtn);

    const data = {
        stuid: req.body.delBtn,
    };

    await deleteSql.deleteParIn(data);

    res.redirect('/delete');
});

module.exports = router;
