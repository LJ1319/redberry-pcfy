import { useEffect, useState, useRef } from "react";
import ArrowDown from '../../assets/img/arrowdown.svg';
import { useLocalStorage } from "../../useLocalStorage";

const Select = (
  { data, text, name, changeTeamId, teamId, changePositionTeamId, positionTeamId }
) => {
  const node = useRef();

  const [selected, setSelected] = useLocalStorage(name, "");
  const [open, setOpen] = useState(false);

  const show = () => {
    setOpen(!open);
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };

  const handleChange = (selectedValue) => {
    setOpen(false);

    if (!selectedValue.team_id && name === "team")
      changeTeamId(selectedValue.id);

    if (selectedValue.team_id && name === "position")
      changePositionTeamId(selectedValue.team_id);

    setSelected(selectedValue);
  };

  useEffect(() => {
    if (teamId !== positionTeamId) {
      setSelected("");
    }
  }, [changeTeamId, changePositionTeamId]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      ref={node}
      onClick={show}
      className="relative flex justify-between my-12 w-full h-12 p-2.5 text-lg font-bold bg-[#EBEBEB] rounded-lg cursor-pointer">
      {selected ? selected.name : text}
      <button type="button">
        <img src={ArrowDown} alt="down arrow" />
      </button>

      {open &&
        <ul className="absolute ml-[-10px] mt-10 z-10 w-full h-auto overflow-auto text-lg font-bold bg-white rounded-lg drop-shadow-2xl">
          {data.map((data) => (
            <li
              key={data.id}
              onClick={() => {
                handleChange(data);
                setOpen(false);
              }}
              className={`${selected.id === data.id ? `bg-[#e7f0f8]` : ''} relative p-2.5 cursor-pointer hover:bg-[#e7f0f8]`}
            >
              <span className='font-normal text-left truncate'>
                {data.name}
              </span>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Select;