'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

console.log(`Iniciando configuração do Sequelize para o ambiente: ${env}`);

let sequelize;
if (config.use_env_variable) {
  console.log(`Usando variável de ambiente: ${process.env[config.use_env_variable]}`);
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  console.log(`Conectando ao banco de dados: ${config.database} com usuário: ${config.username}`);
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

console.log('Lendo arquivos de modelo do diretório atual...');
fs
  .readdirSync(__dirname)
  .filter(file => {
    const isModelFile = (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
    console.log(`Arquivo encontrado: ${file}, é um modelo? ${isModelFile}`);
    return isModelFile;
  })
  .forEach(file => {
    console.log(`Importando modelo a partir do arquivo: ${file}`);
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
    console.log(`Modelo ${model.name} importado com sucesso.`);
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    console.log(`Associando modelo: ${modelName}`);
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log('Configuração do Sequelize concluída.');

module.exports = db;
