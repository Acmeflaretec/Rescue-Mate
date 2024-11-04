// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const symptoms = [
//   "Chest Pain",
//   "Difficulty Breathing",
//   "Unconsciousness",
//   "Dizziness or Fainting",
//   "Severe Headache",
//   "Bleeding (Internal/External)",
//   "Abdominal Pain",
//   "Seizures",
//   "Burns",
//   "Fractures or Broken Bones",
//   "Nausea/Vomiting",
//   "Loss of Consciousness (Fainting)",
//   "Numbness or Tingling",
//   "Sudden Weakness",
//   "Slurred Speech",
//   "Confusion or Disorientation",
//   "Persistent Coughing",
//   "Swelling (in any part of the body)",
//   "Allergic Reaction (Swelling, Rash, Hives)",
//   "Pale or Bluish Skin Color",
//   "Rapid or Irregular Heartbeat",
//   "Back or Neck Pain",
//   "Shortness of Breath",
//   "Cold Sweats",
//   "Vision Problems",
//   "Severe Pain (Localized)",
//   "Burning Sensation",
//   "Paralysis or Inability to Move",
//   "Choking",
//   "Difficulty Swallowing",
// ];

// const gender = ["Male", "Female"];
// const Step1 = () => {
//   return (
//     <div>
//       <p className="font-bold py-4">Enter Priliminary Details</p>
//       <div className="grid gap-6 mb-6 md:grid-cols-2">
//         <div>
//           <label
//             htmlFor="countries"
//             className="block mb-2 text-sm font-medium text-white"
//           >
//             Age of Victim *
//           </label>
//           <select
//             id="countries"
//             className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
//           >
//             <option selected disabled>
//               select age group
//             </option>
//             <option value="1 - 24 months old">1 - 24 months old</option>
//             <option value="3 - 5 years">3 - 5 years</option>
//             <option value="5 - 10 years">5 - 10 years</option>
//             <option value="10 - 15 years">10 - 15 years</option>
//             <option value="15 - 20 years">15 - 20 years</option>
//             <option value="20 - 25 years">20 - 25 years</option>
//             <option value="25 - 30 years">25 - 30 years</option>
//             <option value="30 - 40 years">30 - 40 years</option>
//             <option value="40 - 50 years">40 - 50 years</option>
//             <option value="50 - 60 years">50 - 60 years</option>
//             <option value="60 - 70 years">60 - 70 years</option>
//             <option value="above 70 years">above 70 years</option>
//           </select>
//         </div>
//         <div className="flex gap-4">
//           <label
//             htmlFor="countries"
//             className="block text-sm font-medium text-white"
//           >
//             Gender *
//           </label>
//           {gender?.map((item) => (
//             <div key={item} className="flex items-start">
//               <div className="flex items-center h-5">
//                 <input
//                   id={item}
//                   name="gender"
//                   type="radio"
//                   value={item}
//                   className="w-4 h-4 border rounded  focus:ring-3 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800"
//                   required
//                 />
//               </div>
//               <label
//                 htmlFor={item}
//                 className="ms-2 text-sm font-medium text-gray-300"
//               >
//                 {" "}
//                 {item}
//               </label>
//             </div>
//           ))}
//         </div>
//         <div>
//           <label
//             htmlFor="time"
//             className="block mb-2 text-sm font-medium text-white"
//           >
//             Time of Incident *
//           </label>
//           <select
//             id="time"
//             className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
//             placeholder="Flowbite"
//             required
//           >
//             <option>Just now</option>
//             <option>5 mins before</option>
//             <option>10 mins before</option>
//             <option>15 mins before</option>
//             <option>30 mins before</option>
//             <option>1 hour ago</option>
//             <option>More than 1 hour</option>
//             <option>Not sure</option>
//           </select>
//         </div>
//         <div>
//           <label
//             htmlFor="phone"
//             className="block mb-2 text-sm font-medium text-white"
//           >
//             Describe incident
//           </label>
//           <textarea
//             type="text"
//             id="desc"
//             className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
//             placeholder="Describe in detail about the incident"
//             rows={7}
//             required
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Step2 = () => {
//   return (
//     <div>
//       <p className="font-bold py-4">Select symptoms from below</p>
//       <div className="grid grid-cols-2">
//         {symptoms?.map((item) => (
//           <div key={item} className="flex items-start mb-6">
//             <div className="flex items-center h-5">
//               <input
//                 id={item}
//                 type="checkbox"
//                 value=""
//                 className="w-4 h-4 border rounded  focus:ring-3 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800"
//                 required
//               />
//             </div>
//             <label
//               htmlFor={item}
//               className="ms-2 text-sm font-medium text-gray-300"
//             >
//               {" "}
//               {item}
//             </label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// const DataField = () => {
//   const [step, setStep] = useState(1);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (step > 2) {
//       navigate("/chat");
//     }
//   }, [step, navigate]);

//   return (
//     <div className="h-full w-full rounded-md bg-gray-800 p-4">
//       <div>
//         {step === 1 && <Step1 />}
//         {step === 2 && <Step2 />}
//         <button
//           onClick={() => setStep(step + 1)}
//           className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DataField;



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

const Step1 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <p className="font-bold py-4">Enter Preliminary Details</p>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            Age of Victim *
          </label>
          <select
            name="age"
            value={formData.age || ""}
            onChange={handleChange}
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            required
          >
            <option disabled>select age group</option>
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
          <label className="block text-sm font-medium text-white">Gender *</label>
          {gender.map((item) => (
            <div key={item} className="flex items-start">
              <input
                type="radio"
                name="gender"
                value={item}
                checked={formData.gender === item}
                onChange={handleChange}
                className="w-4 h-4 border rounded bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800"
              />
              <label className="ms-2 text-sm font-medium text-gray-300">{item}</label>
            </div>
          ))}
        </div>

        
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            Time of Incident *
          </label>
          <select
            name="incidentTime"
            value={formData.incidentTime || ""}
            onChange={handleChange}
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            required
          >
             <option value="Just now">Just now</option>
             <option value="5 mins before">5 mins before</option>
             <option value="10 mins before">10 mins before</option>
             <option value="15 mins before">15 mins before</option>
             <option value="30 mins before">30 mins before</option>
             <option value="1 hour ago">1 hour ago</option>
             <option value="More than 1 hour">More than 1 hour</option>
             <option value="Not sure">Not sure</option>
            
          </select>
        </div>

        
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            Describe incident
          </label>
          <textarea
            name="incidentDesc"
            value={formData.incidentDesc || ""}
            onChange={handleChange}
            rows={7}
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            required
          />
        </div>
      </div>
    </div>
  );
};

const Step2 = ({ formData, setFormData }) => {
  const handleCheckboxChange = (symptom) => {
    const updatedSymptoms = formData.symptoms || [];
    if (updatedSymptoms.includes(symptom)) {
      setFormData({
        ...formData,
        symptoms: updatedSymptoms.filter((item) => item !== symptom),
      });
    } else {
      setFormData({
        ...formData,
        symptoms: [...updatedSymptoms, symptom],
      });
    }
  };

  return (
    <div>
      <p className="font-bold py-4">Select symptoms from below</p>
      <div className="grid grid-cols-2">
        {symptoms.map((item) => (
          <div key={item} className="flex items-start mb-6">
            <input
              type="checkbox"
              checked={formData.symptoms?.includes(item) || false}
              onChange={() => handleCheckboxChange(item)}
              className="w-4 h-4 border rounded bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800"
            />
            <label className="ms-2 text-sm font-medium text-gray-300">{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

const DataField = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "1 - 24 months old",
    gender: "",
    incidentTime: "Just now",
    incidentDesc: "",
    symptoms: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (step > 2) {
      navigate("/chat", { state: formData });
    }
  }, [step, formData, navigate]);

  return (
    <div className="h-full w-full rounded-md bg-gray-800 p-4">
      <div>
        {step === 1 && <Step1 formData={formData} setFormData={setFormData} />}
        {step === 2 && <Step2 formData={formData} setFormData={setFormData} />}
        <button
          onClick={() => setStep(step + 1)}
          className="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataField;
