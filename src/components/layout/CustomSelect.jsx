import { useState } from 'react';
import ArrowDown from '../../img/arrowdown.svg';

const Select = ({ text }) => {

  const data = [
    {
      id: 1,
      title: "დეველოპმენტი"
    },
    {
      id: 2,
      title: "HR"
    },
    {
      id: 3,
      title: "გაყიდვები"
    },
    {
      id: 4,
      title: "დიზაინი"
    },
    {
      id: 5,
      title: "დიზაინი"
    },
  ];

  const [selected, setSelected] = useState('');
  const [isShow, selectOpen] = useState(false);
  const show = () => {
    selectOpen(!isShow);
    console.log(isShow);
  };
  return (
    <>
      <div className="flex justify-between my-8 w-full h-12 p-2.5 text-lg font-bold bg-[#EBEBEB] rounded-lg">
        {selected ? selected.title : text}
        <button onClick={show} type="button">
          <img src={ArrowDown} alt="" />
        </button>
      </div>

      {isShow &&
        <ul className="absolute mt-[-30px] z-10 w-8/12 overflow-auto text-lg font-bold bg-white rounded-lg drop-shadow-2xl">
          {data.map((data) => (
            <li
              key={data.id}
              onClick={() => {
                setSelected(data);
                selectOpen(false);
              }}
              className={`${selected.id === data.id ? `bg-[#e7f0f8]` : ''} relative p-2.5 cursor-default hover:bg-[#e7f0f8]`}
            >
              <span className='block font-normal text-left truncate'>
                {data.title}
              </span>
            </li>
          ))}
        </ul>
      }

    </>
  );
};

export default Select;