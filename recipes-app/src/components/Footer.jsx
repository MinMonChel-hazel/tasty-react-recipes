import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-2 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-[14px]">
          &copy; {new Date().getFullYear()} Tasty Recipes. All rights reserved.
        </p>
      </div>
    </div>
  );
}
