import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get('/', async( req, res)=> {
    const students = await selectSql.getStudents();

    res.render('delete', {
        title: "삭제 가능",
        students
    })
});

router.post('/', async (req, res)=>{
    console.log('delete Router : ', req.body.delBtn);

    const data = {
        stuid : req.body.delBtn,
    };

    await deleteSql.deleteStudents(data);

    res.redirect('/delete');
});

module.exports = router;
