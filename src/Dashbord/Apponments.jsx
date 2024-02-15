
const appointmentData = [
  {
    
      "learner": "John Doe",
      "trainer": "Alice Smith",
      "appointment_types": "Type 1",
      "appointment_status": "Pending",
      "symptom": "Some symptom",
      "time": "2024-02-18T09:00:00Z",
      "cancel": false
    
  },
  {
   
      "learner": "Jane Doe",
      "trainer": "Bob Johnson",
      "appointment_types": "Type 2",
      "appointment_status": "Approved",
      "symptom": "Another symptom",
      "time": "2024-02-19T10:30:00Z",
      "cancel": true
    
  },
  {
   
      "learner": "Michael Smith",
      "trainer": "Emily Brown",
      "appointment_types": "Type 1",
      "appointment_status": "Pending",
      "symptom": "Yet another symptom",
      "time": "2024-02-20T11:15:00Z",
      "cancel": false
    
  },
  {
    
      "learner": "Sarah Johnson",
      "trainer": "David Wilson",
      "appointment_types": "Type 3",
      "appointment_status": "Pending",
      "symptom": "New symptom",
      "time": "2024-02-21T13:45:00Z",
      "cancel": false
    
  },
  {
   
      "learner": "Chris Evans",
      "trainer": "Elena Martinez",
      "appointment_types": "Type 2",
      "appointment_status": "Approved",
      "symptom": "Test symptom",
      "time": "2024-02-22T15:00:00Z",
      "cancel": true
    
  },
  {
    "learner": "Emma Wilson",
    "trainer": "George Thompson",
    "appointment_types": "Type 1",
    "appointment_status": "Pending",
    "symptom": "Final symptom",
    "time": "2024-02-23T16:20:00Z",
    "cancel": false
  }

]

export default function Apponments() {
  return (
    <>
      <table className="w-full ">
        <thead className="bg-indigo-300  border-b-2 border-blue-300">
          <tr>
            <th className="w-20 p-3 text-sm font-semibold">Id</th>
            <th className="w-20 p-3 text-sm font-semibold">Trainer</th>
            <th className="w-20 p-3 text-sm font-semibold">Treainee</th>
            <th className="w-20 p-3 text-sm font-semibold">AppointMnet Type</th>
            <th className="w-20 p-3 text-sm font-semibold">Appointment Status</th>
            <th className="w-20 p-3 text-sm font-semibold">Symtop</th>
            <th className="w-20 p-3 text-sm font-semibold">Time</th>
            <th className="w-20 p-3 text-sm font-semibold">Is Cancell</th>
            <th className="w-20 p-3 text-sm font-semibold">Action</th>
          </tr>
        </thead>
        {appointmentData.map((item) => (
          <tr key={item.id} className="bg-white border-b-2 border-blue-400 text-center">
            <td className="p-3 text-xl font-bold text-gray-500 text-center">{item.id}</td>
            <td className="p-3 text-xl text-gray-900">{item.trainer}</td>
            <td className="p-3 text-md text-gray-500 font-semibold">{item.learner.slice(0,111)}</td>
            <td className="p-3 text-md text-gray-500 font-semibold">{item.appointment_types}</td>
            <td className="p-3 text-md text-gray-500 font-semibold">{item.appointment_status}</td>
            <td className="p-3 text-md text-gray-500 font-semibold">{item.symptom}</td>
            <td className="p-3 text-md text-gray-500 font-semibold">{item.time}</td>
            <td className="p-3 text-md text-gray-500 font-semibold">{item.cancel ? "Yes" : "No"}</td>
            <td className="p-3 text-sm text-gray-500 ">
              <button className="bg-green-400 p-3 rounded-xl font-bold text-white">Edit</button>
              <button className="bg-red-400 p-3 rounded-xl font-bold text-white mx-2 my-1">Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
