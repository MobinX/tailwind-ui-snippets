<div x-data="{ faqsList: [\n    {\n        q: 'What are some random questions to ask?',\n        a: 'That\\'s exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you\\'re able to find the perfect random question.'\n    },\n    {\n        q: 'Do you include common questions?',\n        a: 'This generator doesn\\'t include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.'\n    },\n    {\n        q: 'Can I use this for 21 questions?',\n        a: 'Yes! there are two ways that you can use this question generator depending on what you\\'re after. You can indicate that you want 21 questions generated.'\n    },\n    {\n        q: 'Are these questions for girls or for boys?',\n        a: 'The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).'\n    },\n    {\n        q: 'What do you wish you had more talent doing?',\n        a: 'If you\\'ve been searching for a way to get random questions, you\\'ve landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.'\n    }\n] }">
    <section className="py-14 bg-base-content">
        <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
            <div className="flex-1">
                <div className="max-w-lg">
                    <h3 className="font-semibold text-cyan-400">
                        Frequently asked questions
                    </h3>
                    <p className="mt-3 text-base-100 text-3xl font-extrabold sm:text-4xl">
                        All information you need to know
                    </p>
                </div>
            </div>
            <div className="flex-1 mt-12 md:mt-0">
                <ul className="space-y-4 divide-y divide-base-content">
                    <template x-for="(item, index) in faqsList" key="index" />
                </ul>
            </div>
        </div>
    </section>
</div>