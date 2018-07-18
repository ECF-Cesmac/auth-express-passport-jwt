const home = (req, res) => {
  return res.status(200).json({ message: "you are is home" });
};

export { home };
