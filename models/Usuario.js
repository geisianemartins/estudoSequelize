module.exports = (sequelize, Datatypes) => {

    //define(nomeModel, colunas, config)
    const Usuario = sequelize.define(
        "Usuario", {
        nome: Datatypes.STRING,
        email: Datatypes.STRING,
        senha: Datatypes.STRING
        }, {
            tableName: "usuarios",
            timestamps: false
        }
    );

    return Usuario;
}