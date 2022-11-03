#test

## 10주차 실습 실행 방법
1. 레포지터리복사 
    >1. git clone <원격저장소 주소>
    >2. 해당 폴더 이동 (Ex) cd week09
    >3. npm install
    >4. npm run start

2. database/sql.js 파일 내부에서 본인의 데이터베이스 정보 입력
<pre>
<code>
    const pool = mysql.createPool(process.env.JAWSDB_URL ??{
        host : 'localhost',
        user : 'root',
        database :'week9',
    
    })