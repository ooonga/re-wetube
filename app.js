import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { lacalsMiddleware } from "./middlewares";
/*  const express = require('express')
    require => 내 프로젝트 속에서 express 폴더를 찾아 실행 (node-modules=>express)  */

const app = express();
// app 변수 안에 express 함수를 실행
app.set("view engine", "pug");
app.use(helmet());
// 보안 관련 미들웨어
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// body(form...)의 정보를 서버에서 받도록 도움 ==body-parser
app.use(cookieParser());
// cookie에 정보를 저장해서 사용에 도움
app.use(morgan("dev"));
// logging - 접속 활동 기록(모든걸 기록)

app.use(lacalsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
// use == 관련 라우터 경로로 접속하면 라우터 전체를 사용. 

export default app;