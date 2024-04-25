<main className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 text-base-content md:px-8">
        <div className="max-w-xl space-y-3">
            <h3 className="text-primary font-semibold">
                Contact
            </h3>
            <p className="text-base-content text-3xl font-semibold sm:text-4xl">
                Let us know how we can help
            </p>
            <p>
                We&rsquor;re here to help and answer any question you might have, We look forward to hearing from you .
            </p>
        </div>
        <div>
            <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
               { /*-use a map loop*/ }
                    <li>
                        <h4 className="text-base-content text-lg font-medium">item.title</h4>
                        <div className="mt-3 flex items-center gap-x-3">
                            <div className="flex-none text-base-content">item.icon</div>
                            <p>item.contact</p>
                        </div>
                    </li>
                
            </ul>
        </div>
    </div>
</main>