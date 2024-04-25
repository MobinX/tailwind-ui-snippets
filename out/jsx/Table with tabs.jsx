<div>
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
            <h3 className="text-base-content text-xl font-bold sm:text-2xl">Reports</h3>
            <p className="text-base-content mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="text-sm mt-12 overflow-x-auto">
            <ul role="tablist" className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
               { /*-use a map loop*/ }
                    <liclass="`py-2 border-b-2@{selecteditem="=" idx="" ?="" 'border-primary="" text-primary'="" 'border-base-100="" text-base-content'}`"="">
                        <button role="tab" aria-selected="selectedItem == idx ? 'true' 'false'" aria-controls="'tabpanel-' + (idx + 1)" className="py-2.5 px-4 rounded-lg duration-150 hover:text-primary hover:bg-base-200 active:bg-base-300 font-medium" onClick={event => {}}>
                            <span>item.label</span>
                        </button>
                    
                </liclass="`py-2>
            </ul>
            <table className="w-full table-auto text-left">
                <thead className="text-base-content font-medium border-b">
                    <tr>
                        <th className="w-9/12 py-4 pr-6">tableItems[selectedItem].title</th>
                        <th className="py-4 pr-6">Clicks</th>
                        <th className="py-4 pr-6">Impression</th>
                    </tr>
                </thead>
                <tbody className="text-base-content divide-y">
                   { /*-use a map loop*/ }
                        <tr>
                            <td className="pr-6 py-4 base-100space-nowrap">item.prop</td>
                            <td className="pr-6 py-4 base-100space-nowrap text-primary">item.clicks</td>
                            <td className="pr-6 py-4 base-100space-nowrap">
                                <spanclass="`py-2 px-3="" rounded-full="" font-semibold="" text-xs@{labelcolors[item.impression]}`"="">item.impression</spanclass="`py-2></td>
                        </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</div>