import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function (req, res) {
    const id = req.query.id;
    const employee = await selectSql.getEmployeeById(id);
    res.render('select', {
        title: '직원 정보 테이블',
        employee
    })

});

module.exports = router;
