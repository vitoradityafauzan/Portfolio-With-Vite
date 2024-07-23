import { HR } from "flowbite-react";

export default function Separator() {
  return (
    // <div className="separator">
    //   <span className="text-slate-50">s</span>
    // </div>
    <div>
      <HR.Trimmed className="bg-gradient-to-tr from-[#aa4feb] via-[#914aeb] via-[#a745ea] via-[#b971e9]  via-[#4d7fff] to-[#0091ff]  w-3/6 h-2 mt-16 lg:mt-24" />
    </div>
  );
}
