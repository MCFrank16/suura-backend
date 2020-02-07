import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import chai from 'chai';
import server from '../src';

chai.use(chaiHttp);
const { expect } = chai;

describe('Test the server', () => {
  it('server should run on port 3000', done => {
    expect(server.address().port).eql(3000);
    done();
  });
});
