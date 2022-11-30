import express from 'express';
import { hash, compare } from 'bcrypt';
import { User } from '../../db/models';

const regRouter = express.Router();

regRouter.post('/auth', async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) return res.status(400).json({ message: 'Все поля обязательны для заполнения!' });
  // ищем user в БД по email
  const user = await User.findOne({ where: { name } });
  // если не находим сообщаем что введенные им данные неверны
  if (!user) return res.status(400).json({ message: 'Неверно введена почта или пароль пользователя' });

  // сравниваем введеный пароль и захэшированый пароль из БД;
  const isPassValid = compare(password, user.password);
  // если не сходится сообщаем что введенные им данные неверны
  if (!isPassValid) return res.status(400).json({ message: 'Неверно введён логин или пароль пользователя' });

  req.session.user = { id: user.id, email: user.email };
  //   console.log(req.session.user);

  return res.sendStatus(200);
});

regRouter.post('/reg', async (req, res) => {
  const { name, email, password } = req.body;// забираем все нужные свойства;
  // console.log(req.body);
  // если user ввел только пароль или только логин возвращаем сообщение которое покажем под формой
  if (!name || !email || !password) return res.status(400).json({ message: 'Все поля должны быть заполнены' });
  // пароль был введен? тогда хэшируем его
  const hashPassword = await hash(password, 10);

  const [user, isCreated] = await User.findOrCreate({ // метод ищет в базе и если не нахит зап-ет
    // возвращает при этом найденный обьект и false либо созданный объект и true
    where: { email },
    defaults: { name, email, password: hashPassword },
  });

  if (!isCreated) return res.status(400).json({ message: 'Вы уже зарегистрированны, пройдите в авторизацию' });

  req.session.user = { id: user.id, email: user.email };

  res.sendStatus(200);
});

regRouter.get('/logout', (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.redirect('/reg');
});

export default regRouter;
