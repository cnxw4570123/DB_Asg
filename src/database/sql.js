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
    },
    getEmployee: async ()=> {
        const [rows] = await promisePool.query(`select * from employee`);
        return rows;
    }
};

export const deleteSql = {
    deleteStudents: async (data) => {
        console.log("deleteSql.deleteStudents:" + data.STUID);
        const sql = `delete from students where stuid = ${data.STUID}`;
        
        await promisePool.query(sql);
    }
}


