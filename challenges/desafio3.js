// db.produtos.find({ vendidos: 137 }, { nome: 1, vendidos: 1, _id: 0 }).pretty();
// ou
db.produtos.find({}, { nome: true, vendidos: true, _id: false })
  .sort({ vendidos: -1 }).limit(1).pretty(); // forma dinamica
