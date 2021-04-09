module.exports = (sequelize, Datatypes) => {


    const Comentario = sequelize.define(
        "Comentario", {
        texto: Datatypes.STRING,
        usuarios_id: Datatypes.INTINER,
        posts_id: Datatypes.INTINER
        }, {
            tableName: "comentarios",
            timestamps: false
        }
    );

    return Comentario;
}