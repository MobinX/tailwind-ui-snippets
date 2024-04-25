<div x-data="{\n    tableItems: [\n        { label: 'Pages', title: 'Top pages', items: [ { prop: 'https://www.google.com', clicks: '129', impression: 'Good' }, { prop: 'https://www.youtube.com', clicks: '798', impression: 'Normal' }, { prop: 'https://www.github.com', clicks: '399', impression: 'Great' }, { prop: 'https://www.floatui.com', clicks: '678', impression: 'Bad' } ] },\n        { label: 'Countries', title: 'Top countries', items: [ { prop: 'Mauritania', clicks: '203', impression: 'Good' }, { prop: 'United state america', clicks: '408', impression: 'Great' }, { prop: 'France', clicks: '99', impression: 'Bad' }, { prop: 'Germany', clicks: '320', impression: 'Normal' } ] },\n        { label: 'Devices', title: 'Top devices', items: [ { prop: 'Android', clicks: '360', impression: 'Normal' }, { prop: 'Linux', clicks: '190', impression: 'Good' }, { prop: 'Macbook', clicks: '129', impression: 'Good' }, { prop: 'Windows', clicks: '50', impression: 'Bad' } ] },\n    ],\n    selectedItem: 0,\n    labelColors: { 'Good': 'text-primary bg-primary/40', 'Normal': 'text-primary bg-primary/35', 'Great': 'text-pink-600 bg-pink-50', 'Bad': 'text-error bg-red-50' }\n}">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
            <h3 className="text-base-content text-xl font-bold sm:text-2xl">Reports</h3>
            <p className="text-base-content mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="text-sm mt-12 overflow-x-auto">
            <ul role="tablist" className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
                <template x-for="(item, idx) in tableItems" key="idx" />
            </ul>
            <table className="w-full table-auto text-left">
                <thead className="text-base-content font-medium border-b">
                    <tr>
                        <th className="w-9/12 py-4 pr-6" x-text="tableItems[selectedItem].title" />
                        <th className="py-4 pr-6">Clicks</th>
                        <th className="py-4 pr-6">Impression</th>
                    </tr>
                </thead>
                <tbody className="text-base-content divide-y">
                    <template x-for="(item, idx) in tableItems[selectedItem].items" key="idx" />
                </tbody>
            </table>
        </div>
    </div>
</div>