import React from "react";
import { Circles } from "react-loader-spinner";

const LoadingScreen = ({ title = "Loading", description = "Please wait..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Circles
        height={80}
        width={80}
        color="#4f46e5"
        ariaLabel="loading"
        visible={true}
      />
      <h1 className="mt-6 text-2xl font-semibold text-gray-800">{title}</h1>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default LoadingScreen;
