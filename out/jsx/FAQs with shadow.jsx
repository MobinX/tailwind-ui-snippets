<div x-data="{ faqsList: [\n  {\n    q: 'What are some random questions to ask?',\n    a: 'That\\'s exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you\\'re able to find the perfect random question.'\n  },\n  {\n    q: 'Do you include common questions?',\n    a: 'This generator doesn\\'t include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.'\n  },\n  {\n    q: 'Can I use this for 21 questions?',\n    a: 'Yes! there are two ways that you can use this question generator depending on what you\\'re after. You can indicate that you want 21 questions generated.'\n  },\n  {\n    q: 'Are these questions for girls or for boys?',\n    a: 'The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).'\n  },\n  {\n    q: 'What do you wish you had more talent doing?',\n    a: 'If you\\'ve been searching for a way to get random questions, you\\'ve landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.'\n  },\n  {\n    q: 'What are some random questions to ask?',\n    a: 'That\\'s exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you\\'re able to find the perfect random question to ask friends.'\n  }\n] }">
  <div className="leading-relaxed mt-12 mx-4 md:mx-8">
    <div className="text-center space-y-3">
      <h1 className="block text-base-content text-3xl font-semibold">
        Frequently Asked Questions
      </h1>
      <p className="text-base-content max-w-lg mx-auto">
        Answered all frequently asked questions. Can&rsquor;t find the answer
        you&rsquor;re looking for? feel free to contact us.
      </p>
    </div>
    <div className="relative bg-base-100 rounded-md mt-10 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto" style={{ boxShadow: "0px 7px 20px 7px #f1f1f1" }}>
      <div className="grid gap-4 py-8 md:grid-cols-2">
        <template x-for="(item, idx) in faqsList" key="idx" />
      </div>
      <span className="w-0.5 h-full bg-base-300/90 absolute top-0 left-0 mx-auto right-0 hidden md:block" />
    </div>
  </div>
</div>