import Link from "next/link";
import React from "react";
import Image from "next/image";
import resumePic from "../../public/ajmalresume.png";

function Resume() {
  return (
    <>
      <div className="my-2 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <span className="border p-1 font-semibold rounded-md  my-4 bg-slate-500 text-slate-100 float-right">
          <Link href="/">Home Page</Link>
        </span>
        <div className="">
          <Image src={resumePic} />
        </div>
        <div>
          <button className="p-1 text-red-500 rounded-md border-2 border-red-700 cursor-pointer hover:bg-gray-300">
            <a href="/resumeFile.pdf" download={"Ajmal_Resume"}>
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Resume;
