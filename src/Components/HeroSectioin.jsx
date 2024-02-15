import video from "../assets/gym-video.mp4";
import "../assets/style.css";
export default function HeroSectioin() {
  return (
    <>
      <div className=" video-background ">
        <video autoPlay muted loop id="bg-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="relative isolate px-6 pt-3 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-xl leading-6 text-white-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Take appointment with your trainer{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl pt-6 font-bold tracking-tight text-white sm:text-6xl">
              WORK HARDER, GET STRONGER
              </h1>
              <p className="mt-6 text-lg pt-5 leading-8 text-white">
              We offers challenging 45-minute workouts, focus meetings to keep you on track and the support of the best fitness community in the world
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Take Membership
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-rose-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
          </div>
        </div>
      </div>
    </>
  );
}
