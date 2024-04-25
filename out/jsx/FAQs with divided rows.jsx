<section className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className="flex-1">
            <div className="max-w-lg">
                <h3 className="font-semibold text-primary">
                    Frequently asked questions
                </h3>
                <p className="mt-3 text-base-content text-3xl font-extrabold sm:text-4xl">
                    All information you need to know
                </p>
            </div>
        </div>
        <div className="flex-1 mt-12 md:mt-0">
            <ul className="space-y-4 divide-y">
               { /*-use a map loop*/ }
                    <li className="py-5">
                        <summary className="flex items-center justify-between font-semibold text-base-content">item.q</summary>
                        <p className="mt-3 text-base-content leading-relaxed">item.a</p>
                    </li>
                
            </ul>
        </div>
    </div>
</section>