import { useEffect, useState, useRef } from 'react';
import ArrowDown from '../../img/arrowdown.svg';

const Select = ({ data, text }) => {
  const node = useRef();

  const [selected, setSelected] = useState('');
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
    setSelected(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);


  return (
    <>
      <div ref={node} className="flex justify-between my-12 w-full h-12 p-2.5 text-lg font-bold bg-[#EBEBEB] rounded-lg">
        {selected ? selected.name : text}
        <button onClick={show} type="button">
          <img src={ArrowDown} alt="" />
        </button>

        {open &&
          <ul className="absolute ml-[-10px] mt-10 z-10 w-8/12  h-auto overflow-auto text-lg font-bold bg-white rounded-lg drop-shadow-2xl">
            {data.map((data) => (
              <li
                key={data.id}
                onClick={() => {
                  handleChange(data);
                  setOpen(false);
                }}
                className={`${selected.id === data.id ? `bg-[#e7f0f8]` : ''} relative p-2.5 cursor-pointer hover:bg-[#e7f0f8]`}
              >
                <span className='block font-normal text-left truncate'>
                  {data.name}
                </span>
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  );
};

export default Select;