import React from "react";

const leaderboard = [
  { name: "0xDA1fF740513e5156250DF69e877181db6E57B08D", score: 10.01 },
  { name: "0x8564946ACd532Bc99a41891A9A8Df0251e528318", score: 1.1 },
  { name: "0x67f1a13a1bBF01D084F1Ce917711e5E77D13337c", score:  0.1},
  { name: "0x372532360B38D56f41b4863fCf4dED163326E70B", score: 0.002 },
];

const Leaderboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Leaderboard</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-2 px-4 border border-gray-400">Address</th>
            <th className="text-right py-2 px-4 border border-gray-400">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index} className="border-b border-gray-400">
              <td className="text-left py-2 px-4">{entry.name}</td>
              <td className="text-right py-2 px-4">{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
