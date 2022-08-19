import { useState } from "react";

export const AddNewRelation = () => {
  const [relationship, setRelationship] = useState("");

  const onClickHandler = (rel: string) => {
    if (rel.toLowerCase() !== "friends") {
      alert("Only friends is applicable right now!");
    }
    setRelationship("");
  };

  return (
    <div className="flex flex-row justify-center gap-5">
      <input
        className=" outline-none border-2 rounded-sm border-cyan-900 px-1 "
        placeholder="type new relationship"
        value={relationship}
        onChange={(e) => setRelationship(e.target.value)}
      />
      <button
        className="px-5 p-1 rounded-sm bg-cyan-100 hover:bg-cyan-50 border hover:bg-gradient-to-r from-cyan-100 to-green-50"
        onClick={() => onClickHandler(relationship)}
      >
        Add new relationship
      </button>
    </div>
  );
};
