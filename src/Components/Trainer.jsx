const posts = [
    {
      id: 1,
      title: 'Dedicated to tailored fitness plans for weight loss and strength training.',
      description:
        "With over 5 years of experience in personal training, I am dedicated to helping my clients achieve their fitness goals through personalized workout plans and nutritional guidance. ",
  
        name: 'Sarah Johnson',
        role: 'Weight loss programs / strength training',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    
    },
    {
      id: 2,
      title: 'Passionate trainer with a sports science background focusing on functional movement and strength',
      description:
        "As a former competitive athlete and fitness enthusiast, I bring a passion for health and wellness to my training sessions. With a background in sports science",
  
        name: 'Michael Nguyen',
        role: 'Biomechanics / sports science',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    
    },
    {
      id: 3,
      title: 'Holistic trainer blending dance and yoga influences for balanced fitness and mental wellness.',
      description:
        "With a background in dance and yoga, I incorporate elements of flexibility, balance, and mindfulness into my training programs. I believe in the importance of holistic wellness, addressing both physical and mental aspects of fitness.",
  
        name: 'Emily Rodriguez',
        role: 'Yoga integration/ strength training',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    
    },

  ]
  
  export default function Trainer() {
    return (
      <div className="bg-red-50 py-24 sm:py-32 font-montserrat">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We provide the best trainer</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                {/* <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div> */}
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href='#'>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-800">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href='#'>
                        <span className="absolute inset-0" />
                        {post.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  