<section className="py-28 bg-base-content">
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
               { /*-use a map loop*/ }
                    <li className="w-full text-center bg-base-content px-12 py-4 rounded-lg sm:w-auto">
                        <h4 className="text-4xl text-base-100 font-semibold">item.data</h4>
                        <p className="mt-3 text-base-content font-medium">item.title</p>
                    </li>
                
            </ul>
        </div>
    </div>
</section>