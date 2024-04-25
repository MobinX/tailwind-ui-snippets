<section className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 text-base-content md:px-8">
        <div className="max-w-xl space-y-3">
            <h3 className="text-primary font-semibold">
                Features
            </h3>
            <p className="text-base-content text-3xl font-semibold sm:text-4xl">
                Everything you need to grow
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
            </p>
        </div>
        <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
               { /*-use a map loop*/ }
                    <li className="space-y-3">
                        <div className="w-12 h-12 border text-primary rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <h4 className="text-lg text-base-content font-semibold">item.title</h4>
                        <p>item.desc</p>
                    </li>
                
            </ul>
        </div>
    </div>
</section>