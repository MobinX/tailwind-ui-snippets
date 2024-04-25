<section x-data="{ posts: [\n    {\n        title: 'What is SaaS? Software as a Service Explained',\n        desc: 'Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.',\n        img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',\n        date: 'Jan 4 2022',\n        href: 'javascript:void(0)'\n    },\n    {\n        title: 'A Quick Guide to WordPress Hosting',\n        desc: 'According to him, \xE2\u20AC\u0153I\\'m still surprised that this has happened. But we are surprised because we are so surprised.\xE2\u20AC\x9DMore revelations.',\n        img: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',\n        date: 'Jan 4 2022',\n        href: 'javascript:void(0)'\n    },\n    {\n        title: '7 Promising VS Code Extensions Introduced in 2022',\n        desc: 'I hope I remembered all the stuff that they needed to know. They\\'re like, \\'okay,\\' and write it in their little reading notebooks.',\n        img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',\n        date: 'Jan 4 2022',\n        href: 'javascript:void(0)'\n    },\n    {\n        title: 'How to Use Root C++ Interpreter Shell to Write C++ Programs',\n        desc: 'The powerful gravity waves resulting from the impact of the planets\\' moons \xE2\u20AC\u201D four in total \xE2\u20AC\u201D were finally resolved in 2015 when gravitational.',\n        img: 'https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',\n        date: 'Jan 4 2022',\n        href: 'javascript:void(0)'\n    }\n] }" className="py-32">
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
            <template x-for="(item, index) in posts" key="index" />
        </ul>
    </div>
</section>