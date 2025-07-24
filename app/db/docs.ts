interface DocumentItem {
  docHeading: string
  documentLink: string
  arrayOfInfo: Array<string>
  id: string
}

export const documents: DocumentItem[] = [
  {
    id: "bbn-is",
    docHeading: "BBN: Informal Spreadsheet (v1)",
    documentLink: "https://docs.google.com/spreadsheets/d/1yHnEMApkMOXJkoFMpRv2Xl4xqyUnrHUdAox9YmhJAa4/edit",
    arrayOfInfo: [
      "This is the informal FG spreadsheet, created after the split from the existing \"FG Expansion Spreadsheet\".",
      `The BBN-IS is used to objectively scale and rank many informal FG numbers such as Low-Endic Eternity
      and The Creator of all Fictional Googology Numbers.`,
      `For ranking rigorous numbers, see the BBN-RS.`
    ],
  },
  {
    id: "bbn-rs",
    docHeading: "BBN: Rigorous Spreadsheet (v1)",
    documentLink: "https://docs.google.com/spreadsheets/d/1IBfGy1qQ5qslxNbu4mZB0QDjzou704WmIAx45vJa-UY/edit",
    arrayOfInfo: [
      `This is the rigorous FG spreadsheet which was originally under the name of the "FG Expansion Spreadsheet",
      but got changed after the split between rigorous & informal fields of Fictional Googology.`,
      `The BBN-RS is used to objectively scale and rank many rigorous and formal FG numbers based on the
      Pata-Metagoogology's abmetricism system called The Final Stretch.`,
      `For ranking rigorous numbers, see the BBN-IS.`
    ],
  },
  {
    id: "bbn-cfgs",
    docHeading: "BBN: Common FG Specification",
    documentLink: "https://docs.google.com/spreadsheets/d/13AkjsuOLgRcmWFnCH_wEuajWeaujhvxAk8Sm-Tpsac4/edit",
    arrayOfInfo: [
      `This is the Common FG Specification, a dual google sheet/doc combo that aims to standardize
      everything in Fictional Googology, from concepts to difficulties to debates.`,
      "Currently it's a WIP with many concepts missing. Please suggest things if you can."
    ],
  },
  {
    id: "bbn-additional",
    docHeading: "BBN: Additional Expansion Charts",
    documentLink: "https://docs.google.com/spreadsheets/d/1o48spBes-bJzfCb12mUf_ID1Sar4N3Uk2Q5kC3aOBKU/edit",
    arrayOfInfo: [
      `The Additional FG Expansion Charts spreadsheet contains more miscellaneous information like the
      Breakology charts and AE and layer aspects.`,
      `This also contains the list of other documents made by other people,
      and more weird things like Ontopolitical spectrums.`,
      "I would love it if you guys help me with the styling since it's pretty ugly right now."
    ],
  },
  {
    id: "bbn-fgexp",
    docHeading: "BBN: FG Expansion Spreadsheet (v2)",
    documentLink: "https://docs.google.com/spreadsheets/d/1iYp6VyEhT5JeENpVRjqs7BT9yJd0l-8kHFX_ct7BZMI/edit",
    arrayOfInfo: [
      `The third revision of the FG Expansion Spreadsheet is a rethought version of the original v1 and v2 variants
      of the spreadsheets taking a, hopefuly better approach.`,
      `This aims to combine rigorous + informal scaling in a way that doesn't cause trouble, and also combines
      many of the aspects from the Additioal FG Expansion Charts spreadsheet.`,
      `Currently, it's very WIP and has just started as of July 4th, 2025. I need your help with this.`
    ],
  },
];