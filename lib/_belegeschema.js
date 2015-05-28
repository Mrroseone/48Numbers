belegeSchema = new SimpleSchema({
  discription: {
    type: String,
    label: "Title",
  },
  amount: {
    type: Number,
    label: "Betrag"
  },
  category: {
    type: String,
    label: "Kategorie"
  },
  authorID: {
    type: String,
    label: "Autor"
  },
  billable: {
    type: Boolean,
    label: "Billable"
  }

  // nonBillable: {
  //       type: [Object]
  //   },
  //   "nonBillable.$.name": {
  //       type: String
  //   },
  //   "nonBillable.$.cost": {
  //       type: Number
  //   }
});
