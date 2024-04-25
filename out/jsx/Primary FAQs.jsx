<section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8" x-data="{ faqsList: [\n    {\n        q: 'What are some random questions to ask?',\n        a: 'That\\'s exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you\\'re able to find the perfect random question.'\n    },\n    {\n        q: 'Do you include common questions?',\n        a: 'This generator doesn\\'t include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.'\n    },\n    {\n        q: 'Can I use this for 21 questions?',\n        a: 'Yes! there are two ways that you can use this question generator depending on what you\\'re after. You can indicate that you want 21 questions generated.'\n    },\n    {\n        q: 'Are these questions for girls or for boys?',\n        a: 'The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).'\n    },\n    {\n        q: 'What are some random questions to ask?',\n        a: 'That\\'s exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you\\'re able to find the perfect random question to ask friends.'\n    },\n    {\n        q: 'What do you wish you had more talent doing?',\n        a: 'If you\\'ve been searching for a way to get random questions, you\\'ve landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.'\n    },\n] }">
    <div className="space-y-3 text-center">
        <h1 className="text-3xl text-base-content font-semibold">
            Frequently Asked Questions
        </h1>
        <p className="text-base-content max-w-lg mx-auto text-lg">
            Answered all frequently asked questions, Still confused? feel free to contact us.
        </p>
    </div>
    <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        <template x-for="(item, idx) in faqsList" key="idx" />
    </div>
</section>