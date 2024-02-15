const newsletterData = {
  subject: "Get Fit, Stay Fit: Your Ultimate Guide to Health & Wellness",
  introduction:
    "Welcome to our monthly newsletter, dedicated to helping you achieve your fitness goals and maintain a healthy lifestyle. Read on for tips, updates, and special offers from our gym!",
  sections: [
    {
      title: "Featured Workout of the Month",
      content:
        "This month, we're spotlighting our High-Intensity Interval Training (HIIT) workout, guaranteed to burn fat, boost metabolism, and improve cardiovascular health. Join us for exhilarating sessions led by our expert trainers!",
    },
    {
      title: "Nutrition Tips & Recipes",
      content:
        "Fuel your body for success with our nutrition tips and delicious recipes! Discover the power of balanced meals, smart snacking, and hydration strategies to support your fitness journey.",
    },
    {
      title: "Member Success Story",
      content:
        "Meet John, one of our dedicated members who transformed his health and fitness with our programs. Read his inspiring story and get motivated to reach your own goals!",
    },
    {
      title: "Upcoming Events & Specials",
      content:
        "Don't miss out on our upcoming events and specials! From fitness challenges and workshops to exclusive discounts on personal training packages, there's something for everyone to enjoy.",
    },
  ],
  closing:
    "Ready to take your fitness to the next level? Visit us today and discover why we're the ultimate destination for health and wellness. Let's achieve greatness together!",
};

export default function NewsLetter() {
  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32 bg-gradient-to-r from-purple-300 to-purple-600 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-2xl font-bold  text-black sm:text-4xl leading-10">
              {newsletterData.subject}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-900">
              {newsletterData.introduction}
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            {newsletterData.sections.map((item) => (
              <div key={item.title} className="flex flex-col items-start">
                <div className="mt-4 font-semibold text-white">
                  {item.title}
                </div>
                <dd className="mt-2 leading-7 font-semibold text-gray-900">
                  {item.content.slice(0, 50)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
