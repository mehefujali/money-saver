import { useState } from 'react';
import './display.css';

const Display = () => {
      const [balench, setBalench] = useState(0);
      const [income, setIncome] = useState(0);
      const [incomeInput, setIncomeInput] = useState('');
      const [expandInput, setExpandInput] = useState('');
      const [expand, setEspand] = useState(0)
      const handelSetIncomeInput = (event) => {
            setIncomeInput(event.target.value);
      };

      const handleSaveInome = () => {
            setIncome(parseFloat(parseFloat(income) + parseFloat(incomeInput)));
            setIncomeInput(''); // Reset the input field to 0 after saving
            setBalench(balench + parseFloat(incomeInput))

      };

      const handleEspance = (event) => {
            setExpandInput(event.target.value)
      }
      const handleSetExpansed = () => {
            setEspand(parseFloat(expand) + parseFloat(expandInput))
            setBalench(parseFloat(balench) - parseFloat(expandInput))
            setExpandInput('')

      }
      return (
            <div className="container mx-auto mt-20">
                  <div className="grid grid-cols-12 gap-5">
                        <div className="w-full col-span-12 flex flex-col font-bold text-white">
                              <h1 className="bg-green-400 text-2xl rounded-lg px-4 w-full py-8">Balench: {balench}</h1>
                        </div>
                        <div className="col-span-12 md:col-span-6 text-2xl flex flex-col gap-6 font-bold text-white">
                              <h1 className="bg-red-400 rounded-lg p-4 w-full">Expand: {expand}</h1>
                              <div className="flex items-center">
                                    <input value={expandInput} onChange={handleEspance} type="text" className="text-black save-input border-red-700 focus:outline-none" />
                                    <button onClick={handleSetExpansed} className="text-lg bg-white text-red-600 save-btn">Save</button>
                              </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 text-2xl flex flex-col gap-6 rounded-lg font-bold text-white">
                              <h1 className="bg-yellow-400 rounded-lg p-4 w-full">Income: {income}</h1>
                              <div className="flex items-center">
                                    <input
                                          type="text"
                                          value={incomeInput}
                                          onChange={handelSetIncomeInput}
                                          className="text-black save-input border-red-700 focus:outline-none"
                                    />
                                    <button onClick={handleSaveInome} className="text-lg bg-white text-red-600 save-btn">Save</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Display;
