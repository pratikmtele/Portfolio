import React from "react";
import { Certificate, Container } from "./index.js";
import { MongoCert } from "../assets/index.js";

function Certifications() {
  const certificates = [
    {
      image: MongoCert,
      title: "MongoDB NodeJS Developer Path (MongoDB)",
      certId: "MDBzo9m0py2lw",
      certLink: "https://learn.mongodb.com/c/zARBOwlNT6yk887DKkpDyQ",
    },
  ];

  return (
    <Container>
      <section id="certification" className="mt-20">
        <div className="mb-32 flex flex-col items-center">
          <h1 className="text-2xl inline-block font-bold mb-2">
            Certification
          </h1>
          <div className="h-[5px] gradient-btn w-[88px] rounded-md"></div>
        </div>
        <div className="grid grid-cols-2 gap-14">
          {certificates.map((certificate) => (
            <Certificate
              key={certificate.certId}
              image={certificate.image}
              title={certificate.title}
              certLink={certificate.certLink}
              certId={certificate.certId}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}

export default Certifications;