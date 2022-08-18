import { useEffect, useState } from "react";
import Graph from "../graph";

export const ConnectionFind = ({
  peopleGraph,
  peopleList,
}: {
  peopleGraph: Graph;
  peopleList: string[];
}) => {
  const [person1, setPerson1] = useState("");
  const [person2, setPerson2] = useState("");
  const [res, setRes] = useState<string[]>([]);

  function findConnections(person1: string, person2: string) {
    let resultArray = peopleGraph.shortestPathBfs(person1, person2);
    setRes(resultArray);
  }

  return (
    <>
      <div className="flex justify-center items-center gap-5">
        <label className="flex gap-2">
          Select Person One
          <select
            name="personOne"
            id="person1"
            onChange={(e) => setPerson1(e.target.value)}
          >
            {peopleList.map((vertex) => (
              <option key={vertex} value={vertex}>
                {vertex}
              </option>
            ))}
          </select>
        </label>

        <label className="flex gap-2">
          Relationship
          <select name="relation" id="relation">
            <option value={"friends"}> Friends</option>
          </select>
        </label>

        <label className="flex gap-2">
          Select Person Two
          <select
            name="personTwo"
            id="person2"
            onChange={(e) => setPerson2(e.target.value)}
          >
            {peopleList.map((vertex) => (
              <option key={vertex} value={vertex}>
                {vertex}
              </option>
            ))}
          </select>
        </label>

        <button
          className="px-5 p-1 rounded-sm bg-cyan-100 hover:bg-cyan-50 border hover:bg-gradient-to-r from-cyan-100 to-green-50"
          onClick={() => findConnections(person1, person2)}
          disabled={person1 === person2}
        >
          Check connection
        </button>
      </div>
      {res.length > 0 && (
        <div className="flex justify-center items-center bg-gradient-to-r from-cyan-100 to-green-100 border border-cyan-900 rounded-sm p-1 w-[80%]">
          {res.reduce((acc, node) => node + " > " + acc, "")}
        </div>
      )}
    </>
  );
};
