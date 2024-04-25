<div x-data="{ faqsList: [\n  {\n      q: 'What are some random questions to ask?',\n      a: 'That\\'s exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you\\'re able to find the perfect random question.',\n      href: 'javascript:void(0)'\n  },\n  {\n      q: 'Do you include common questions?',\n      a: 'This generator doesn\\'t include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.',\n      href: 'javascript:void(0)'\n  },\n  {\n      q: 'Can I use this for 21 questions?',\n      a: 'Yes! there are two ways that you can use this question generator depending on what you\\'re after. You can indicate that you want 21 questions generated.',\n      href: 'javascript:void(0)'\n  },\n  {\n      q: 'Are these questions for girls or for boys?',\n      a: 'The questions in this generator are gender neutral and can be used to ask either male or females (or any other gender the person identifies with).',\n      href: 'javascript:void(0)'\n  },\n  {\n      q: 'What do you wish you had more talent doing?',\n      a: 'If you\\'ve been searching for a way to get random questions, you\\'ve landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.',\n      href: 'javascript:void(0)'\n  }\n] }">
  <section className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
        <h3 className="text-base-content text-3xl font-extrabold sm:text-4xl">
          How can we help?
        </h3>
        <p className="text-base-content">
          Everything you need to know about the product. Can&rsquor;t find the
          answer you&rsquor;re looking for? feel free to
          <a className="text-primary font-semibold base-100space-nowrap" href="javascript:void(0)">
            contact us </a>.
        </p>
        <form onSubmit={event => {}} className="mx-auto sm:max-w-xs">
          <div className="relative">
            <svg className="w-6 h-6 text-base-content absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillrule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
            <input type="text" placeholder="Enter your email" className="w-full pl-12 pr-3 py-2 text-base-content bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg" />
          </div>
        </form>
      </div>
      <div className="mt-12">
        <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
          <template x-for="(item, index) in faqsList" key="index" />
        </ul>
      </div>
    </div>
  </section>
</div>