import Image from "next/image";
import React from "react";

import coneImage from "@/public/vercel.svg";
function page() {
  return (
    <>
      <div> Image component</div>

      <div className="">
        <div className="grid grid-cols-3 max-w-4xl gap-10  ">
          <div className="">
            <Image
              width={800}
              height={1200}
              loading="lazy"
              src={coneImage}
              alt="anil"
              // priority={false}
              placeholder="blur"
              blurDataURL="data:image/png;"
              // fill={true}
            />
          </div>
          <div className="">
            <Image width={800} height={1200} src={coneImage} alt="anil" />
          </div>
          <div className="">
            <Image width={800} height={1200} src={coneImage} alt="anil" />
          </div>
          <div className="">
            <Image width={800} height={1200} src={coneImage} alt="anil" />
          </div>
          <div className="">
            <Image width={800} height={1200} src={coneImage} alt="anil" />
          </div>
          <div className="">
            <Image width={800} height={1200} src={coneImage} alt="anil" />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
