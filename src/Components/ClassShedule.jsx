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
    <div className="pt-12 mt-12 ">
      <h3 className="text-center text-5xl text-blue-700">CLASSES SCHEDULE</h3>
      <p className="text-center pt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing
        <br />
        elit. Consequatur, possimus nemo animi id ea voluptatibus sunt amet unde
        explicabo dolorum, earum quos nam similique <br /> aliquam
        reprehenderit, dolor non ipsum quo.
      </p>
      <p className="text-center text-3xl py-12">Sunday / Monday / Tusday</p>
      <div className="flex items-center  justify-center  container mx-auto">
        <table className="min-w-full bg-white border border-gray-300 ">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-4 border-r">Fitness Class</th>
              <th className="py-2 px-4 border-r">Morning</th>
              <th className="py-2 px-4 border-r">Afternoon</th>
              <th className="py-2 px-4">Evening</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b ">
                <td className="py-12 text-center border-r">{row.type}</td>
                <td className="py-12 text-center border-r">{row.time1}</td>
                <td className="py-12 text-center border-r">{row.time2}</td>
                <td className="py-12 text-center">{row.time3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
