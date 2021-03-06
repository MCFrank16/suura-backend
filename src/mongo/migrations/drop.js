import connection, { connected, error, disconnected, termination } from '..';
import { User, Session, IP } from '../models';

connection.on('connected', async () => {
  console.log(connected(`truncating tables at database ${connection.db.databaseName}!`));
  await User.remove({}, err => {
    if (err) {
      console.log(error('Table User not truncated', err.message));
    } else {
      console.log(termination('Table User truncated'));
    }
  });
  await Session.remove({}, err => {
    if (err) {
      console.log(error('Table Session not truncated', err.message));
    } else {
      console.log(termination('Table Session truncated'));
    }
  });
  await IP.remove({}, err => {
    if (err) {
      console.log(error('Table IP not truncated', err.message));
    } else {
      console.log(termination('Table IP truncated'));
    }
  });
  connection.close(err => {
    if (err) {
      console.log(error('Can not close DB connection', err.message));
    } else {
      console.log(disconnected('DB connection closed'));
    }
  });
});
