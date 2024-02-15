
const membershipPlans = [
  {
    id:1,
      title: "Monthly Plan",
      fee: "$50",
      benefits: ["Unlimited gym access", "Access to group fitness classes", "Personalized workout plans"],
      footer_text: "Stay flexible with our monthly plan. Enjoy all the benefits of our gym without any long-term commitment."
  },
  {
    id:2,
      title: "6-Month Plan",
      fee: "$250",
      benefits: ["Unlimited gym access", "Access to group fitness classes", "Personalized workout plans", "2 complimentary personal training sessions"],
      footer_text: "Commit to your fitness journey and save with our 6-month plan. Get additional perks like personal training sessions."
  },
  {
    id:3,
      title: "1-Year Plan",
      fee: "$450",
      benefits: ["Unlimited gym access", "Access to group fitness classes", "Personalized workout plans", "4 complimentary personal training sessions", "Nutritional consultation"],
      footer_text: "Maximize your savings and commitment to fitness with our 1-year plan. Get exclusive benefits and personalized support."
  }
];

export default function Pricing() {
  return (
    <div className=" py-24 sm:py-32 bg-blue-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="p-12 mx-auto mt-16  rounded-3xl ring-1 ring-blue-800-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          {membershipPlans.map((plan) => (
            <div
              key={plan.id}
              className="m-2 p-4"
            >
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-blue-500">
                    {plan.title}
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-red-400">
                      $ {plan.fee}
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-1 pt-5 grid grid-cols-1 text-sm  text-gray-600 sm:grid-cols-1 sm:gap-6"
                  >
                    {plan.benefits.map((feature) => (
                      <li key={feature} className="text-gray-500">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="detailPrice"
                    className="mt-10 block w-full  rounded-md bg-indigo-600 px-2 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                  {plan.footer_text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
