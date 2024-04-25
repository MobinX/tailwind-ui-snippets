<section className="relative py-28 bg-base-content">
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
               { /*-use a map loop*/ }
                    <li className="flex gap-x-4">
                        <div className="flex-none w-12 h-12 bg-base-content text-cyan-400 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="item.icon" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg text-base-300 font-semibold">item.title</h4>
                            <p className="mt-3">item.desc</p>
                        </div>
                    </li>
                
            </ul>
        </div>
    </div>
    <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }} />
</section>