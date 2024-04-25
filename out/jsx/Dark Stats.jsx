<div x-data="{ stats: [\n        { data: '35K', desc: 'Customers consectetur adipiscing elit.' },\n        { data: '10K+', desc: 'Downloads efficitur id eu nulla facilisis turpis' },\n        { data: '40+', desc: 'Countries maximus sit amet auctor sed,' },\n        { data: '30M+', desc: 'Total revenue consectetur adipiscing elit' }\n    ] \n}">

    <section className="py-28 bg-base-content">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-2xl xl:mx-auto xl:text-center">
                <h3 className="text-base-100 text-3xl font-semibold sm:text-4xl">
                    Our customers are always happy
                </h3>
                <p className="mt-3 text-base-300/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                </p>
            </div>
            <div className="mt-12">
                <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                    <template x-for="(item, index) in stats" key="index" />
                </ul>
            </div>
        </div>
        <div className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }} />
    </section>
</div>