<div x-data="{ tableItems: [\n    {\n        name: 'Solo learn app',\n        date: 'Oct 9, 2023',\n        status: 'Active',\n        price: '$35.000',\n        plan: 'Monthly subscription'\n    },\n    {\n        name: 'Window wrapper',\n        date: 'Oct 12, 2023',\n        status: 'Active',\n        price: '$12.000',\n        plan: 'Monthly subscription'\n    },\n    {\n        name: 'Unity loroin',\n        date: 'Oct 22, 2023',\n        status: 'Archived',\n        price: '$20.000',\n        plan: 'Annually subscription'\n    },\n    {\n        name: 'Background remover',\n        date: 'Jan 5, 2023',\n        status: 'Active',\n        price: '$5.000',\n        plan: 'Monthly subscription'\n    },\n    {\n        name: 'Colon tiger',\n        date: 'Jan 6, 2023',\n        status: 'Active',\n        price: '$9.000',\n        plan: 'Annually subscription'\n    }\n] }" className="max-w-screen-xl mx-auto px-4 md:px-8">

    <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
            <h3 className="text-base-content text-xl font-bold sm:text-2xl">All products</h3>
            <p className="text-base-content mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="mt-3 md:mt-0">
            <a href="javascript:void(0)" className="inline-block px-4 py-2 text-base-100 duration-150 font-medium bg-primary rounded-lg hover:bg-primary/90 active:bg-primary md:text-sm">Add product</a>
        </div>
    </div>
    <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
            <thead className="text-base-content font-medium border-b">
                <tr>
                    <th className="py-3 pr-6">name</th>
                    <th className="py-3 pr-6">date</th>
                    <th className="py-3 pr-6">status</th>
                    <th className="py-3 pr-6">Purchase</th>
                    <th className="py-3 pr-6">price</th>
                    <th className="py-3 pr-6" />
                </tr>
            </thead>
            <tbody className="text-base-content divide-y">
                <template x-for="(item, idx) in tableItems" key="idx" />
            </tbody>
        </table>
    </div>
</div>