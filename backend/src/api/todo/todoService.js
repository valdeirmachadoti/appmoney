const Todo = require("./todo")
const tratamentoErros = require("../common/tratamentoErros")
const todo = require("./todo")

//Criando a API REST
Todo.methods(["get", "post", "delete", "put", "dispath"])
Todo.updateOptions({ new: true, runValidators: true })

//Chamando o tratamento de erros depois que executar (PUT e POST)
Todo.after("post", tratamentoErros).after("put", tratamentoErros)

Todo.route("totalpendecias", (req, res, next) => {
  Todo.aggregate([
    {
      $group: { _id: null, totalpendecias: { $sum: "$valor" } },
    },
  ])
})

Todo.route("totalpendecias", (req, res, next) => {
  Todo.aggregate([{
      $project: {soma: { $sum: "$valor" }}
    }, {
      $group: { _id: null, soma: { $sum: "$soma" }}
    }, {
        $project: {_id: 0, soma: 1}
    }]).exec((error, results) => {
        if(error){
            res.status(500).json({errors: [error]})
        }else {
            res.json(results[0] || {soma: 0})
        }
    })
})




module.exports = Todo
