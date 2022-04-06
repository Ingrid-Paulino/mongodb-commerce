db.produtos
  .find(
    {
      valoresNutricionais: {
        $elemMatch: { tipo: "calorias", percentual: { $gte: 30, $lte: 40 } },
      },
    },
    { nome: 1, _id: 0 },
  )
  .pretty();

  db.produtos.find({ valoresNutricionais: { $elemMatch: { tipo: "calorias", percentual: { $gte: 30, $lte: 40 } } } }, { nome: 1, _id: 0 }).pretty();
