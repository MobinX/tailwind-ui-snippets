<form onSubmit={event => { event.preventDefault(); }} className="max-w-md px-4 mx-auto mt-12">
    <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-base-content left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="Search" className="w-full py-3 pl-12 pr-4 text-base-content border rounded-md outline-none bg-base-200 focus:bg-base-100 focus:border-primary" />
    </div>
</form>