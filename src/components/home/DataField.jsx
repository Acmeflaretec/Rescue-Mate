import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const symptoms = [
  "Chest Pain",
  "Difficulty Breathing",
  "Unconsciousness",
  "Dizziness or Fainting",
  "Severe Headache",
  "Bleeding (Internal/External)",
  "Abdominal Pain",
  "Seizures",
  "Burns",
  "Fractures or Broken Bones",
  "Nausea/Vomiting",
  "Loss of Consciousness (Fainting)",
  "Numbness or Tingling",
  "Sudden Weakness",
  "Slurred Speech",
  "Confusion or Disorientation",
  "Persistent Coughing",
  "Swelling (in any part of the body)",
  "Allergic Reaction (Swelling, Rash, Hives)",
  "Pale or Bluish Skin Color",
  "Rapid or Irregular Heartbeat",
  "Back or Neck Pain",
  "Shortness of Breath",
  "Cold Sweats",
  "Vision Problems",
  "Severe Pain (Localized)",
  "Burning Sensation",
  "Paralysis or Inability to Move",
  "Choking",
  "Difficulty Swallowing",
];

const gender = ["Male", "Female"];
const Step1 = () => {
  return (
    <div>
      <p className="font-bold py-4">Enter Priliminary Details</p>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-white"
          >
            Age of Victim *
          </label>
          <select
            id="countries"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
          >
            <option selected disabled>
              select age group
            </option>
            <option value="1 - 24 months old">1 - 24 months old</option>
            <option value="3 - 5 years">3 - 5 years</option>
            <option value="5 - 10 years">5 - 10 years</option>
            <option value="10 - 15 years">10 - 15 years</option>
            <option value="15 - 20 years">15 - 20 years</option>
            <option value="20 - 25 years">20 - 25 years</option>
            <option value="25 - 30 years">25 - 30 years</option>
            <option value="30 - 40 years">30 - 40 years</option>
            <option value="40 - 50 years">40 - 50 years</option>
            <option value="50 - 60 years">50 - 60 years</option>
            <option value="60 - 70 years">60 - 70 years</option>
            <option value="above 70 years">above 70 years</option>
          </select>
        </div>
        <div className="flex gap-4">
          <label
            htmlFor="countries"
            className="block text-sm font-medium text-white"
          >
            Gender *
          </label>
          {gender?.map((item) => (
            <div key={item} className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id={item}
                  name="gender"
                  type="radio"
                  value={item}
                  className="w-4 h-4 border rounded  focus:ring-3 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor={item}
                className="ms-2 text-sm font-medium text-gray-300"
              >
                {" "}
                {item}
              </label>
            </div>
          ))}
        </div>
        <div>
          <label
            htmlFor="time"
            className="block mb-2 text-sm font-medium text-white"
          >
            Time of Incident *
          </label>
          <select
            id="time"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            placeholder="Flowbite"
            required
          >
            <option>Just now</option>
            <option>5 mins before</option>
            <option>10 mins before</option>
            <option>15 mins before</option>
            <option>30 mins before</option>
            <option>1 hour ago</option>
            <option>More than 1 hour</option>
            <option>Not sure</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-white"
          >
            Describe incident
          </label>
          <textarea
            type="text"
            id="desc"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            placeholder="Describe in detail about the incident"
            rows={7}
            required
          />
        </div>
      </div>
    </div>
  );
};

const Step2 = () => {
  return (
    <div>
      <p className="font-bold py-4">Select symptoms from below</p>
      <div className="grid grid-cols-2">
        {symptoms?.map((item) => (
          <div key={item} className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id={item}
                type="checkbox"
                value=""
                className="w-4 h-4 border rounded  focus:ring-3 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor={item}
              className="ms-2 text-sm font-medium text-gray-300"
            >
              {" "}
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
const DataField = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (step > 2) {
      navigate("/chat");
    }
  }, [step, navigate]);

  return (
    <div className="h-full w-full rounded-md bg-gray-800 p-4">
      <div>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        <button
          onClick={() => setStep(step + 1)}
          className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataField;
