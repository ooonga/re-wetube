import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
/*
  const express = require('express')
  require => 내 프로젝트 속에서 express 폴더를 찾아 실행 (node-modules=>express)
*/
const app = express();
// app 변수 안에 express 함수를 실행
const PORT = 4000;
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hi! homE!");
const handleProflie = (req, res) => res.send('my profile');

app.use(helmet());
// 보안 관련 미들웨어
app.use(morgan("dev"));
// logging - 접속 활동 기록(모든걸 기록)
app.use(bodyParser.json();
app.use(bodyParser.urlencoded({extended:true}));
// body(form...)의 정보를 서버에서 받도록 도움
app.use(cookieParser());
// cookie에 정보를 저장해서 사용에 도움
app.get('/', handleHome);
app.get('/profile', handleProflie);

app.listen(PORT, handleListening);