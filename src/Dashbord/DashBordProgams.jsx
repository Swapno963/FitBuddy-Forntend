import program from "../assets/program.png";
const gymPrograms = [
  {
    id: 1,
    img: program,
    title: "Lean & Mean Transformation",
    description:
      "This program is designed to help you shed fat and build lean muscle mass through a combination of high-intensity interval training (HIIT), strength workouts, and personalized nutrition guidance. Say goodbye to excess weight and hello to a toned, sculpted physique.",
  },
  {
    id: 2,
    img: program,
    title: "Strength & Power Builders",
    description:
      "Elevate your strength and power with this specialized program focusing on compound lifts, progressive overload, and advanced training techniques. Whether you're a beginner looking to build a solid foundation or an experienced lifter aiming to break through plateaus, this program will help you maximize your strength potential.",
  },
  {
    id: 3,
    img: program,
    title: "Flex & Flow Yoga Fusion",
    description:
      "Find balance, flexibility, and inner peace with our unique yoga fusion program. Combining traditional yoga poses with dynamic flow sequences and breathwork, this program will improve your flexibility, enhance your mind-body connection, and leave you feeling rejuvenated and centered.",
  },
  {
    id: 4,
    img: program,
    title: "Cardio Blast Bootcamp",
    description:
      "Get ready to sweat and torch calories with our high-energy cardio bootcamp. Incorporating a variety of cardiovascular exercises, plyometrics, and bodyweight movements, this program will skyrocket your fitness levels, boost your metabolism, and leave you feeling energized and empowered.",
  },
  {
    id: 5,
    img: program,
    title: "Functional Fitness Fundamentals",
    description:
      "Learn how to move better, feel better, and live better with our functional fitness program. Through a series of functional movements, mobility drills, and corrective exercises, you'll improve your everyday movement patterns, prevent injuries, and enhance your overall quality of life.",
  },
  {
    id: 6,
    img: program,
    title: "Mindful Muscle Recovery",
    description:
      "Give your body the rest and recovery it deserves with our mindful muscle recovery program. Incorporating techniques such as foam rolling, stretching, and relaxation exercises, this program will reduce muscle soreness, improve flexibility, and promote faster recovery between workouts.",
  },
];

export default function DashBordProgams() {
  return (
    <>
      <table className="w-full ">
        <thead className="bg-indigo-300  border-b-2 border-blue-300">
          <tr>
            <th className="w-20 p-3 text-sm font-semibold">Id</th>
            <th className="w-20 p-3 text-sm font-semibold">Title</th>
            <th className="w-20 p-3 text-sm font-semibold">Description</th>
            <th className="w-20 p-3 text-sm font-semibold">Date</th>
            <th className="w-20 p-3 text-sm font-semibold">Action</th>
          </tr>
        </thead>
        {gymPrograms.map((item) => (
          <tr key={item.id} className="bg-white border-b-2 border-blue-400 text-center">
            <td className="p-3 text-xl font-bold text-gray-500 text-center">{item.id}</td>
            <td className="p-3 text-xl text-gray-900">{item.title}</td>
            <td className="p-3 text-md text-gray-500 font-semibold">{item.description.slice(0,111)}</td>
            <td className="p-3 text-md text-gray-500 font-semibold">Septabmer 12</td>
            <td className="p-3 text-sm text-gray-500 ">
              <button className="bg-green-400 p-3 rounded-xl font-bold text-white">Edit</button>
              <button className="bg-red-400 p-3 rounded-xl font-bold text-white mx-2">Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
