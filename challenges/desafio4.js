// Retorne os lanches que tiveram vendas maiores que 50 e menores que 100. Mostre apenas o nome e quantidade de lanches vendidos. Ordene por quantidade de lanches vendidos em ordem crescente.

// db.produtos.find({ and: [ {vendidos: {$gte: 50}}, {vendidos: {$lt: 100}} ]}, {nome: 1, vendidos: 1, _id: 0}).sort(vendidos: 1).pretty();

db.produtos.find({ vendidos: { $gte: 50, $lt: 100 } }, { nome: 1, vendidos: 1, _id: 0 })
  .sort({ vendidos: 1 }).pretty();
