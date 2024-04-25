<section className="py-14" x-data="{ stats: [\n        { data: '35K', title: 'Customers' },\n        { data: '10K+', title: 'Downloads' },\n        { data: '40+', title: 'Countries' },\n        { data: '30M+', title: 'Total revenue' }\n    ] }">
    <div className="max-w-screen-xl mx-auto px-4 text-base-content gap-x-12 justify-between md:px-8 lg:flex">
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
            <h3 className="text-base-content text-3xl font-semibold sm:text-4xl">
                We do our best to make customers always happy
            </h3>
            <p className="mt-3 max-w-xl mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
            </p>
        </div>
        <div className="mt-12 lg:mt-0">
            <ul className="flex flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row lg:grid lg:grid-cols-2">
                <template x-for="(item, index) in stats" key="index" />
            </ul>
        </div>
    </div>
</section>