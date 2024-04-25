<div x-data="{ state: false }">

    <header>
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
            <div className="flex justify-between">
                <a href="javascript:void(0)">
                    <img src="https://www.floatui.com/logo.svg" width="120" height="50" alt="Float UI logo" />
                </a>
                <button className="text-base-content outline-none md:hidden" onClick={event => {}}>
                    <template x-if="state" />
                    <template x-if="!state" />
                </button>
            </div>
            <ul className="{'hidden': !state, 'flex-1': true, 'justify-between': true, 'mt-12': true, 'md:flex': true, 'md:mt-0': true}">
                <li className="order-2 pb-5 md:pb-0">
                    <a href="javascript:void(0)" className="py-3 px-6 rounded-md shadow-md text-base-100 text-center bg-primary/90 focus:shadow-none block md:inline">
                        Sign In
                    </a>
                </li>
                <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
                    <li className="text-base-content hover:text-primary">
                        <a href="javascript:void(0)">Customers</a>
                    </li>
                    <li className="text-base-content hover:text-primary">
                        <a href="javascript:void(0)">Careers</a>
                    </li>
                    <li className="text-base-content hover:text-primary">
                        <a href="javascript:void(0)">Guides</a>
                    </li>
                    <li className="text-base-content hover:text-primary">
                        <a href="javascript:void(0)">Partners</a>
                    </li>
                </div>
            </ul>
        </nav>
    </header>
    <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
            <h1 className="text-base-content font-bold text-4xl md:text-5xl">
                Optimize your website for
                 <span className="text-primary"> Search engine</span>
            </h1>
            <p className="text-base-content max-w-xl mx-auto leading-relaxed">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
            </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <a href="javascript:void(0)" className="px-10 py-3.5 w-full bg-primary text-base-100 text-center rounded-md shadow-md block sm:w-auto">
                Get started
            </a>
            <a href="javascript:void(0)" className="px-10 py-3.5 w-full text-base-content text-center border rounded-md duration-300 hover:text-primary hover:shadow block sm:w-auto">
                Try it out
            </a>
        </div>
    </section>

</div>