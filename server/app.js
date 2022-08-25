const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const indexRoute = require('./routes/index');
const { sequelize } = require('./models/index');

const app = express();
const port = 4000;

// cors 처리
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// 응답 확인
app.use(
  morgan('      :method :url :status :res[content-length] - :response-time ms')
);

// 파싱
app.use(express.json());

// 라우터 분기
app.use('/', indexRoute);

// 서버 생성
const server = app.listen(port, () => {
  console.log(`✅ ${port} server is ok`);
});

// DB
sequelize
  .sync({ force: false })
  .then(() => console.log(`✅ DB is ok`))
  .catch(err => console.error(err));

module.exports = server;
