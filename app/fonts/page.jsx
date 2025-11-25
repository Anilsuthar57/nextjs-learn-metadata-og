import React from "react";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // optional: add multiple weights if needed
  display: "swap", // avoids flash of invisible text (FOIT)
});

function page() {
  return (
    <>
      <h1 className={`text-7xl ${roboto.className}`}>Nominees</h1>
      <h1 className="text-7xl">Nominees</h1>
      <h1 className="text-7xl">Nominees</h1>
      <h1 className="text-7xl">Nominees</h1>
      <h1 className="text-7xl">Nominees</h1>
      <h1 className="text-7xl">Nominees</h1>
    </>
  );
}

export default page;
