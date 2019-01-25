let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

const SERVER_URL = 'http://myapp:8000';

chai.use(chaiHttp);

describe('Users', () => {
    it('it should GET all the users', (done) => {
        chai.request(SERVER_URL)
            .get('/api/users')
            .end((err, res) => {
                if(err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                }
            });
        });
});