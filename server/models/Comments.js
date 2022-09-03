// this file contain post api where we can write the feild name which is same as data base feild name 
module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        commentBody: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return Comments;
}