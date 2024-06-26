<section className="py-32">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-base-content text-3xl font-extrabold sm:text-4xl">Latest blog posts</h1>
            <p className="text-base-content">Blogs that are loved by the community. Updated every hour.</p>
            <form onSubmit={event => {}} className="items-center justify-center gap-3 sm:flex">
                <div className="relative">
                    <svg className="w-6 h-6 text-base-content absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <input type="text" placeholder="Enter your email" className="w-full pl-12 pr-3 py-2 text-base-content bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg sm:max-w-xs" />
                </div>
                <button className="w-full sm:w-auto sm:mt-0 btn btn-primary  duration-150 text-sm mt-3">                   Subscribe
                </button>
            </form>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
           { /*-use a map loop*/ }
                <li className="w-full mx-auto group sm:max-w-sm">
                    <a href="item.href">
                        <imgsrc="item.img" loading="lazy" alt="item.title" className="w-full rounded-lg">
                        <div className="mt-3 space-y-2">
                            <span className="block text-primary text-sm">item.date</span>
                            <h3 className="text-lg text-base-content duration-150 group-hover:text-primary font-semibold">item.title</h3>
                            <p className="text-base-content text-sm duration-150 group-hover:text-base-content">item.desc</p>
                        </div>
                    
                </imgsrc="item.img"></a></li><a href="item.href">
            
        </a></ul><a href="item.href">
    </a></div><a href="item.href">
</a></section>