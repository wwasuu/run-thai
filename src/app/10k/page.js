"use client";

import { useState } from "react";

export default function TenKPlan() {
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const [currentWeek, setCurrentWeek] = useState(1);

  const trainingPlans = {
    beginner: {
      title: "Beginner (8 weeks)",
      description:
        "For new runners or those returning to running. Focuses on building endurance and consistency.",
      weeks: [
        // Week 1-8 for Beginner
        {
          week: 1,
          totalMiles: 10,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Wednesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Thursday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Friday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Saturday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 2, notes: "Slow, steady pace" },
          ],
        },
        {
          week: 2,
          totalMiles: 12,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Wednesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Thursday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Friday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Saturday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 4, notes: "Slow, steady pace" },
          ],
        },
        {
          week: 3,
          totalMiles: 13,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Wednesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Thursday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Friday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Saturday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 5, notes: "Slow, steady pace" },
          ],
        },
        {
          week: 4,
          totalMiles: 14,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Wednesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Thursday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Friday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Saturday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 6, notes: "Slow, steady pace" },
          ],
        },
        {
          week: 5,
          totalMiles: 15,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Wednesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Thursday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Friday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Saturday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 7, notes: "Slow, steady pace" },
          ],
        },
        {
          week: 6,
          totalMiles: 16,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Wednesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Thursday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Friday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Saturday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 8, notes: "Slow, steady pace" },
          ],
        },
        {
          week: 7,
          totalMiles: 12,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Wednesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Thursday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Friday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Saturday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 2, notes: "Taper week, easy pace" },
          ],
        },
        {
          week: 8,
          totalMiles: 10,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Wednesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Thursday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Friday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Saturday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Sunday", type: "Race day", miles: 6.2, notes: "10K Race!" },
          ],
        },
      ],
    },
    intermediate: {
      title: "Intermediate (8 weeks)",
      description:
        "For runners with some experience looking to improve their 10K time. Includes tempo and interval work.",
      weeks: [
        // Week 1-8 for Intermediate
        {
          week: 1,
          totalMiles: 14,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Wednesday", type: "Tempo", miles: 3, notes: "10 min tempo in middle" },
            { day: "Thursday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 3, notes: "Slow, steady pace" },
          ],
        },
        {
          week: 2,
          totalMiles: 16,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Wednesday", type: "Tempo", miles: 3, notes: "12 min tempo in middle" },
            { day: "Thursday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 4, notes: "Slow, steady pace" },
          ],
        },
        {
          week: 3,
          totalMiles: 18,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Wednesday", type: "Intervals", miles: 4, notes: "4x400m at 5K pace" },
            { day: "Thursday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 5, notes: "Slow, steady pace" },
          ],
        },
        {
          week: 4,
          totalMiles: 19,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Wednesday", type: "Tempo", miles: 4, notes: "15 min tempo in middle" },
            { day: "Thursday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 6, notes: "Slow, steady pace" },
          ],
        },
        {
          week: 5,
          totalMiles: 20,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Wednesday", type: "Intervals", miles: 5, notes: "5x400m at 5K pace" },
            { day: "Thursday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 7, notes: "Slow, steady pace" },
          ],
        },
        {
          week: 6,
          totalMiles: 21,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Wednesday", type: "Tempo", miles: 5, notes: "18 min tempo in middle" },
            { day: "Thursday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 8, notes: "Slow, steady pace" },
          ],
        },
        {
          week: 7,
          totalMiles: 15,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Wednesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Thursday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 4, notes: "Taper week, easy pace" },
          ],
        },
        {
          week: 8,
          totalMiles: 10,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Wednesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Thursday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Friday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Saturday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Sunday", type: "Race day", miles: 6.2, notes: "10K Race!" },
          ],
        },
      ],
    },
    advanced: {
      title: "Advanced (8 weeks)",
      description:
        "For experienced runners aiming for a personal best. Includes challenging tempo and interval sessions.",
      weeks: [
        // Week 1-8 for Advanced
        {
          week: 1,
          totalMiles: 18,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Tempo", miles: 4, notes: "15 min tempo in middle" },
            { day: "Wednesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Thursday", type: "Intervals", miles: 4, notes: "4x800m at 5K pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 4, notes: "Steady pace" },
          ],
        },
        {
          week: 2,
          totalMiles: 20,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Tempo", miles: 4, notes: "18 min tempo in middle" },
            { day: "Wednesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Thursday", type: "Intervals", miles: 5, notes: "5x800m at 5K pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 5, notes: "Steady pace" },
          ],
        },
        {
          week: 3,
          totalMiles: 22,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Tempo", miles: 5, notes: "20 min tempo in middle" },
            { day: "Wednesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Thursday", type: "Intervals", miles: 6, notes: "6x800m at 5K pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 5, notes: "Steady pace" },
          ],
        },
        {
          week: 4,
          totalMiles: 24,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Tempo", miles: 5, notes: "22 min tempo in middle" },
            { day: "Wednesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Thursday", type: "Intervals", miles: 7, notes: "7x800m at 5K pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 6, notes: "Steady pace" },
          ],
        },
        {
          week: 5,
          totalMiles: 25,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Tempo", miles: 5, notes: "25 min tempo in middle" },
            { day: "Wednesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Thursday", type: "Intervals", miles: 8, notes: "8x800m at 5K pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 7, notes: "Steady pace" },
          ],
        },
        {
          week: 6,
          totalMiles: 26,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Tempo", miles: 5, notes: "28 min tempo in middle" },
            { day: "Wednesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Thursday", type: "Intervals", miles: 9, notes: "9x800m at 5K pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 8, notes: "Steady pace" },
          ],
        },
        {
          week: 7,
          totalMiles: 18,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Wednesday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Thursday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Friday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Saturday", type: "Easy", miles: 3, notes: "Conversational pace" },
            { day: "Sunday", type: "Long run", miles: 4, notes: "Taper week, easy pace" },
          ],
        },
        {
          week: 8,
          totalMiles: 10,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Tuesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Wednesday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Thursday", type: "Rest", miles: 0, notes: "Complete rest day" },
            { day: "Friday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Saturday", type: "Easy", miles: 2, notes: "Conversational pace" },
            { day: "Sunday", type: "Race day", miles: 6.2, notes: "10K Race!" },
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
            🏃‍♂️ 10K Training Plan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your experience level and follow our comprehensive 8-week training plan to prepare for your 10K race day.
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
                onClick={() => setSelectedLevel(level)}
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
                Week {currentWeek} - {selectedPlan.weeks[currentWeek - 1].totalMiles} miles
              </h3>
              <div className="text-sm text-gray-600">
                Total Distance: {selectedPlan.weeks[currentWeek - 1].totalMiles} miles
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
              <li>• Intervals should be at your 5K pace</li>
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
                <strong>Easy Pace:</strong> You should be able to hold a conversation
              </div>
              <div>
                <strong>Tempo Pace:</strong> Comfortably hard, sustainable for 20-40 minutes
              </div>
              <div>
                <strong>Interval Pace:</strong> Hard effort, but not all-out sprint
              </div>
              <div>
                <strong>Long Run Pace:</strong> 1-2 minutes slower than your goal race pace
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
                      {week.runs.find((run) => run.type === "Long run" || run.type === "Race day")?.miles || 0} miles
                    </td>
                    <td className="py-2 px-2">
                      {week.runs
                        .filter((run) => ["Tempo", "Intervals"].includes(run.type))
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