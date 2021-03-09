const {User, Score} = require("./model.js").models;

exports.list = async (rl) => {

  let scores = await Score.findAll({
    include: [{ model: User, as: 'user'}],
    order: [["wins", "DESC"]]
  });

  scores.forEach(
    score => rl.log(`${score.user.name}|${score.wins}|${score.createdAt.toUTCString()}`)
  );
}