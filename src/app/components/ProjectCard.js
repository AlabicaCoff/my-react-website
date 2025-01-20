import Image from 'next/image';

export default function ProjectCard({ projectImage, projectTitle, projectDescription, tags, webUrl, githubUrl }) {
    return (
        <div className='shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1 overflow-hidden'>
            <Image
            src={`${projectImage}`}
            width={1000}
            height={540}
            alt={`${projectTitle}`}
            />
            <div className='p-5 '>
            <div className='text-center'>
                <h3 className='text-2xl font-semibold'>{`${projectTitle}`}</h3>
            </div>
            <div className='mt-2 text-center'>
                <p className='text-base indent-5'>
                    {`${projectDescription}`}
                </p>
            </div>
            <div className='flex justify-center flex-wrap mt-2 gap-1'>
                {tags.map((tag, index) => (
                    <div key={index} className='px-3 my-auto py-1 rounded-full bg-black/80 text-gray-300 text-sm'>{tag}</div>
                ))}
            </div>
            <div className='flex flex-row justify-center gap-5 mt-4'>
                <a
                    href={`${webUrl}`}
                    className="text-center text-xl text-white border-white bg-[#28282B] hover:bg-[#28282B]/50 font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-md cursor-pointer"
                >
                    View
                </a>
                <a
                    href={`${githubUrl}`}
                    className="text-center text-xl text-black border-black bg-white hover:bg-[#28282B]/50 hover:text-white font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-md cursor-pointer"
                >
                    Github
                </a>

            </div>
            </div>
            


        </div>
    );
};

