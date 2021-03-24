const express = require('express')
// require => 내 프로젝트 속에서 express 폴더를 찾아 실행 (node-modules=>express)
const app = express();
// app 변수 안에 express 함수를 실행
const PORT = 4000;
const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("hi! homE!")
}
function handleProflie(req, res) {
  res.send('my profile')
}
app.get('/', handleHome);
app.get('/profile', handleProflie);

app.listen(PORT, handleListening);