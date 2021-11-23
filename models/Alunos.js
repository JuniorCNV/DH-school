const Sequelize = require('sequelize');
const database = require('../config/database');

const Aluno = database.define('Aluno', {
    id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey : true,
    },
    nome:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    sobrenome: Sequelize.STRING,
    ano_matricula: Sequelize.INTEGER,
},{
    timestamps: false,
    tableName: 'alunos'
});

module.exports = Aluno;