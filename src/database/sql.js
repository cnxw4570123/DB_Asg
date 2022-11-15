import mysql from "mysql2";

// 데이터베이스 연결
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

// async / await 사용
const promisePool = pool.promise();

// selec query
export const selectSql = {
  getUsers: async () => {
    const [rows] = await promisePool.query(`select * from students`);

    return rows
  },
  getClassInfo: async (data) => {
    // 각 행에 대해서 변화하게 (#EACH로 받아오면 될 것 같긴함)
    const [rows] = await promisePool.query(`SELECT CID ,CNAME,EMPNAME, C_DNO, C_RNO, NUMOFPTCS - COUNT(*) AS 'CLEFT' FROM CLASS, PARTICIPATE_IN, EMPLOYEE WHERE PCID = CID AND PROFESSOR = EMPID GROUP BY PCID`)
    return rows;
  }
}

export const insertSql = {
  insertClass: async(data) =>{
    const result = await promisePool.query(`INSERT INTO PARTICIPATE_IN VALUES(${data.stuid},${data.cid})`);
    return result;
  }
}