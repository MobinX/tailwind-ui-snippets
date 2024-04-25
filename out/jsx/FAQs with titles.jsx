<section x-data="{ faqsList: [\n  {\n      'label': 'Payment',\n      'qas': [\n          {\n              'q': 'What are some random questions to ask?',\n              'a': 'That\\'s exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you\\'re able to find the perfect random question.'\n          },\n          {\n              'q': 'Do you include common questions?',\n              'a': 'This generator doesn\\'t include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.'\n          }\n      ]\n  },\n  {\n      'label': 'Account',\n      'qas': [\n          {\n              'q': 'Can I use this for 21 questions?',\n              'a': 'Yes! there are two ways that you can use this question generator depending on what you\\'re after. You can indicate that you want 21 questions generated.'\n          },\n          {\n              'q': 'Are these questions for girls or for boys?',\n              'a': 'The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).'\n          },\n          {\n              'q': 'What do you wish you had more talent doing?',\n              'a': 'If you\\'ve been searching for a way to get random questions, you\\'ve landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.'\n          }\n      ]\n  },\n  {\n      'label': 'License',\n      'qas': [\n          {\n              'q': 'What\\'s something that was completely out-of-character that you did?',\n              'a': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'\n          }\n      ]\n  }\n] }">
  <div className="max-w-screen-xl mx-auto px-4 md:px-8">
    <div className="max-w-lg">
      <h3 className="mt-3 text-base-content text-3xl font-extrabold sm:text-4xl">
        Frequently asked questions
      </h3>
      <div className="mt-3 text-base-content dark:text-base-content">
        <p>
          Can&rsquor;t find the answer you&rsquor;re looking for? feel free to
          <a className="text-primary font-semibold base-100space-nowrap" href="support@floatui.com">
            contact us </a>.
        </p>
      </div>
    </div>
    <div className="mt-12 divide-y sm:mt-20">
      <template x-for="(list, idx) in faqsList" key="idx" />
    </div>
  </div>
</section>