import React from "react";
import { ModeToggle } from "./Mode.Toggle";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Me = () => {
  return (
    <div className="flex flex-col gap-3 text-center items-center">
      <div className=" flex gap-2 items-center">
        {" "}
        <Link href="https://github.com/ayoubben18">
          <Linkedin size={30} />
        </Link>
        <Link href="in/ayoub-bensalah-56834b29b/">
          <Github size={30} />
        </Link>{" "}
        <Link href="mailto:ayoub.bensalah1@usmba.ac.ma">
          <Mail size={30} />
        </Link>
        <ModeToggle />
      </div>
      <div className=" grid grid-cols-1 gap-2">
        <h1 className=" font-bold text-4xl">AYOUB BENSALAH</h1>
        <p className=" text-lg">I'm a software developer from Morocco</p>
      </div>
    </div>
  );
};

export default Me;
