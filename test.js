const tape = require('tape');
const supertest = require('supertest');
const app = require('src/app.js');
//Route Test 😜😩




test("Initialize", (t)=>  {
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end();
});



test('All routes should return the expected results', t => {
  supertest(app)
    .get('login/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
test.onFinish(() => process.exit(0));
