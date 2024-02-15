const data = [
  {
    id: 1,
    price: 300,
    title: "Monthly Plan",
    footer_text: "Private forum access",
    benefit: [
      "Member resources",
      "Official member t-shirt",
      "Private forum access",
    ],
  },
  {
    id: 1,
    price: 500,
    title: "Yealy Plan",
    footer_text: "Private forum access",
    benefit: [
      "Member resources",
      "Official member t-shirt",
      "Private forum access",
    ],
  },
  {
    id: 1,
    price: 300,
    title: "6 Month Plan",
    footer_text: "Private forum access",
    benefit: [
      "Member resources",
      "Official member t-shirt",
      "Private forum access",
    ],
  },
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
          {data.map((price) => (
            <div
              key={price.id}
              className="m-2 p-4"
            >
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-blue-500">
                    {price.title}
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-red-400">
                      $349
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-1 pt-5 grid grid-cols-1 text-sm  text-gray-600 sm:grid-cols-1 sm:gap-6"
                  >
                    {price.benefit.map((feature) => (
                      <li key={feature} className="text-gray-500">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-10 block w-full  rounded-md bg-indigo-600 px-2 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
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
