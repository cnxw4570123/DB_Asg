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
    getBuilding: async () => {
        const [rows] = await promisePool.query(`select * from building`);
        return rows;
    },
    getRoom: async () => {
        const [rows] = await promisePool.query(`select * from room`);
        return rows;
    },
    getDepartment: async () => {
        const [rows] = await promisePool.query(`select * from DEPT`);
        return rows;
    },
    getClass: async () => {
        const [rows] = await promisePool.query(`select * from class`);
        return rows;
    },
    getStudents: async () => {
        const [rows] = await promisePool.query(`select * from students`);
        return rows;
    },
    getClub: async () => {
        const [rows] = await promisePool.query(`select * from club`);
        return rows;
    }
}


export const insertSql = {
    setStudents: async (data) => {
        const sql = `insert into students values(
            null, ${data.sno}, "${data.sname}","${data.semail}","${data.sphnum}",
            ${data.smajor},${data.sclubid})`;

        await promisePool.query(sql);
    }
}

export const updateSql = {
    updateStudents: async (data) => {

        const sql = `update students set sno = ${data.sno}, sname = "${data.sname}", semail = "${data.semail}", 
        sphnum = "${data.sphnum}", major = ${data.smajor}, club_id =  ${data.sclubid} where STUID=${data.stuid}`;

        await promisePool.query(sql);
    }
}