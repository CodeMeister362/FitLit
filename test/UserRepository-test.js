import { assert } from 'chai';
import UserRepository from '../src/UserRepository';
import userMockData from '../src/data/user-mock-data';


describe('User Repository', () => {

  let user

  beforeEach(() => {
   user = new UserRepository(userMockData)
  });

  it('should be a function', () => {
    assert.isFunction(UserRepository);
  });

  it('should return a user based on the id', () => {
    assert.deepEqual(user.getUserData(1), user.data.users[0])
    assert.deepEqual(user.getUserData(7), undefined)
  });

  it('should return average steps of all users', () => {
    assert.equal(user.getAverageSteps(), 6333)
  });

  it('should return the first name of the user', () => {
    assert.equal(user.getFirstName(1), 'Trystan')
    assert.equal(user.getFirstName(8), undefined)
  });
});

