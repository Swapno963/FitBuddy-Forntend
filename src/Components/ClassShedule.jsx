export default function classNameShedule() {
  const data = [
    {
      id: 1,
      type: "Muscle Training",
      time1: "10:00AM - 11:30AM",
      time2: '10:00AM - 11:30AM',
      time3: '',

    },
    { id: 2, type: "Body Building", name: "", age: 30, occupation: "Designer" },
    {
      id: 3,
      type: "Yoga Training Class",
      time1: "10:00AM - 11:30AM",
      time2: '',
      time3: '10:00AM - 11:30AM',
    },
    {
      id: 3,
      type: "Yoga Training Class",
      time1: "",
      time2: '10:00AM - 11:30AM',
      time3: '10:00AM - 11:30AM',
    },
    // Add more data as needed
  ];
  return (
    <div className="pt-12 bg-blue-200 py-12">
      <h3 className="text-center text-5xl font-bold text-blue-700 py-6">CLASSES SCHEDULE</h3>
      <p className="text-center pt-5 font-semibold leading-relaxed text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing
     
        elit. Consequatur, possimus nemo    <br />animi id ea voluptatibus sunt amet unde
        explicabo dolorum,  earum quos nam <br /> similiquealiquam
        reprehenderit, dolor non ipsum quo.
      </p>
      <p className="text-center text-3xl py-6 font-bold text-gray-600">Sunday / Monday / Tusday</p>
      <div className="flex items-center  justify-center  container mx-auto">
        <table className="min-w-full bg-blue-50 border border-gray-300 ">
          <thead>
            <tr className="bg-blue-400  border-b">
              <th className="py-2 px-4 border-r text-xl text-gray-600 leading-relaxed">Fitness Class</th>
              <th className="py-2 px-4 border-r  text-xl text-gray-600 leading-relaxed">Morning</th>
              <th className="py-2 px-4 border-r  text-xl text-gray-600 leading-relaxed">Afternoon</th>
              <th className="py-2 px-4  text-xl text-gray-600 leading-relaxed">Evening</th>
            </tr>
          </thead>
          <tbody className="bg-sky-300">
            {data.map((row) => (
              <tr key={row.id} className="border-b ">
                <td className="py-12 text-center border-r font-medium text-gray-700 leading-relaxed text-3xl">{row.type}</td>
                <td className="py-12 text-center border-r  text-gray-700 leading-relaxed text-3xl">{row.time1}</td>
                <td className="py-12 text-center border-r  text-gray-700 leading-relaxed text-3xl">{row.time2}</td>
                <td className="py-12 text-center  text-gray-700 leading-relaxed text-3xl">{row.time3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
