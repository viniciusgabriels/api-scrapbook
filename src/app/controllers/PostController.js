import Post from '../models/Post';

class PostController {
  async index(request, response) {
    const result = await Post.findAll();
    return response.json(result);
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await Post.findByPk(id);

    return response.json(user);
  }

  async store(request, response) {
    const { userId } = request.params;
    const { content } = request.body;

    const user = await Post.create({
      content,
      user_id: userId,
    });

    return response.json(user);
  }

  async update(request, response) {
    const { userId, id } = request.params;
    const { content } = request.body;

    const user = await Post.update(
      {
        content,
        user_id: userId,
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
    const user = await Post.findByPk(id);
    await user.destroy();

    response.sendStatus(202);
  }
}

export default new PostController();
