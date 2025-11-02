export default function MatchCard({ team1, team2, score }) {
  return (
    <div className="card bg-base-200 shadow-md p-4 flex justify-between items-center">
      <h3 className="font-bold text-lg">{team1}</h3>
      <span className="text-2xl font-bold">{score}</span>
      <h3 className="font-bold text-lg">{team2}</h3>
    </div>
  );
}
