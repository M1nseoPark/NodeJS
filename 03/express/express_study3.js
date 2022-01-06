const express = require('express');  
const app = express();   

app.get('/', function (req, res, next) {   
    res.send('Hello World!');
    next();
});

// 서버가 요청을 받을 때마다 거침 - LOGGED라는 메시지 콘솔에 출력됨
const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};

app.use(myLogger);   // 미들웨어 사용

app.listen(8080);