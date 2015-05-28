projekteSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
  },

  startdate: {
    type: Date,
    label: "startdate",
    optional: true
    },

projectId: {
    type: String,
    label: "projectID",
    optional: true
  },

  //  endDate: {
  //   type: String,
  //   label: "endDate",
  // },

  betrag: {
    type: Number,
    label: "Betrag"
  },

  jobnummer: {
    type: String,
    label: "jobnummer"
  },

  // author: {
  //   type: String,
  //   label: "Author",
  //   optional: true
  // },

   draft: {
    type: Boolean,
    label: "Draft",
    optional: true
  },
 
 team: {
        type: [Object],
         optional: true
    },
    "team.$.name": {
        type: String
    },
    "team.$.teamID": {
        type: String,
    },

    
  akquise: {
        type: [Object],
         optional: true
    },
    "akquise.$.name": {
        type: String
    },
    "akquise.$.prozent": {
        type: Number,
        max:100
    },

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
