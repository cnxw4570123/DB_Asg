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
// TODO
// sql import

const router = express.Router();

router.get('/', async function (req, res) {
    // TODO
    // class 정보 불러오기
    const classInfo =  await selectSql.getClassInfo();
    if (req.cookies.user) {
        // TODO
        // 불러온 class 정보 같이 넘겨주기
        res.render('select', { 
            user: req.cookies.user,
            title: '수강신청',
            classInfo
         });
    } else {
        res.render('/')
    }

});

module.exports = router;