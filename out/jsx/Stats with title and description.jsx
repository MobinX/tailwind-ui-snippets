<div x-data="{ stats: [\n        { data: '35K', title: 'Customers' },\n        { data: '10K+', title: 'Downloads' },\n        { data: '40+', title: 'Countries' },\n        { data: '30M+', title: 'Total revenue' }\n    ] \n}">

    <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-base-content md:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-base-content text-3xl font-semibold sm:text-4xl">
                    Our customers are always happy
                </h3>
                <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                </p>
            </div>
            <div className="mt-12">
                <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                    <template x-for="(item, index) in stats" key="index" />
                </ul>
            </div>
        </div>
    </section>

</div>