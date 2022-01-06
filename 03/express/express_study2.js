const express = require('express');   // express 불러오기
const app = express();   // app 변수에 할당

app.set('port', process.env.PORT || 8080);   // 서버가 실행될 포트 지정

// app.get(주소, 라우터) - 주소에 대한 get 요청이 올 때 어떤 응답을 할지
app.get('/', (req, res) => {   
    res.sendFile(__dirname + '/index.html');
});

// 포트 연결하고 서버 실행
app.listen(app.get('port'), () => {   
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
})