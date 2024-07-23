import { Footer } from "flowbite-react";

export default function Footerr() {
  return (
    <Footer container className="mt-11 sm:justify-between md:justify-center md:gap-24 lg:gap-96">
      <Footer.Copyright href="#" by="Vito RF" year={2024} />
      <Footer.LinkGroup className="text-xl font-semibold text-blue-600 justify-start w-auto">
        {/* <Footer.Link href="#header">About</Footer.Link> */}
        <Footer.Link href="#projects">Projects</Footer.Link>
        <Footer.Link href="#skills">Skills</Footer.Link>
        <Footer.Link href="#experience">Experience</Footer.Link>
        {/* <Footer.Link href="#contacts">Contact</Footer.Link> */}
      </Footer.LinkGroup>
    </Footer>
  );
}
