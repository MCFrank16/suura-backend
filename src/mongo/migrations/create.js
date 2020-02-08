import connection, { connected, error, disconnected, termination } from '..';
import { User } from '../models';
import Util from '../../utils';

const {
  SUPER_PASSWORD,
  SUPER_USERNAME,
  SUPER_EMAIL,
  password = Util.hashPassword(SUPER_PASSWORD),
} = process.env;
connection.on('connected', async () => {
  console.log(connected(`seeding tables at database ${connection.db.databaseName}!`));
  try {
    await User.create({ email: SUPER_EMAIL, username: SUPER_USERNAME, role: 'superadmin', password, name: 'Administrator' });
    console.log(termination('Tables seeded successfully!'));
  } catch (err) {
    console.log(error('Seeds error', err.message));
  }
  connection.close(err => {
    if (err) {
      console.log(error('Can not close DB connection', err.message));
    } else {
      console.log(disconnected('DB connection closed'));
    }
  });
});
