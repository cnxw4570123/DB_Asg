import express from "express";
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('../views/home');
});

router.post('/', (req, res) => {
    const vars = req.body;

    const data = {
        sno: vars.sno,
        sname: vars.sname,
        semail: vars.semail,
        sphnum: vars.sphnum,
        smajor: vars.smajor,
        sclubid: vars.sclubid
    };
    insertSql.setStudents(data);
    res.redirect('/');
})

module.exports = router;