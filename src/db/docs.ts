interface DocumentItem {
  docHeading: string
  documentLink: string
  arrayOfInfo: Array<string>
  id: string
}

export const documents: DocumentItem[] = [
  {
    id: "bbn-is",
    docHeading: "BBN: Informal Spreadsheet",
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
    docHeading: "BBN: Rigorous Spreadsheet",
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
  }
]