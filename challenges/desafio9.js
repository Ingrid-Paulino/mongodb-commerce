// Retorne o nome de todos os lanches que possuam calorias abaixo de 500.

db.produtos
  .find({}, { nome: 1 })
  .arrayfilter([
    {
      $and: [
        { "valoresNutricionais.tipo": "calorias" },
        { "valoresNutricionais.quantidate": { $lt: 500 } },
      ],
    },
  ])
  .pretty();
