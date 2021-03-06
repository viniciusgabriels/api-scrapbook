import User from '../models/User';

class UserController {
  async index(request, response) {
    const result = await User.findAll();
    return response.json(result);
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id);

    return response.json(user);
  }

  async store(request, response) {
    const { name, email } = request.body;

    const user = await User.create({
      name,
      email,
    });

    return response.json(user);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email } = request.body;

    const user = await User.update(
      {
        name,
        email,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );

    return response.json(user);
  }

  async delete(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id);
    await user.destroy();

    response.sendStatus(202);
  }
}

export default new UserController();
