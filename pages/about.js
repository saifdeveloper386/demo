import React from "react";
import Link from 'next/link';

const About = () => {
  return (
    <>
     <div className="container contact">
        <div className="row">
            <div className="col">
            About
      <button className="btn btn-success">
      <Link href="/"><a> Home </a></Link>
      </button>
            </div>
        </div>
     </div>
    </>
  );
};

export default About;
