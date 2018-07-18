import jwt from "jsonwebtoken";

const signin = (req, res) => {
  const { user } = req;
  const payload = {
    sub: user._id,
    name: user.name
  };
  const token = jwt.sign(payload, "mySecretKey", (err, token) => {
    if (err)
      return res.status(400).json({ message: "could not generate token" });
    return res.status(200).json({ token: token });
  });
};

export { signin };
