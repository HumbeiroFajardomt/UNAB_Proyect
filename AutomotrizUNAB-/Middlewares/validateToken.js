import jwt from "jsonwebtoken";

const ACCESS_TOKEN =
  "e13b1b700bce0f5bcdd9ca6c0af78cc70266b7323d7d6f25a1714e64f6ec828c9c777ed0eeed39622fbfe46979c57a68cb532ab33082488be86708e8dd53c33e";

export default (req, res, next) => {
  const { token } = req.headers;

  const user = jwt.verify(token, ACCESS_TOKEN);

  if (user == null) {
    res.sendStatus(401);
    return;
  }
  req.user = user;
  next();
};
