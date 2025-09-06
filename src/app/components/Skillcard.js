import Image from "next/image";

import ProgressBar from "./Progressbar";

export default function SkillCard({ logoUrl, title, progress }) {
  return (
    <div className="p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden rounded-xl bg-[#37353E]">
      <div className="flex items-center mb-4">
        <div className="bg-[#44444E] w-12 h-12 rounded-lg p-2 flex items-center justify-center transition-colors duration-300">
          <Image src={`${logoUrl}`} width={36} height={36} alt={`${title}`} />
        </div>
        <h4 className="text-lg font-semibold ml-5">{`${title}`}</h4>
      </div>
      <ProgressBar progress={`${progress}`} />
    </div>
  );
}
