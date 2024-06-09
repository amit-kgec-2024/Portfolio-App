import React, { useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import skillData from '../utils/skillData';
import Loader from './Loader';

const Skill = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="">
      {loading ? <Loader/> : <div className="">
        <h1 className="w-full flex flex-col items-center text-5xl font-bold uppercase md:text-7xl animate-text-colorone-left-to-right">
          Skills
          <span className="w-[40%] h-2 my-3 bg-red-400 rounded-full animate-background-color-left-to-right"></span>
        </h1>
        <div className="text-7xl flex flex-row justify-around p-4 animate-arrow-color-change">
          <div className="flex">
            <FaChevronRight />
            <FaChevronRight />
            <FaChevronRight />
            <FaChevronRight />
          </div>
          <div className="flex">
            <FaChevronRight />
            <FaChevronRight />
            <FaChevronRight />
            <FaChevronRight />
          </div>
          <div className="flex">
            <FaChevronRight />
            <FaChevronRight />
            <FaChevronRight />
            <FaChevronRight />
          </div>
        </div>
        <div className="w-full h-screen bg-dark1 text-white flex flex-wrap items-center justify-center p-5 gap-10">
          {skillData.map((ele, index) => (
            <div
              key={index}
              className="w-44 h-48 shadow-2xl rounded-md flex flex-col items-center justify-around bg-dark3 p-3"
            >
              <div className="border-4 border-b-teal-400 border-t-pink-400 border-l-yellow-400 border-r-green-400 rounded-full flex justify-center p-1 items-center w-[55%] h-[50%] animate-rotate-left-to-right">
                <img
                  src={ele.skillImg}
                  alt="Bird"
                  width={80}
                  height={80}
                  className="animate-rotate-right-to-left"
                />
              </div>
              <h1 className="font-bold uppercase">{ele.skillname}</h1>
              <div className="w-full h-3 bg-white rounded-full flex overflow-hidden">
                <div
                  className={`animate-background-color-left-to-right `}
                  style={{ width: `${ele.widthpercent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>}
      <style>{`
      .animate-background-color-left-to-right {
            background: linear-gradient(to right, red, dodgerblue, green, yellow);
            background-size: 200% auto;
            animation: background-color-left-to-right 4s linear infinite;
        }

        @keyframes background-color-left-to-right {
            0% {
                background-position: 0% 0;
            }
            100% {
                background-position: 100% 0;
            }
        }
            .animate-text-colorone-left-to-right {
            background: linear-gradient(to right, white, dodgerblue, white, white);
            -webkit-background-clip: text;
            color: transparent;
            background-size: 200% auto;
            animation: text-colorone-left-to-right 4s linear infinite;
        }

        @keyframes text-colorone-left-to-right {
            0% {
                background-position: 0% 0;
            }
            100% {
                background-position: 100% 0;
            }
        }
            @keyframes arrow-color-change {
    0% {
        color: red;
    }
    25% {
        color: orange;
    }
    50% {
        color: yellow;
    }
    75% {
        color: green;
    }
    100% {
        color: blue;
    }
}

.animate-arrow-color-change {
    font-size: 50px; /* Adjust size as needed */
    animation: arrow-color-change 4s linear infinite;
 .animate-rotate-left-to-right {
    animation: rotate-left-to-right 4s linear infinite;
}
.animate-rotate-right-to-left {
    animation: rotate-right-to-left 4s linear infinite;
}

@keyframes rotate-left-to-right {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotate-right-to-left {
    0% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
    .animate-rotate-left-to-right {
    animation: rotate-left-to-right 4s linear infinite;
}
.animate-rotate-right-to-left {
    animation: rotate-right-to-left 4s linear infinite;
}

@keyframes rotate-left-to-right {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotate-right-to-left {
    0% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
      `}</style>
    </div>
  );
}

export default Skill
