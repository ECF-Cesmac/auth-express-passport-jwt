import * as UserRepository from "../repositories/user";

const saveOne = async (req, res) => {
  try {
    const { body } = req;
    const user = await UserRepository.insertOne(body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const fetchAll = async (req, res) => {
  try {
    const users = await UserRepository.bringAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const fetchOneByEmail = async (req, res) => {
  try {
    const {
      params: { args }
    } = req;
    const user = await UserRepository.bringOneByEmail(args);
    return res.status(200).json(user);
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchOneById = async (req, res) => {
  try {
    const {
      params: { args }
    } = req;
    const user = await UserRepository.bringOneById(args);
    return res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const modifyOne = async (req, res) => {
  try {
    const {
      body,
      params: { id }
    } = req;
    const user = await UserRepository.changeOne(id, user);

    return res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeOne = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const user = await UserRepository.eraseOne(id);
    return res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {
  saveOne,
  fetchAll,
  fetchOneByEmail,
  fetchOneById,
  modifyOne,
  removeOne
};
