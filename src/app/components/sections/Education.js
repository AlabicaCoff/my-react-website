
import Image from 'next/image';

export default function EducationSection({ education }) {
  return (
    <section className="min-h-screen py-10 lg:py-16 bg-white">
          <div className="min-h-screen text-4xl ">
            <div className="mb-16 text-center font-bold">
              <h2>Education</h2>
            </div>
            <div className="flex flex-col gap-16 mx-16 xl:mx-64">
              <div className="flex wrap flex-col-reverse lg:flex-row-reverse justify-center lg:justify-evenly rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden p-10 bg-white">
                <div className="lg:w-3/5 px-2">
                  <h3 className="text-2xl font-semibold mb-5">
                    {education.pibul.name}
                  </h3>
                  <h4 className="text-lg font-semibold ml-5 mb-2">
                    {education.pibul.program}
                  </h4>
                  <div className="ml-5">
                    <p className="text-base indent-3 text-gray-500">• GPAX {education.pibul.gpax}</p>
                    <p className="text-base indent-3 text-gray-500">• {education.pibul.duration}</p>
                    <p className="text-base indent-5 mt-3 hidden md:block">
                      {education.pibul.detail}
                    </p>
                  </div>
                </div>
                <div className="mx-auto mb-5 lg:w-2/5 px-2">
                  <Image className='rounded-lg'
                    src={education.pibul.imageUrl}
                    width={400}
                    height={270}
                    alt={education.pibul.name}
                  />

                </div>

              </div>
              <div className="flex wrap flex-col lg:flex-row justify-center lg:justify-evenly rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden p-2 md:p-10 bg-white">
                <div className="lg:w-3/5 px-2">
                  <h3 className="text-2xl font-semibold mb-5">
                    {education.kmitl.name}
                  </h3>
                  <h4 className="text-lg font-semibold ml-5 mb-2">
                    {education.kmitl.program}
                  </h4>
                  <div className="ml-5">
                    <p className="text-base indent-3 text-gray-500">• GPAX {education.kmitl.gpax}</p>
                    <p className="text-base indent-3 text-gray-500">• {education.kmitl.duration}</p>
                    <p className="text-base indent-5 mt-3 hidden md:block">
                        {education.kmitl.detail}
                    </p>
                  </div>
                </div>
                <div className="mx-auto mt-5 lg:w-2/5 px-2">
                  <Image className='rounded-lg'
                    src={education.kmitl.imageUrl}
                    width={400}
                    height={270}
                    alt={education.kmitl.name}
                  />

                </div>

              </div>

            </div>
            
          </div>
        </section>
  );
}