"use client";

import { useEffect, useState } from "react";

export default function HalfMarathonTraining() {
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const [currentWeek, setCurrentWeek] = useState(1);

  useEffect(() => {
    window.dataLayer.push({
      event: "distance_selected",
      distance: "21.1",
    });
  }, []);

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    window.dataLayer.push({
      event: "level_selected",
      distance: "21.1",
      level: level,
    });
  };

  const trainingPlans = {
    beginner: {
      title: "Beginner (12 weeks)",
      description:
        "For runners who can comfortably run 3-5 miles and want to complete their first half marathon",
      weeks: [
        {
          week: 1,
          totalMiles: 15,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or elliptical",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 5,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 2,
          totalMiles: 16,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or elliptical",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 6,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 3,
          totalMiles: 17,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or elliptical",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 6,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 4,
          totalMiles: 19,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or elliptical",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 8,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 5,
          totalMiles: 20,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or elliptical",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 9,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 6,
          totalMiles: 22,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or elliptical",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 11,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 7,
          totalMiles: 24,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or elliptical",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 13,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 8,
          totalMiles: 25,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or elliptical",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 14,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 9,
          totalMiles: 26,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or elliptical",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 15,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 10,
          totalMiles: 28,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or elliptical",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 17,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 11,
          totalMiles: 20,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or elliptical",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 11,
              notes: "Taper - shorter long run",
            },
          ],
        },
        {
          week: 12,
          totalMiles: 13,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or elliptical",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 2,
              notes: "Very easy pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 2,
              notes: "Very easy pace",
            },
            {
              day: "Sunday",
              type: "Race day",
              miles: 13.1,
              notes: "Half marathon!",
            },
          ],
        },
      ],
    },
    intermediate: {
      title: "Intermediate (12 weeks)",
      description:
        "For runners who have completed a half marathon and want to improve their time",
      weeks: [
        {
          week: 1,
          totalMiles: 20,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Tempo",
              miles: 5,
              notes: "20 min tempo in middle",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 7,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 2,
          totalMiles: 22,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Intervals",
              miles: 6,
              notes: "6x400m at 5K pace",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 8,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 3,
          totalMiles: 24,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Tempo",
              miles: 6,
              notes: "25 min tempo in middle",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 10,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 4,
          totalMiles: 26,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Intervals",
              miles: 7,
              notes: "8x400m at 5K pace",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 11,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 5,
          totalMiles: 28,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Tempo",
              miles: 7,
              notes: "30 min tempo in middle",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 13,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 6,
          totalMiles: 30,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Intervals",
              miles: 8,
              notes: "10x400m at 5K pace",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 14,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 7,
          totalMiles: 32,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Tempo",
              miles: 8,
              notes: "35 min tempo in middle",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 16,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 8,
          totalMiles: 34,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Intervals",
              miles: 9,
              notes: "12x400m at 5K pace",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 17,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 9,
          totalMiles: 36,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Tempo",
              miles: 9,
              notes: "40 min tempo in middle",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 18,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 10,
          totalMiles: 38,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Intervals",
              miles: 10,
              notes: "14x400m at 5K pace",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 20,
              notes: "Slow, steady pace",
            },
          ],
        },
        {
          week: 11,
          totalMiles: 25,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Tempo",
              miles: 6,
              notes: "20 min tempo in middle",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 4,
              notes: "Conversational pace",
            },
            {
              day: "Sunday",
              type: "Long run",
              miles: 7,
              notes: "Taper - shorter long run",
            },
          ],
        },
        {
          week: 12,
          totalMiles: 18,
          runs: [
            {
              day: "Monday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Tuesday",
              type: "Easy",
              miles: 3,
              notes: "Conversational pace",
            },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 3,
              notes: "Very easy pace",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 2,
              notes: "Very easy pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 2,
              notes: "Very easy pace",
            },
            {
              day: "Sunday",
              type: "Race day",
              miles: 13.1,
              notes: "Half marathon!",
            },
          ],
        },
      ],
    },
    advanced: {
      title: "Advanced (12 weeks)",
      description:
        "For experienced runners aiming for a personal best or competitive time",
      weeks: [
        {
          week: 1,
          totalMiles: 35,
          runs: [
            { day: "Monday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Tuesday",
              type: "Tempo",
              miles: 8,
              notes: "25 min tempo in middle",
            },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 5,
              notes: "Recovery pace",
            },
            {
              day: "Thursday",
              type: "Intervals",
              miles: 8,
              notes: "8x800m at 10K pace",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Recovery pace" },
            { day: "Saturday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 12,
              notes: "Steady pace",
            },
          ],
        },
        {
          week: 2,
          totalMiles: 38,
          runs: [
            { day: "Monday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Tuesday",
              type: "Tempo",
              miles: 9,
              notes: "30 min tempo in middle",
            },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 5,
              notes: "Recovery pace",
            },
            {
              day: "Thursday",
              type: "Intervals",
              miles: 9,
              notes: "10x800m at 10K pace",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Recovery pace" },
            { day: "Saturday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 14,
              notes: "Steady pace",
            },
          ],
        },
        {
          week: 3,
          totalMiles: 42,
          runs: [
            { day: "Monday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Tuesday",
              type: "Tempo",
              miles: 10,
              notes: "35 min tempo in middle",
            },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 5,
              notes: "Recovery pace",
            },
            {
              day: "Thursday",
              type: "Intervals",
              miles: 10,
              notes: "12x800m at 10K pace",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Recovery pace" },
            { day: "Saturday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 16,
              notes: "Steady pace",
            },
          ],
        },
        {
          week: 4,
          totalMiles: 45,
          runs: [
            { day: "Monday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Tuesday",
              type: "Tempo",
              miles: 11,
              notes: "40 min tempo in middle",
            },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 5,
              notes: "Recovery pace",
            },
            {
              day: "Thursday",
              type: "Intervals",
              miles: 11,
              notes: "14x800m at 10K pace",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Recovery pace" },
            { day: "Saturday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 18,
              notes: "Steady pace",
            },
          ],
        },
        {
          week: 5,
          totalMiles: 48,
          runs: [
            { day: "Monday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Tuesday",
              type: "Tempo",
              miles: 12,
              notes: "45 min tempo in middle",
            },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 5,
              notes: "Recovery pace",
            },
            {
              day: "Thursday",
              type: "Intervals",
              miles: 12,
              notes: "16x800m at 10K pace",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Recovery pace" },
            { day: "Saturday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 20,
              notes: "Steady pace",
            },
          ],
        },
        {
          week: 6,
          totalMiles: 50,
          runs: [
            { day: "Monday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Tuesday",
              type: "Tempo",
              miles: 13,
              notes: "50 min tempo in middle",
            },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 5,
              notes: "Recovery pace",
            },
            {
              day: "Thursday",
              type: "Intervals",
              miles: 13,
              notes: "18x800m at 10K pace",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Recovery pace" },
            { day: "Saturday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 22,
              notes: "Steady pace",
            },
          ],
        },
        {
          week: 7,
          totalMiles: 52,
          runs: [
            { day: "Monday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Tuesday",
              type: "Tempo",
              miles: 14,
              notes: "55 min tempo in middle",
            },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 5,
              notes: "Recovery pace",
            },
            {
              day: "Thursday",
              type: "Intervals",
              miles: 14,
              notes: "20x800m at 10K pace",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Recovery pace" },
            { day: "Saturday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 24,
              notes: "Steady pace",
            },
          ],
        },
        {
          week: 8,
          totalMiles: 55,
          runs: [
            { day: "Monday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Tuesday",
              type: "Tempo",
              miles: 15,
              notes: "60 min tempo in middle",
            },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 5,
              notes: "Recovery pace",
            },
            {
              day: "Thursday",
              type: "Intervals",
              miles: 15,
              notes: "22x800m at 10K pace",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Recovery pace" },
            { day: "Saturday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 25,
              notes: "Steady pace",
            },
          ],
        },
        {
          week: 9,
          totalMiles: 58,
          runs: [
            { day: "Monday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Tuesday",
              type: "Tempo",
              miles: 16,
              notes: "65 min tempo in middle",
            },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 5,
              notes: "Recovery pace",
            },
            {
              day: "Thursday",
              type: "Intervals",
              miles: 16,
              notes: "24x800m at 10K pace",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Recovery pace" },
            { day: "Saturday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 26,
              notes: "Steady pace",
            },
          ],
        },
        {
          week: 10,
          totalMiles: 60,
          runs: [
            { day: "Monday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Tuesday",
              type: "Tempo",
              miles: 17,
              notes: "70 min tempo in middle",
            },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 5,
              notes: "Recovery pace",
            },
            {
              day: "Thursday",
              type: "Intervals",
              miles: 17,
              notes: "26x800m at 10K pace",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Recovery pace" },
            { day: "Saturday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 28,
              notes: "Steady pace",
            },
          ],
        },
        {
          week: 11,
          totalMiles: 35,
          runs: [
            { day: "Monday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Tuesday",
              type: "Tempo",
              miles: 8,
              notes: "25 min tempo in middle",
            },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 5,
              notes: "Recovery pace",
            },
            {
              day: "Thursday",
              type: "Intervals",
              miles: 8,
              notes: "8x800m at 10K pace",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Recovery pace" },
            { day: "Saturday", type: "Easy", miles: 5, notes: "Recovery pace" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 9,
              notes: "Taper - shorter long run",
            },
          ],
        },
        {
          week: 12,
          totalMiles: 25,
          runs: [
            { day: "Monday", type: "Easy", miles: 4, notes: "Recovery pace" },
            { day: "Tuesday", type: "Easy", miles: 4, notes: "Very easy pace" },
            {
              day: "Wednesday",
              type: "Easy",
              miles: 3,
              notes: "Very easy pace",
            },
            {
              day: "Thursday",
              type: "Easy",
              miles: 3,
              notes: "Very easy pace",
            },
            {
              day: "Friday",
              type: "Rest",
              miles: 0,
              notes: "Complete rest day",
            },
            {
              day: "Saturday",
              type: "Easy",
              miles: 2,
              notes: "Very easy pace",
            },
            {
              day: "Sunday",
              type: "Race day",
              miles: 13.1,
              notes: "Half marathon!",
            },
          ],
        },
      ],
    },
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Rest":
        return "bg-gray-100 text-gray-600";
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Long run":
        return "bg-blue-100 text-blue-800";
      case "Tempo":
        return "bg-orange-100 text-orange-800";
      case "Intervals":
        return "bg-purple-100 text-purple-800";
      case "Cross-train":
        return "bg-yellow-100 text-yellow-800";
      case "Race day":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const selectedPlan = trainingPlans[selectedLevel];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🏃‍♂️ Half Marathon Training Plan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your experience level and follow our comprehensive 12-week
            training plan to prepare for your half marathon race day.
          </p>
        </div>

        {/* Experience Level Selection */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Select Your Experience Level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(trainingPlans).map(([level, plan]) => (
              <button
                key={level}
                onClick={() => handleLevelChange(level)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedLevel === level
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <h3 className="font-semibold text-lg mb-2">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Training Plan Display */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {selectedPlan.title} Training Plan
            </h2>
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Week:</label>
              <select
                value={currentWeek}
                onChange={(e) => setCurrentWeek(parseInt(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                {selectedPlan.weeks.map((week) => (
                  <option key={week.week} value={week.week}>
                    Week {week.week}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Current Week Plan */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Week {currentWeek} -{" "}
                {selectedPlan.weeks[currentWeek - 1].totalMiles} miles
              </h3>
              <div className="text-sm text-gray-600">
                Total Distance: {selectedPlan.weeks[currentWeek - 1].totalMiles}{" "}
                miles
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
              {selectedPlan.weeks[currentWeek - 1].runs.map((run, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                >
                  <div className="text-sm font-medium text-gray-600 mb-2">
                    {run.day}
                  </div>
                  <div
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${getTypeColor(
                      run.type
                    )}`}
                  >
                    {run.type}
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    {run.miles} {run.miles === 1 ? "mile" : "miles"}
                  </div>
                  <div className="text-xs text-gray-600">{run.notes}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Tips */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-900 mb-2">
              💡 Training Tips
            </h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Easy runs should be at a conversational pace</li>
              <li>• Long runs should be 1-2 minutes slower than race pace</li>
              <li>• Tempo runs should be at your 10K race pace</li>
              <li>• Intervals should be at your 5K race pace</li>
              <li>• Always warm up and cool down properly</li>
              <li>• Listen to your body and adjust if needed</li>
            </ul>
          </div>

          {/* Pace Guidelines */}
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">
              🎯 Pace Guidelines
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-800">
              <div>
                <strong>Easy Pace:</strong> You should be able to hold a
                conversation
              </div>
              <div>
                <strong>Tempo Pace:</strong> Comfortably hard, sustainable for
                20-40 minutes
              </div>
              <div>
                <strong>Interval Pace:</strong> Hard effort, but not all-out
                sprint
              </div>
              <div>
                <strong>Long Run Pace:</strong> 1-2 minutes slower than your
                goal race pace
              </div>
            </div>
          </div>
        </div>

        {/* Full Training Plan Overview */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Complete Training Plan Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-2">Week</th>
                  <th className="text-left py-2 px-2">Total Miles</th>
                  <th className="text-left py-2 px-2">Long Run</th>
                  <th className="text-left py-2 px-2">Key Workouts</th>
                </tr>
              </thead>
              <tbody>
                {selectedPlan.weeks.map((week) => (
                  <tr
                    key={week.week}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-2 px-2 font-medium">Week {week.week}</td>
                    <td className="py-2 px-2">{week.totalMiles} miles</td>
                    <td className="py-2 px-2">
                      {week.runs.find((run) => run.type === "Long run")
                        ?.miles || 0}{" "}
                      miles
                    </td>
                    <td className="py-2 px-2">
                      {week.runs
                        .filter((run) =>
                          ["Tempo", "Intervals"].includes(run.type)
                        )
                        .map((run) => `${run.type} ${run.miles}mi`)
                        .join(", ") || "Easy runs"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
