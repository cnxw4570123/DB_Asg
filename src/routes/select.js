// Copyright 2021 kms
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import express from "express";
import { selectSql } from "../database/sql";
import { insertSql } from "../database/sql";
import { updateSql } from "../database/sql";
// TODO
// sql import

const router = express.Router();
let isfirst = true;
router.get('/', async function (req, res) {
    // TODO
    // class 정보 불러오기
    const participate_in = await selectSql.getParticipate_in(req.cookies.user);
    let classInfo = await selectSql.getClassInfo(req.cookies.user);
    // const ptcsNum = await selectSql.getPtcsNum();
    // console.log(ptcsNum);
    // console.log(classInfo);
    // console.log('/sugang')

    if (req.cookies.user) {
        // TODO
        // 불러온 class 정보 같이 넘겨주기
        if (classInfo.length == 0 && isfirst) {
            classInfo = await selectSql.getFirstInfo();
            console.log(classInfo);
            res.render('select', {
                user: req.cookies.user,
                title: '수강신청',
                title2: '현재 수강상태',
                participate_in,
                classInfo
            });
        } else {
            res.render('select', {
                user: req.cookies.user,
                title: '수강신청',
                title2: '현재 수강상태',
                participate_in,
                classInfo
            });
        }

    } else {
        res.render('/')
    }

});

router.post('/', async function (req, res) {
    console.log('수강');
    const data = {
        stuid: req.cookies.user.stuid,
        cid: req.body.cid
    }
    isfirst = false;
    console.log(data);
    await insertSql.insertClass(data);
    await updateSql.updateClass(data);
    res.redirect('sugang');
});
module.exports = router;