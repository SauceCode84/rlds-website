import { Injectable } from "@angular/core";

export type Day = "mon" | "tues" | "wed" | "thurs" | "fri";

export type Timetable = {
  [day in Day]?: TimetableEntry[];
}

export type TimetableEntry = {
  time: string;
  item: string;
  description?: string;
}

@Injectable()
export class TimetableService {

  timetable: Timetable = {
    "mon": [
      { time: "13:30 - 14:00", item: "Tots Ballet", description: "3-4 years" },
      { time: "14:00 - 14:30", item: "Private Lesson", description: "Kate" },
      { time: "14:30 - 15:00", item: "Primary" },
      { time: "14:00 - 14:30", item: "Private Lesson", description: "Lesedi" },
      { time: "14:30 - 15:00", item: "Grade 1" },
      { time: "14:00 - 14:30", item: "Private Lesson", description: "Bulumko" },
      { time: "14:30 - 15:00", item: "Grade 2" },
      { time: "14:30 - 15:00", item: "Intermediate\nFoundation" },
    ],
    "tues": [
      { time: "08:30 – 09:30", item: "Adult Ballet" },
      { time: "14:30 - 15:00", item: "Private Lesson", description: "Owethu" },
    ]
  };

  /*
    Tots Ballet 13:30 – 14:00     Adult Ballet 08:30 – 09:30      Marunique 13:30 – 14:00
    Kate 14:00 – 14:30            Owethu 14:30 - 15:00            Primary 14:00 – 14:30
    Primary 14:30 – 15:00         Andrea 15:00 – 15:30            Sky 14:30 – 15:00
    Lesedi 15:00 – 15:30          Grade 4 15:30 – 16:30           Aila 15:00 – 15:30
    Grade 1 15:30 – 16:15         Casidy 16:30 – 17:00            Grade 1 15:30 – 16:15
    Bulumko 16:15 – 16:45         Ciskia 17:00 – 17:30            Ndileka 16:15 – 16:45
    Grade 2 16:45 – 17:30         Int Foundation 17:30 – 18:30    Grade 2 16:45 – 17:30
    Int Foundation 17:30 – 18:30  Adv 1 18:30 – 19:30             Grade 3 17:30 – 18:15
                                                                  Adv 1 18:15 – 19:15
  */

  constructor() { }

}
