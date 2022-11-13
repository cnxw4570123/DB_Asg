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
    getClassInfo: async (id) => {
        const [rows] = await promisePool.query(`SELECT STUID, SNO, SNAME, CID, CNAME FROM PARTICIPATE_IN, CLASS, STUDENTS  WHERE SNO = ${id} AND PSTUID = STUID AND PCID = CID`);
        return rows;
    },
    getStudents: async () => {
        const [rows] = await promisePool.query(`SELECT SPW, SNO, SNAME, SEMAIL, SPHNUM, DNAME, CLNAME FROM STUDENTS LEFT JOIN DEPT ON MAJOR = DNO LEFT JOIN CLUB ON CLID = CLUB_ID`);
        return rows;
    },
    getEmployee: async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        return rows;
    },

    getStudentsById: async (id) => {
        const [rows] = await promisePool.query(`SELECT STUID, SNO, SPW, SNAME, SEMAIL, SPHNUM, DNAME, CLNAME FROM STUDENTS LEFT JOIN DEPT ON STUDENTS.MAJOR = DEPT.DNO LEFT JOIN CLUB ON STUDENTS.CLUB_ID = CLUB.CLID WHERE SNO = ${id}`);
        return rows;
    },
    getEmployeeById: async (id) => {
        const [rows] = await promisePool.query(`SELECT EMPID, EPW, EMPNAME, EMPPOS, DNAME FROM EMPLOYEE, DEPT WHERE EMPID = ${id} AND EMP_DNO = DNO`);
        return rows;
    },
    getClassInfoById: async (id) => {
        const [rows] = await promisePool.query(`SELECT CID, CNAME FROM PARTICIPATE_IN, CLASS, STUDENTS WHERE SNO = ${id} AND PSTUID = STUID AND PCID = CID`);
        return rows;
    }
};

export const deleteSql = {

    deleteParIn: async (data) => {
        const sql = `DELETE FROM PARTICIPATE_IN WHERE PSTUID = ${data.stuid}`;

        await promisePool.query(sql);
    }
}



