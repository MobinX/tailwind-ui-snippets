<div>
    <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-primary font-semibold pb-6">What people are saying</h3>
               { /*-use a map loop*/ }
                    <div x-show="currentTestimonial === index">
                        <figure>
                            <blockquote>
                                <p className="text-base-content text-xl font-semibold sm:text-2xl">testimonial.quote</p>
                            </blockquote>
                            <div className="mt-6">
                                <imgsrc="testimonial.avatar" className="w-16 h-16 mx-auto rounded-full">
                                <div className="mt-3">
                                    <span className="block text-base-content font-semibold">testimonial.name</span>
                                    <span className="block text-base-content text-sm mt-0.5">testimonial.title</span>
                                </div>
                            </imgsrc="testimonial.avatar"></div>
                        </figure>
                    </div>
                
            </div>
            <div className="mt-6">
                <ul className="flex gap-x-3 justify-center">
                   { /*-use a map loop*/ }
                        <li>
                            <button className="w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-primary focus:ring" onClick={event => {}} />
                        </li>
                    
                </ul>
            </div>
        </div>
    </section>
</div>