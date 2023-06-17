export enum GradingMethod {
  SCALE2,
  SCALE3,
}

export interface GradingOption {
  name: string;
  frequency: string;
  gradingMethod: GradingMethod;
  allowAlternative: boolean;
}

export interface RoomType {
  name: string;
  gradingOptionNames: string[];
}

export interface Tour {
  name: string;
  rooms: { typeName: string; count: number }[];
}

export interface RoomGrading {
  tourName: string;
  roomName: string;
  roomType: string;
  grades: { optionName: string; grade: number }[];
}

export const ROOM_TYPES: RoomType[] = [
  {
    name: "Allgemeiner Unterrichtsraum",
    gradingOptionNames: [
      "Fußböden",
      "Abfallbehälter leeren",
      "Andtuch-/Seifenspender auffüllen",
      "Aufstuhlen",
      "Kreideablage",
      "unbestellte Tischpberflächen",
      "Waschbecken",
      "Griffspuren",
    ],
  },
  {
    name: "Hortraum",
    gradingOptionNames: [
      "Fußböden",
      "Abfallbehälter leeren",
      "Andtuch-/Seifenspender auffüllen",
      "Aufstuhlen",
      "Kreideablage",
      "Waschbecken",
      "Griffspuren",
    ],
  },
  {
    name: "Verwaltungsraum/Bibliothek",
    gradingOptionNames: [
      "Fußböden",
      "Abfallbehälter leeren",
      "Andtuch-/Seifenspender auffüllen",
      "Waschbecken",
      "Griffspuren",
    ],
  },
  { name: "Verkehrsfläche", gradingOptionNames: ["Fußböden"] },
  {
    name: "Eingangszone",
    gradingOptionNames: ["Fußböden"],
  },
  { name: "Sanitärraum/Umkleide", gradingOptionNames: ["Fußböden"] },
  {
    name: "Aula",
    gradingOptionNames: [
      "Fußböden",
      "Abfallbehälter leeren",
      "Fensterbänke (abgeräumt)",
      "Kabelkanäle",
    ],
  },
  {
    name: "Speiseraum",
    gradingOptionNames: ["Fußböden", "Abfallbehälter leeren"],
  },
  {
    name: "Lehrküche",
    gradingOptionNames: ["Fußböden", "Abfallbehälter leeren"],
  },
  {
    name: "Sportbereiche",
    gradingOptionNames: ["Fußböden", "Abfallbehälter leeren"],
  },
];

export const GRADING_OPTIONS: GradingOption[] = [
  {
    name: "Fußböden",
    frequency: "1x wöchentlich",
    gradingMethod: GradingMethod.SCALE3,
    allowAlternative: false,
  },
  {
    name: "Abfallbehälter leeren",
    frequency: "1x wöchentlich",
    gradingMethod: GradingMethod.SCALE2,
    allowAlternative: false,
  },
  {
    name: "Andtuch-/Seifenspender auffüllen",
    frequency: "1x wöchentlich",
    gradingMethod: GradingMethod.SCALE2,
    allowAlternative: false,
  },
  {
    name: "Aufstuhlen",
    frequency: "1x wöchentlich",
    gradingMethod: GradingMethod.SCALE2,
    allowAlternative: true,
  },
  {
    name: "Kreideablage",
    frequency: "2x wöchentlich",
    gradingMethod: GradingMethod.SCALE2,
    allowAlternative: false,
  },
  {
    name: "unbestellte Tischpberflächen",
    frequency: "2x wöchentlich",
    gradingMethod: GradingMethod.SCALE2,
    allowAlternative: false,
  },
  {
    name: "Waschbecken",
    frequency: "2x wöchentlich",
    gradingMethod: GradingMethod.SCALE2,
    allowAlternative: false,
  },
  {
    name: "Griffspuren",
    frequency: "1x wöchentlich",
    gradingMethod: GradingMethod.SCALE2,
    allowAlternative: false,
  },
  {
    name: "Fensterbänke (abgeräumt)",
    frequency: "2x monatlich",
    gradingMethod: GradingMethod.SCALE2,
    allowAlternative: false,
  },
  {
    name: "Kabelkanäle",
    frequency: "1x monatlich",
    gradingMethod: GradingMethod.SCALE2,
    allowAlternative: false,
  },
];

export const TOURS: Tour[] = [
  {
    name: "Rundgang Schiller",
    rooms: [
      { typeName: "Allgemeiner Unterrichtsraum", count: 10 },
      { typeName: "Hortraum", count: 5 },
      { typeName: "Aula", count: 7 },
      { typeName: "Eingangszone", count: 3 },
    ],
  },
  {
    name: "Rundgang Gerda Taro Schule",
    rooms: [
      { typeName: "Allgemeiner Unterrichtsraum", count: 2 },
      { typeName: "Hortraum", count: 1 },
      { typeName: "Eingangszone", count: 1 },
    ],
  },
];
