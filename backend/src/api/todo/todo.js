const restful = require("node-restful");
const mongoose = restful.mongoose;

// Criando os Schemas
const todoSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
  valor: { type: Number, required: true },
  status: {type: Boolean, required: true, default: false},
  datacadastro: {type: Date, default: Date.now}
}); 

module.exports = restful.model('Todo', todoSchema)
