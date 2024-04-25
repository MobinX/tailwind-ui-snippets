<section className="relative py-28 bg-base-content" x-data="{\n    features: [\n        {\n            icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',\n            title: 'Fast Refresh',\n            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue.'\n        },\n        {\n            icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',\n            title: 'Datacenter security',\n            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue.'\n        },\n        {\n            icon: 'M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3',\n            title: 'Build on your terms',\n            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue.'\n        },\n    ]\n}">
    <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-base-300/70 justify-between gap-24 lg:flex md:px-8">
        <div className="max-w-xl">
            <h3 className="text-base-100 text-3xl font-semibold sm:text-4xl">
                Do more with less complexity
            </h3>
            <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
            </p>
        </div>
        <div className="mt-12 lg:mt-0">
            <ul className="grid gap-8 sm:grid-cols-2">
                <template x-for="(item, idx) in features" key="idx" />
            </ul>
        </div>
    </div>
    <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }} />
</section>