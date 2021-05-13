import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      cpf: Yup.number().required().min(6),
      phone: Yup.number().required().min(6),
      zipcode: Yup.number().min(6),
      state: Yup.string().min(6),
      city: Yup.string().min(6),
      district: Yup.string().min(6),
      adress: Yup.string().min(6),
      number: Yup.number().min(1),
      complement: Yup.string().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { 
      id, 
      name, 
      email,
      password, 
      cpf, 
      phone, 
      zipcode, 
      state, 
      city, 
      district, 
      adress, 
      number, 
      complement, 
      provider } = await User.create(req.body);

    return res.json({
      id, 
      name, 
      email,
      password, 
      cpf, 
      phone, 
      zipcode, 
      state, 
      city, 
      district, 
      adress, 
      number, 
      complement, 
      provider
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) => {
          oldPassword ? field.required() : field;
        }),
      confirmPassword: Yup.string().when('password', (password, field) => {
        password ? field.required().oneOf([Yup.ref('password')]) : field;
      }),
      cpf, 
      phone, 
      zipcode, 
      state, 
      city, 
      district, 
      adress, 
      number, 
      complement 
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password not match.' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      cpf, 
      phone, 
      zipcode, 
      state, 
      city, 
      district, 
      adress, 
      number, 
      complement,
      provider
    });
  }
}

export default new UserController();