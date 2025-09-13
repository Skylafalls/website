interface BBNRole {
  name: string;
  description: string;
  requirements: string[];
}

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
      "A Collaborator must not to disregard other Collaborators and their ideas and suggestions, as all members of the BBN Foundation are on the same level. They also must be neutral and understanding when it comes to such ideas.",
      "A Collaborator should be interested in the project's state and developement and must not be actively refusing to contribute or be hiding.",
      "Requirements from the BBN Spectator roles apply.",
    ],
  },
  maintainer: {
    name: "maintainer",
    description: "A BBN Maintaner (also as the name suggests), actively maintains, organize, and manages the project and its state and direction. They're usually available and active although could work on other projects.",
    requirements: [
      "A Maintainer must be consistently active and available throughout the day. This is a subjective requirement, and can be excused by real-life situations such as school and work.",
      "A Maintainer cannot try to use their higher authority in order to intimdiate other maintainers/collaborators from collaborating on the project.",
      "Maintainers should not be trying to divert work to other maintainers/collaborators unless the burden of load is excessive, as you are expected to actively maintain the project.",
      "Maintainers must log any changes on the BBN's changelog document.",
      "Requirements from the BBN Collaborator role apply.",
    ],
  },
} as const satisfies Record<string, BBNRole>;
