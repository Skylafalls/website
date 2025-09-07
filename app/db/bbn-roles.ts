export const roles = {
  spectator: {
    name: "spectator",
    description: `A BBN Spectator can observe (and sometimes) comment on all public BBN projects but cannot collaborate or develop in such projects. They are also not allowed to access internal/secret projects.`,
    requirements: [
      "A BBN Spectator must not cause substantial disruption to the ongoing work that occurs within the project. This is subjective, but must not be overly leniant/strict.",
    ],
  },
  collaborator: {
    name: "collaborator",
    description: `A BBN Collaborator (as the name suggests), collaborates with the BBN Foundation in relation to its projects. They occasonially collab and work on some of the projects they are assigned to and others but aren't necessarily active.`,
    requirements: [
      "A Collaborator must abide by the platform's rules and guidelines on the place they are collaborating on. For example, a Collaborator working on Discord must abide by Discord's Terms of Service and Community Guidelines.",
      "A Collaborator must not to disregard other Collaborators and their ideas and suggestions, as all members of the BBN Foundation are on the same level.",
      "A Collaborator should be interested in the project's state and developement and must not be actively refusing to contribute or be hiding.",
      "Requirements from the BBN Spectator roles apply.",
    ],
  },
  maintainer: {
    name: "maintainer",

  },
};
