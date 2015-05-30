belegeSchema = new SimpleSchema({
  discription: {
    type: String,
    label: "Title",
    optional: true

  },
  amount: {
    type: Number,
    label: "Betrag",
    optional: true

  },
  category: {
    type: String,
    label: "Kategorie",
    optional: true

  },
  authorID: {
    type: String,
    label: "Autor",
    optional: true

  },
  billable: {
    type: Boolean,
    label: "Billable",
    optional: true

  },

  projectId: {
    type: String,
    label: "Billable",
    optional: true
  },

tax: {
    type: Number,
    label: "Tax",
    optional: true
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
