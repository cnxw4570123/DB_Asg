import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'inha',
        password: '12152294',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

export const selectSql = {
    // 학생 or 직원에 맞는 정보 출력하도록 join 학생 -> 동아리 정보, 학과 정보같이 출력; 수강정보는 따로 본인 수강 테이블
    // 직원 -> 부서정보 join
    // admin용 모든 학생 조회
    getClubForDel: async () => {
        const [rows] = await promisePool.query(`select * from club`);
        return rows;
    },
    getDeptForDel: async () => {
        const [rows] = await promisePool.query(`select * from DEPT`);
        return rows;
    },
    getClassForDel: async () => {
        const [rows] = await promisePool.query(`select * from class`);
        return rows;
    },
    getStudentsForDel: async (id) => {
        const [rows] = await promisePool.query(`select stuid, sno, spw, sname, semail, sphnum, dname, clname club from students, dept, club where sno = ${id} and major = dno and club_id = clid`);
        return rows;
    },

    getStudents: async (id) => {
        const [rows] = await promisePool.query(`select stuid, sno, spw, sname, semail, sphnum, dname, clname club from students, dept, club where sno = ${id} and major = dno and club_id = clid`);
        return rows;
    },
    getEmployee: async (id) => {
        const [rows] = await promisePool.query(`select empid, epw, empname, emppos, dname from employee, dept where empid = ${id} and emp_dno = dno`);
        return rows;
    },
    getClassInfo: async (id) => {
        const [rows] = await promisePool.query(`select cid, cname from participate_in, class  where pstuid = ${id} and pcid = cid`);
        return rows;
    }
};

export const deleteSql = {
    // 학생, 동아리 삭제 가능하게
    deleteStudents: async (data) => {
        console.log("deleteSql.deleteStudents:" + data.STUID);
        const sql = `delete from students where stuid = ${data.STUID}`;

        await promisePool.query(sql);
    }
}


