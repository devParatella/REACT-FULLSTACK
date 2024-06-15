module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
  });
  return Post;
};

//realizar testes no postman
// {
//   "title": "Título do Post",
//   "postText": "Texto do Post",
//   "username": "Nome do Usuário"
// }