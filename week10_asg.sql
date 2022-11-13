create database inha;
use inha;

CREATE TABLE BUILDING(
	BNO INT,
    BNAME VARCHAR(15),
    CONSTRAINT PRIMARY KEY PK_BNO (BNO)
);
CREATE TABLE ROOM(
	RNO INT,
    RNAME VARCHAR(10),
    RCAPACITY INT,
    R_BNO INT,
    CONSTRAINT PRIMARY KEY PK_RNO (RNO)
);
ALTER TABLE ROOM
ADD CONSTRAINT FK_RBNO FOREIGN KEY(R_BNO) REFERENCES BUILDING (BNO);

CREATE TABLE DEPT(
	DNO INT,
    DNAME VARCHAR(10),
    DEMAIL VARCHAR(30),
    DPHNUM VARCHAR(15),
    D_RNO INT,
    CONSTRAINT PRIMARY KEY PK_DNO(DNO)
);

ALTER TABLE DEPT
ADD CONSTRAINT FK_DRNO FOREIGN KEY(D_RNO) REFERENCES ROOM(RNO);

CREATE TABLE CLASS(
	CID VARCHAR(10),
    CNAME VARCHAR(15),
    PROFESSOR INT,
    NUMOFPTCS INT,
    C_DNO INT,
    C_RNO INT,
    CONSTRAINT PRIMARY KEY PK_CID (CID)
);
ALTER TABLE CLASS
ADD CONSTRAINT FK_C_DNO FOREIGN KEY(C_DNO) REFERENCES DEPT(DNO);
ALTER TABLE CLASS
ADD CONSTRAINT FK_C_RNO FOREIGN KEY(C_RNO) REFERENCES ROOM(RNO);

CREATE TABLE STUDENTS(
	STUID INT AUTO_INCREMENT,
    SNO INT,
    SNAME VARCHAR(5),
    SEMAIL VARCHAR(30),
    SPHNUM VARCHAR(15),
    MAJOR INT,
    CLUB_ID INT,
    CONSTRAINT PRIMARY KEY PK_STUID (STUID)
);
ALTER TABLE STUDENTS
ADD CONSTRAINT FK_MAJOR FOREIGN KEY(MAJOR) REFERENCES DEPT(DNO);

CREATE TABLE CLUB(
	CLID INT,
    CLNAME VARCHAR(10),
    CL_RNO INT,
    CL_PRESIDENT INT
);

ALTER TABLE CLUB
ADD CONSTRAINT PK_CLID PRIMARY KEY(CLID);
ALTER TABLE CLUB
ADD CONSTRAINT FK_CL_RNO FOREIGN KEY(CL_RNO) REFERENCES ROOM(RNO);
ALTER TABLE CLUB
ADD CONSTRAINT FK_CL_PRESIDENT FOREIGN KEY(CL_PRESIDENT) REFERENCES STUDENTS(STUID);
--

-- students 칼럼 추가 설정
ALTER TABLE STUDENTS
ADD CONSTRAINT FK_CLUB_ID FOREIGN KEY(CLUB_ID) REFERENCES CLUB(CLID);

CREATE TABLE PARTICIPATE_IN(
	PSTUID INT,
    PCID VARCHAR(10)
);
ALTER TABLE PARTICIPATE_IN
ADD CONSTRAINT FK_PSTUID FOREIGN KEY(PSTUID) REFERENCES STUDENTS(STUID);
ALTER TABLE PARTICIPATE_IN
ADD CONSTRAINT FK_PCID FOREIGN KEY(PCID) REFERENCES CLASS(CID);

CREATE TABLE EMPLOYEE(
	EMPID INT AUTO_INCREMENT,
    EMPNAME VARCHAR(5),
    EMPPOS VARCHAR(7),
    EMP_DNO INT,
    CONSTRAINT PRIMARY KEY PK_EMPID (EMPID)
);
ALTER TABLE EMPLOYEE
AUTO_INCREMENT = 1225;
ALTER TABLE EMPLOYEE
ADD CONSTRAINT FK_EMP_DNO FOREIGN KEY(EMP_DNO) REFERENCES DEPT(DNO);

ALTER TABLE CLASS
ADD CONSTRAINT FK_PROFESSOR FOREIGN KEY(PROFESSOR) REFERENCES EMPLOYEE(EMPID);

-- 
INSERT INTO BUILDING VALUES(1, 'MAIN BUILDING');
INSERT INTO BUILDING VALUES(2, 'BUILDING 2');
INSERT INTO BUILDING VALUES(6, 'BUILDING 6');
INSERT INTO BUILDING VALUES(3, '60TH ANNBD');
INSERT INTO BUILDING VALUES(4, 'BUILDING 4');
INSERT INTO BUILDING VALUES(5, 'BUILDING 5');
INSERT INTO BUILDING VALUES(12, 'HITECH');

INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(101, 'ROOM101', 15, 12);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(102, 'ROOM102', 15, 12);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(103, 'ROOM103', 15, 12);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(201, 'ROOM201', 15, 3);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(202, 'ROOM202', 15, 3);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(203, 'ROOM203', 15, 3);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(301, 'ROOM301', 15, 1);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(302, 'ROOM302', 20, 1);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(303, 'ROOM303', 30, 1);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(304, 'ROOM304', 15, 1);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(305, 'ROOM305', 25, 1);

INSERT INTO DEPT(DNO, DNAME, DEMAIL, DPHNUM, D_RNO) VALUES(1, 'ICE', 'ICE@INHA.AC.KR', '032-860-7430', 301);
INSERT INTO DEPT(DNO, DNAME, DEMAIL, DPHNUM, D_RNO) VALUES(2, 'BUS', 'BUS@INHA.AC.KR', '032-860-7730', 302);
INSERT INTO DEPT(DNO, DNAME, DEMAIL, DPHNUM, D_RNO) VALUES(3, 'CSE', 'CSE@INHA.AC.KR', '032-860-7440', 303);
INSERT INTO DEPT(DNO, DNAME, DEMAIL, DPHNUM, D_RNO) VALUES(4, 'COM', 'COM@INHA.AC.KR', '032-860-8790', 304);
INSERT INTO DEPT(DNO, DNAME, DEMAIL, DPHNUM, D_RNO) VALUES(5, 'EDC', 'EDC@INHA.AC.KR', '032-860-7850', 305);

INSERT INTO EMPLOYEE(EMPNAME, EMPPOS,EMP_DNO) VALUES('CWI', 'PROF', 1);
INSERT INTO EMPLOYEE(EMPNAME, EMPPOS,EMP_DNO) VALUES('KCS', 'PROF', 2);
INSERT INTO EMPLOYEE(EMPNAME, EMPPOS,EMP_DNO) VALUES('HWC', 'PROF', 2);
INSERT INTO EMPLOYEE(EMPNAME, EMPPOS,EMP_DNO) VALUES('KJS', 'PROF', 3);
INSERT INTO EMPLOYEE(EMPNAME, EMPPOS,EMP_DNO) VALUES('PJS', 'PROF', 4);
INSERT INTO EMPLOYEE(EMPNAME, EMPPOS,EMP_DNO) VALUES('SYS', 'STAFF', 2);
INSERT INTO EMPLOYEE(EMPNAME, EMPPOS,EMP_DNO) VALUES('YHS', 'PROF', 5);
INSERT INTO EMPLOYEE(EMPNAME, EMPPOS,EMP_DNO) VALUES('SSH', 'STAFF', 1);

INSERT INTO CLASS(CID, CNAME, PROFESSOR, NUMOFPTCS, C_DNO, C_RNO) VALUES('ICE4016', 'DB', 1225, 50, 1, 101);
INSERT INTO CLASS(CID, CNAME, PROFESSOR, NUMOFPTCS, C_DNO, C_RNO) VALUES('BUS3603', 'CRM', 1226, 30, 2, 102);
INSERT INTO CLASS(CID, CNAME, PROFESSOR, NUMOFPTCS, C_DNO, C_RNO) VALUES('CSE4302', 'AI', 1228, 40, 3, 103);
INSERT INTO CLASS(CID, CNAME, PROFESSOR, NUMOFPTCS, C_DNO, C_RNO) VALUES('COM2400', 'ADV', 1229, 30, 4, 201);
INSERT INTO CLASS(CID, CNAME, PROFESSOR, NUMOFPTCS, C_DNO, C_RNO) VALUES('EDC1101', 'EDC', 1231, 20, 5, 202);

INSERT INTO STUDENTS(STUID, SNO, SNAME, SEMAIL, SPHNUM, MAJOR) VALUES(null, 1234, 'KHM', 'AAA@INHA.EDU', '010-1111-2222', 1);
INSERT INTO STUDENTS(STUID, SNO, SNAME, SEMAIL, SPHNUM, MAJOR) VALUES(null, 1212, 'LBG', 'BBB@INHA.EDU', '010-2222-3333', 2);
INSERT INTO STUDENTS(STUID, SNO, SNAME, SEMAIL, SPHNUM, MAJOR) VALUES(null, 1214, 'MGB', 'CCC@INHA.EDU', '010-3333-4444', 3);
INSERT INTO STUDENTS(STUID, SNO, SNAME, SEMAIL, SPHNUM, MAJOR) VALUES(null, 1216, 'LSH', 'DDD@INHA.EDU', '010-4444-5555', 4);
INSERT INTO STUDENTS(STUID, SNO, SNAME, SEMAIL, SPHNUM, MAJOR) VALUES(null, 1218, 'KDG', 'EEE@INHA.EDU', '010-5555-6666', 5);

INSERT INTO PARTICIPATE_IN VALUES(1, 'ICE4016');
INSERT INTO PARTICIPATE_IN VALUES(1, 'BUS3603');
INSERT INTO PARTICIPATE_IN VALUES(4, 'COM2400');
INSERT INTO PARTICIPATE_IN VALUES(5, 'EDC1101');
INSERT INTO PARTICIPATE_IN VALUES(2, 'BUS3603');
INSERT INTO PARTICIPATE_IN VALUES(3, 'CSE4302');

INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(001, 'ROOMB01', 15, 5);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(002, 'ROOMB02', 15, 5);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(003, 'ROOMB03', 15, 5);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(004, 'ROOMB04', 15, 2);
INSERT INTO ROOM(RNO, RNAME, RCAPACITY, R_BNO) VALUES(005, 'ROOMB05', 15, 2);

INSERT INTO CLUB VALUES(1, 'IVA', 1, 3);
INSERT INTO CLUB VALUES(2, 'JUDO', 1, 2);
INSERT INTO CLUB VALUES(3, 'CLIMBING', 1, 4);
INSERT INTO CLUB VALUES(4, 'BOARDGAME', 1, 5);

ALTER TABLE STUDENTS
ADD SPW VARCHAR(10) NOT NULL DEFAULT '1111';

ALTER TABLE EMPLOYEE
ADD EPW VARCHAR(10) NOT NULL DEFAULT '1111';

INSERT INTO EMPLOYEE
VALUES('admin', 'admin', 1, '1111');

UPDATE STUDENTS SET CLUB_ID = 2 WHERE STUID = 2;
UPDATE STUDENTS SET CLUB_ID = 1 WHERE STUID = 3;
UPDATE STUDENTS SET CLUB_ID = 3 WHERE STUID = 4;
UPDATE STUDENTS SET CLUB_ID = 4 WHERE STUID = 5;

