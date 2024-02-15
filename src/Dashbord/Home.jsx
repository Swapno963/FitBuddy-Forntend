export default function Home() {
  return (
    <>
      <section className="pt-12">
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-blue-300  p-12 font-semibold text-xl rounded-xl">Total Members : 16</div>
          <div className="bg-green-300 p-12 font-semibold text-xl rounded-xl">Total Active Members : 10</div>
          <div className="bg-red-300 p-12 font-semibold text-xl rounded-xl">Total Inactive Members : 10</div>
          <div className="bg-purple-300 p-12 font-semibold text-xl rounded-xl">Total Trainer : 6</div>
          <div className="bg-cyan-300 p-12 font-semibold text-xl rounded-xl">Total Income : 120k $</div>
          <div className="bg-amber-200 p-12 font-semibold text-xl rounded-xl">Current Month Expence : 20k $</div>
        </div>
      </section>
    </>
  );
}
