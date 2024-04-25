<section className="py-28 bg-base-content" x-data="{ stats: [ { data: '35K', title: 'Customers' }, { data: '40+', title: 'Countries' }, { data: '30M+', title: 'Total revenue' } ] }">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-base-100 text-3xl font-semibold sm:text-4xl">
                Our customers are always happy
            </h3>
            <p className="mt-3 text-base-300/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
            </p>
        </div>
        <div className="mt-12">
            <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                <template x-for="(item, idx) in stats" key="idx" />
            </ul>
        </div>
    </div>
</section>