// Delete os lanches que tenham menos de 50 curtidas e retorne o nome dos lanches que restaram no banco.

db.produtos.remove({ curtidas: { $lt: 50 } });
db.produtos.find().pretty();
