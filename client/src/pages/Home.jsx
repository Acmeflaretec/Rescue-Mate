import React from "react";
import EmergencyCase from "../components/home/EmergencyCase";
import Navbar from "../components/home/Navbar";
import FloatingActionButton from "../components/common/FloatingActionButton";

const Home = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-full p-2 items-center">
      <Navbar />
      <EmergencyCase />
      <FloatingActionButton/>
    </div>
  );
};

export default Home;
