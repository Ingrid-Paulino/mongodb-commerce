// Ordene a coleção produtos pela quantidade de lanches vendidos em ordem crescente e mostre apenas o nome e quantidade de lanches vendidos.

db.produtos.find({}, { nome: true, vendidos: true, _id: false }).sort({ vendidos: 1 }).pretty();
// ou
// db.produtos.find({}, { nome: 1, vendidos: 1, _id: 0 }).sort({ vendidos: 1 }).pretty();
