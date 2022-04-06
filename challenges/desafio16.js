// Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac.

db.produtos.updateMany(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: ISODate("2022-04-06T19:00:18.965Z") } },
);

db.produtos.updateMany(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: true } },
);

db.produtos
  .find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 })
  .pretty();
