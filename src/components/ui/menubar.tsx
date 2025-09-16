import { useState } from "react";
import DavidPicture from "../../assets/David.png";

export default function Menubar() {
  const [useMenu, setUseMenu] = useState(false);
  const handleMenu = () => {
    setUseMenu(!useMenu);
  };
  return (
    <div className="w-full flex justify-between items-center">
      <img
        src={DavidPicture}
        alt="David's Profile Picture"
        className="w-[2.5rem] h-[2.5rem]"
      />
      <button onClick={handleMenu}>
        {useMenu ? (
          <span className="material-symbols-outlined">close</span>
        ) : (
          <span className="material-symbols-outlined">menu</span>
        )}
      </button>
    </div>
  );
}
