<div className="max-w-screen-xl mx-auto mt-12 px-4 text-base-content md:px-8">
    <div className="hidden items-center justify-between sm:flex" aria-label="Pagination">
        <a href="#" className="hover:text-primary flex items-center gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
            </svg>
            Previous
        </a>
        <ul className="flex items-center gap-1">
            <li className="text-sm">
                <div>
                    1
                </div>
            </li>
            <li className="text-sm">
                <a href="#" aria-current="page" className="px-3 py-2 rounded-lg duration-150 hover:text-primary hover:bg-primary/80 bg-primary/80 text-primary font-medium">
                    2
                </a>
            </li>
            <li className="text-sm">
                <a href="#" className="px-3 py-2 rounded-lg duration-150 hover:text-primary hover:bg-primary/80">
                    3
                </a>
            </li>
            <li className="text-sm">
                <div>
                    ...
                </div>
            </li>
            <li className="text-sm">
                <a href="#" className="px-3 py-2 rounded-lg duration-150 hover:text-primary hover:bg-primary/80">
                    8
                </a>
            </li>
            <li className="text-sm">
                <a href="#" className="px-3 py-2 rounded-lg duration-150 hover:text-primary hover:bg-primary/80">
                    9
                </a>
            </li>
            <li className="text-sm">
                <a href="#" className="px-3 py-2 rounded-lg duration-150 hover:text-primary hover:bg-primary/80">
                    10
                </a>
            </li>
        </ul>
        <a href="#" className="hover:text-primary flex items-center gap-x-2">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
            </svg>
        </a>
    </div>
    { /* On mobile version */ }
    <div className="flex items-center justify-between text-sm text-base-content font-medium sm:hidden">
        <a href="#" className="px-4 py-2 border rounded-lg duration-150 hover:bg-base-200">Previous</a>
        <div className="font-medium">
            Page 1 of 9
        </div>
        <a href="#" className="px-4 py-2 border rounded-lg duration-150 hover:bg-base-200">Next</a>
    </div>
</div>