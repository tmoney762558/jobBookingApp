import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers("authorization");

  if (!token) {
    return res.status(404).json({ message: "Token not provided." });
  }

  // Remove the fallback from production
  jwt.verify(token, process.env.JWT_SECRET || "randomText", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token could not be verified." });
    }

    req.userId = decoded.id;
    next();
  });
};

export default authMiddleware;
