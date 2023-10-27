import React from "react";

const CustomKeyboard = ({
  handleKeyClick,
}: {
  handleKeyClick: (key: string) => void;
}) => {
  return (
    <div>
      {/* flex justify-center items-center h-screen */}
      <div className="flex justify-center items-centers">
        {/* Number container */}
        <div className="bg-white">
          {["1"].map((key) => (
            <button
              className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["2"].map((key) => (
            <button
              className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["3"].map((key) => (
            <button
              className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["4"].map((key) => (
            <button
              className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["5"].map((key) => (
            <button
              className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["6"].map((key) => (
            <button
              className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["7"].map((key) => (
            <button
              className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["8"].map((key) => (
            <button
              className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["9"].map((key) => (
            <button
              className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["0"].map((key) => (
            <button
              className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {/* Q-P */}
          <div className="">
            {["Q"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["W"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["E"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["R"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["T"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["Y"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["U"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["I"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["O"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["P"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
          </div>
          {/* A-P */}
          <div className="">
            {["A"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["S"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["D"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["F"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["G"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["H"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["J"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["K"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["L"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["Del"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
          </div>
          {/* Z-M, Clear */}
          <div className="ml-[80px]">
            {["Z"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["X"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["C"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["V"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["B"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["N"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["M"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["CLEAR"].map((key) => (
              <button
                className="bg-white border border-solid rounded-lg font-bold text-2xl shadow-[10px_-10px_23px_0px_rgba(0,0,0,0.3)] w-[120px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomKeyboard;
