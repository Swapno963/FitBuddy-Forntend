import program from "../assets/program.png";
export default function ProgramContainer() {

  const gymPrograms = [
    {
      id:1,
      img:program,  
      title: "Lean & Mean Transformation",
        description: "This program is designed to help you shed fat and build lean muscle mass through a combination of high-intensity interval training (HIIT), strength workouts, and personalized nutrition guidance. Say goodbye to excess weight and hello to a toned, sculpted physique."
    },
    {
      id:2,
      img:program,  
      title: "Strength & Power Builders",
        description: "Elevate your strength and power with this specialized program focusing on compound lifts, progressive overload, and advanced training techniques. Whether you're a beginner looking to build a solid foundation or an experienced lifter aiming to break through plateaus, this program will help you maximize your strength potential."
    },
    {
      id:3,
      img:program,  
      title: "Flex & Flow Yoga Fusion",
        description: "Find balance, flexibility, and inner peace with our unique yoga fusion program. Combining traditional yoga poses with dynamic flow sequences and breathwork, this program will improve your flexibility, enhance your mind-body connection, and leave you feeling rejuvenated and centered."
    },
    {
      id:4,
      img:program,  
      title: "Cardio Blast Bootcamp",
        description: "Get ready to sweat and torch calories with our high-energy cardio bootcamp. Incorporating a variety of cardiovascular exercises, plyometrics, and bodyweight movements, this program will skyrocket your fitness levels, boost your metabolism, and leave you feeling energized and empowered."
    },
    {
      id:5,
      img:program,  
      title: "Functional Fitness Fundamentals",
        description: "Learn how to move better, feel better, and live better with our functional fitness program. Through a series of functional movements, mobility drills, and corrective exercises, you'll improve your everyday movement patterns, prevent injuries, and enhance your overall quality of life."
    },
    {
      id:6,
      img:program,  
      title: "Mindful Muscle Recovery",
        description: "Give your body the rest and recovery it deserves with our mindful muscle recovery program. Incorporating techniques such as foam rolling, stretching, and relaxation exercises, this program will reduce muscle soreness, improve flexibility, and promote faster recovery between workouts."
    }
];

console.log(gymPrograms);

  return (
    <div className="bg-orange-50 py-24 sm:py-32">
      <div className="mx-auto max-w-9xl px-6 lg:px-9">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className=" font-bold text-xl leading-7 text-indigo-600">
            Our Programs
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to be Healthy
          </p>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {gymPrograms.map((p) => (
              <div key={p.id} className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-black ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <img src={p.img} alt="" />
                  </div>
                  {p.title}
                </dt>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  {p.description.slice(0,100)}
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
