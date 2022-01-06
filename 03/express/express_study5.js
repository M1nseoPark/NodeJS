const express = require('express');  
const app = express();   

app.use(function (err, req, res, next) {   // 오류 처리를 위한 미들웨어 함수
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000);