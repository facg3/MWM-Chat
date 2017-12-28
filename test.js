const test = require('tape');
const supertest = require('supertest');
const app = require('./src/app.js');
//Route Test 😜😩




test("Initialize", (t)=>  {
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end();
});

test('login test route', t => {
  supertest(app)
    .get('/login')
    .expect(200)
    .end((err, res) => {
      t.same(res.statusCode,200,'should equal 200');
      t.error(err, 'No error');
      t.end();
    });
});

test('Register test route', t => {
  supertest(app)
    .get('/register')
    .expect(200)
    .end((err, res) => {
      t.same(res.statusCode,200,'should equal 200');
      t.error(err, 'No error');
      t.end();
    });
});
test.onFinish(() => process.exit(0));
