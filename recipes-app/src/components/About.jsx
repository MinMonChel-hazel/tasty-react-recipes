import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="px-10 min-h-screen bg-amber-100 flex items-center justify-center gap-6"
    >
      <div className="flex-1 mr-10">
        <h3 className="text-amber-500 font-bold text-3xl mb-2">About Us</h3>
        <p className="text-gray-600">
          We are passionate about bringing you the best recipes from around the
          world. Our team of culinary experts curates each recipe to ensure
          delicious results every time.
        </p>
        <p className="text-gray-600">
          Our mission is to inspire home cooks everywhere to create delicious
          meals for their families and friends.
        </p>
      </div>
      <div className="flex-1">
        <img
          className="w-full h-auto"
          src="https://tse3.mm.bing.net/th/id/OIF.D2WgR0NaEv3u8sbs5xMHOg?rs=1&pid=ImgDetMain&o=7&rm=3"
        />
      </div>
    </div>
  );
}
