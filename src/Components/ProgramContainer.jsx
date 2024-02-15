import program from "../assets/program.png";
export default function ProgramContainer() {
  const data = [
    {
      id: 1,
      img: program,
      title: "Basic Fitness",
      detail:
        "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.",
    },
    {
      id: 1,
      img: program,
      title: "Basic Fitness",
      detail:
        "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.",
    },
    {
      id: 1,
      img: program,
      title: "Basic Fitness",
      detail:
        "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.",
    },
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-9xl px-6 lg:px-9">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Our Programs
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to be Healthy
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {data.map((p) => (
              <div key={p.id} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <img src={p.img} alt="" />
                  </div>
                  {p.title}
                </dt>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  {p.detail}
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
