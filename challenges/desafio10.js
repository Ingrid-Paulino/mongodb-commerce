db.produtos
  .find(
    {
      "valoresNutricionais.1.tipo": "calorias",
      "valoresNutricionais.1.quantidade": { $gte: 30, $lte: 40 },
    },
    { nome: 1 },
  )
  .pretty(); // n deu certo
