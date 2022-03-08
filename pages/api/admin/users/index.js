import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import User from '../../../../models/User';
import db from '../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const orders = await User.find({});
  await db.disconnect();
  res.send(orders);
});

export default handler;
