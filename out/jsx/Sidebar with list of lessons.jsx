<div x-data="{\n    lessons: {\n        rustLessons: [\n            { name: 'Introduction to Rust', href: 'javascript:void(0)' },\n            { name: 'Installing and Setting up Rust', href: 'javascript:void(0)' },\n            { name: 'Basic Syntax and Data Types', href: 'javascript:void(0)' },\n            { name: 'Control Flow Statements', href: 'javascript:void(0)' },\n            { name: 'Functions and Modules', href: 'javascript:void(0)' },\n            { name: 'Ownership and Borrowing', href: 'javascript:void(0)' },\n            { name: 'Structs and Enums', href: 'javascript:void(0)' },\n            { name: 'Traits and Generics', href: 'javascript:void(0)' }\n        ],\n        cargoLessons: [\n            { name: 'Introduction to Cargo', href: 'javascript:void(0)' },\n            { name: 'Installing and Configuring Cargo', href: 'javascript:void(0)' },\n            { name: 'Basic Cargo Commands', href: 'javascript:void(0)' },\n            { name: 'Working with Dependencies', href: 'javascript:void(0)' },\n            { name: 'Rust Workspaces with Cargo', href: 'javascript:void(0)' },\n            { name: 'Ownership and Borrowing', href: 'javascript:void(0)' },\n            { name: 'Structs and Enums', href: 'javascript:void(0)' },\n            { name: 'Traits and Generics', href: 'javascript:void(0)' }\n        ]\n    }\n}">
    <nav className="fixed z-40 top-0 left-0 w-full h-full border-r bg-base-100 space-y-8 overflow-auto sm:w-80">
        <div className="sticky top-0 space-y-8 bg-base-100">
            <div className="h-20 flex items-center px-4 border-b md:px-8">
                <a href="javascript:void(0)" className="flex-none">
                    <img src="https://floatui.com/logo.svg" width="140" className="mx-auto" />
                </a>
            </div>
            <div className="px-4 md:px-8">
                <div className="relative w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-base-content absolute left-3 inset-y-0 my-auto">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                    <input type="email" className="w-full pl-12 pr-3 py-2 bg-base-100 text-sm text-base-content bg-transparent outline-none border ring-primary focus:ring-2 shadow-sm rounded-lg duration-200" placeholder="Search..." />
                </div>
            </div>
        </div>
        <div className="text-[0.9rem] space-y-6">
            <div>
                <h3 className="pb-3 px-4 font-medium text-base-content md:px-8">Rust Basics</h3>
                <div className="text-base-content px-4 md:px-8">
                    <ul>
                        <template x-for="(item, index) in lessons.rustLessons" key="index" />
                    </ul>
                </div>
            </div>
            <div>
                <h3 className="pb-3 px-4 font-medium text-base-content md:px-8">Cargo Basics</h3>
                <div className="text-base-content px-4 md:px-8">
                    <ul>
                        <template x-for="(item, index) in lessons.cargoLessons" key="index" />
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>