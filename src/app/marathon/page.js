"use client";

import { useState, useEffect } from "react";

export default function MarathonTraining() {
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const [currentWeek, setCurrentWeek] = useState(1);

  useEffect(() => {
    window.dataLayer.push({
      event: "distance_selected",
      distance: "42.195"
    })
  }, []);

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    window.dataLayer.push({
      event: "level_selected",
      distance: "42.195",
      level: level,
    });
  };

  const trainingPlans = {
    beginner: {
      title: "Beginner (16 weeks)",
      description: "For runners new to the marathon distance.",
      weeks: [
        // Week 1
        {
          week: 1,
          totalMiles: 20,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 3, notes: "Easy pace" },
            { day: "Wednesday", type: "Easy", miles: 3, notes: "Easy pace" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 3, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 6,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 2
        {
          week: 2,
          totalMiles: 22,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 3, notes: "Easy pace" },
            { day: "Wednesday", type: "Easy", miles: 4, notes: "Easy pace" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 3, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 8,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 3
        {
          week: 3,
          totalMiles: 24,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 4, notes: "Easy pace" },
            { day: "Wednesday", type: "Easy", miles: 4, notes: "Easy pace" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 3, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 9,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 4
        {
          week: 4,
          totalMiles: 25,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 4, notes: "Easy pace" },
            { day: "Wednesday", type: "Easy", miles: 5, notes: "Easy pace" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 3, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 10,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 5
        {
          week: 5,
          totalMiles: 27,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 5, notes: "Easy pace" },
            { day: "Wednesday", type: "Easy", miles: 5, notes: "Easy pace" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 4, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 13,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 6
        {
          week: 6,
          totalMiles: 28,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 5, notes: "Easy pace" },
            { day: "Wednesday", type: "Tempo", miles: 4, notes: "Tempo run" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 4, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 15,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 7
        {
          week: 7,
          totalMiles: 29,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 5, notes: "Easy pace" },
            { day: "Wednesday", type: "Tempo", miles: 5, notes: "Tempo run" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 4, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 15,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 8
        {
          week: 8,
          totalMiles: 30,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 6, notes: "Easy pace" },
            { day: "Wednesday", type: "Tempo", miles: 5, notes: "Tempo run" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 4, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 15,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 9
        {
          week: 9,
          totalMiles: 32,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 6, notes: "Easy pace" },
            { day: "Wednesday", type: "Tempo", miles: 6, notes: "Tempo run" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 15,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 10
        {
          week: 10,
          totalMiles: 34,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 6, notes: "Easy pace" },
            { day: "Wednesday", type: "Tempo", miles: 6, notes: "Tempo run" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 18,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 11
        {
          week: 11,
          totalMiles: 36,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 6, notes: "Easy pace" },
            { day: "Wednesday", type: "Tempo", miles: 6, notes: "Tempo run" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 20,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 12
        {
          week: 12,
          totalMiles: 38,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 6, notes: "Easy pace" },
            { day: "Wednesday", type: "Tempo", miles: 7, notes: "Tempo run" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 5, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 20,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 13
        {
          week: 13,
          totalMiles: 32,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 5, notes: "Easy pace" },
            { day: "Wednesday", type: "Tempo", miles: 6, notes: "Tempo run" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 4, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 12,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 14
        {
          week: 14,
          totalMiles: 28,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 4, notes: "Easy pace" },
            { day: "Wednesday", type: "Tempo", miles: 5, notes: "Tempo run" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 4, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 10,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 15
        {
          week: 15,
          totalMiles: 20,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 3, notes: "Easy pace" },
            { day: "Wednesday", type: "Easy", miles: 3, notes: "Easy pace" },
            {
              day: "Thursday",
              type: "Cross-train",
              miles: 0,
              notes: "Bike, swim, or yoga",
            },
            { day: "Friday", type: "Easy", miles: 2, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Long run",
              miles: 9,
              notes: "Long slow distance",
            },
          ],
        },
        // Week 16 (Taper & Race)
        {
          week: 16,
          totalMiles: 26.2,
          runs: [
            { day: "Monday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Tuesday", type: "Easy", miles: 2, notes: "Easy pace" },
            { day: "Wednesday", type: "Easy", miles: 2, notes: "Easy pace" },
            { day: "Thursday", type: "Rest", miles: 0, notes: "Rest" },
            { day: "Friday", type: "Easy", miles: 2, notes: "Easy pace" },
            { day: "Saturday", type: "Rest", miles: 0, notes: "Rest" },
            {
              day: "Sunday",
              type: "Race day",
              miles: 26.2,
              notes: "Marathon! Good luck!",
            },
          ],
        },
      ],
    },
    // Add intermediate and advanced if desired
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Easy":
        return "bg-blue-100 text-blue-800";
      case "Long run":
        return "bg-green-100 text-green-800";
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
            🏃‍♂️ Marathon Training Plan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your experience level and follow our comprehensive 16-week
            training plan to prepare for your marathon race day.
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
