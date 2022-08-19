import { useRef, useState } from "react";
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
  const [res, setRes] = useState<string[]>();

  const selectPerson1Ref = useRef<HTMLSelectElement>(null);
  const selectPerson2Ref = useRef<HTMLSelectElement>(null);

  function findConnections(person1: string, person2: string) {
    if (person1 === person2)
      alert("Ooops same person is selected in both options!");
    else {
      let resultArray = peopleGraph.shortestPathBfs(person1, person2);
      console.log(resultArray);
      setRes(resultArray);
      setPerson1("");
      setPerson2("");
      if (selectPerson1Ref.current?.options[0])
        selectPerson1Ref.current.options[0].selected = true;
      if (selectPerson2Ref.current?.options[0])
        selectPerson2Ref.current.options[0].selected = true;
    }
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
        <label className="flex gap-2   ">
          Select Person One
          <select
            ref={selectPerson1Ref}
            className="bg-gradient-to-r from-cyan-100 to-green-50"
            name="personOne"
            id="person1"
            onChange={(e) => setPerson1(e.target.value)}
          >
            {["", ...peopleList].map((vertex) => (
              <option key={vertex} value={vertex} className="bg-green-50 ">
                {vertex}
              </option>
            ))}
          </select>
        </label>

        <label className="flex gap-2">
          Relationship
          <select
            className="bg-gradient-to-r from-cyan-100 to-green-50"
            name="relation"
            id="relation"
          >
            <option value={"friends"}> Friends</option>
          </select>
        </label>

        <label className="flex gap-2">
          Select Person Two
          <select
            ref={selectPerson2Ref}
            className="bg-gradient-to-r from-cyan-100 to-green-50"
            name="personTwo"
            id="person2"
            onChange={(e) => setPerson2(e.target.value)}
          >
            {["", ...peopleList].map((vertex, index) => (
              <option
                key={vertex}
                value={index !== 0 ? vertex : ""}
                className="bg-green-50"
              >
                {vertex}
              </option>
            ))}
          </select>
        </label>

        <button
          className="px-5 p-1 rounded-sm bg-cyan-100 hover:bg-cyan-50 border enabled:hover:bg-gradient-to-r from-cyan-100 to-green-50 disabled:bg-slate-300  "
          onClick={() => findConnections(person1, person2)}
          disabled={person1 === person2}
        >
          Check connection
        </button>
      </div>

      {res && (
        <div className="flex justify-center items-center bg-gradient-to-r from-cyan-100 to-green-100 border border-cyan-900 rounded-sm p-2 w-[80%]">
          {res.length > 0
            ? res.reduce(
                (acc, node, index) => (index === 0 ? node : node + " > " + acc),
                ""
              )
            : "No connection found between these people 😞"}
        </div>
      )}
    </div>
  );
};
