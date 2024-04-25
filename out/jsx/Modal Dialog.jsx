<div>
    <button onClick={event => {}} className="w-32 mx-auto py-2 ml-2 shadow-sm rounded-md bg-primary text-base-100 mt-4 flex items-center justify-center">
        Click me
    </button>

    <div x-show="open" className="fixed inset-0 w-full h-full bg-black bg-opacity-40" onClick={event => {}}>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-auto px-4">
            <div className="bg-base-100 rounded-md shadow-lg">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-medium text-base-content">Terms and agreements</h2>
                    <button onClick={event => {}} className="p-2 text-base-content rounded-md hover:bg-base-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-base-content">
                    <p>Commodo eget a et dignissim dignissim morbi vitae, mi. Mi aliquam sit ultrices enim cursus. Leo sapien, pretium duis est eu volutpat interdum eu non. Odio eget nullam elit laoreet. Libero at felis nam at orci venenatis rutrum nunc. Etiam mattis ornare pellentesque iaculis enim.</p>
                    <p>Felis eu non in aliquam egestas placerat. Eget maecenas ornare venenatis lacus nunc, sit arcu. Nam pharetra faucibus eget facilisis pulvinar eu sapien turpis at. Nec aliquam aliquam blandit eu ipsum.</p>
                </div>
                <div className="flex items-center gap-3 p-4 border-t">
                    <button onClick={event => {}} className="px-6 py-2 text-base-100 bg-primary rounded-md outline-none ring-offset-2 ring-primary focus:ring-2">
                        Accept
                    </button>
                    <button onClick={event => {}} aria-label="Close" className="px-6 py-2 text-base-content border rounded-md outline-none ring-offset-2 ring-primary focus:ring-2">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>