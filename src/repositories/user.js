import UserModel from "../models/user";

const insertOne = async user => {
  try {
    return await UserModel.create(user);
  } catch (error) {
    throw new Error(error.message);
  }
};

const bringAll = async () => {
  try {
    return await UserModel.find({})
      .select("name email")
      .exec();
  } catch (error) {
    throw new Error(error.message);
  }
};

const bringOneByEmail = async email => {
  try {
    return await UserModel.findOne({ email: email }).exec();
  } catch (error) {
    throw new Error(error.message);
  }
};

const bringOneById = async id => {
  try {
    return await UserModel.findById(id).exec();
  } catch (error) {
    throw new Error(error.message);
  }
};

const changeOne = async (id, user) => {
  try {
    return await UserModel.updateOne({ _id: id }, user).exec();
  } catch (error) {
    throw new Error(error.message);
  }
};

const eraseOne = async id => {
  try {
    return await UserModel.deleteOne({ _id: id }).exec();
  } catch (error) {
    throw new Error(error.error);
  }
};

export {
  insertOne,
  bringAll,
  bringOneByEmail,
  bringOneById,
  changeOne,
  eraseOne
};
