<div className="max-w-screen-xl mx-auto px-4 md:px-8">

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
               { /*-use a map loop*/ }
                    <tr>
                        <td className="pr-6 py-4 base-100space-nowrap">item.name</td>
                        <td className="pr-6 py-4 base-100space-nowrap">item.date</td>
                        <td className="pr-6 py-4 base-100space-nowrap">
                            <spanclass="`px-3 py-2="" rounded-full="" font-semibold="" text-xs@{item.status="==" 'active'="" ?="" 'text-primary="" bg-primary="" 40'="" 35'}`"="">item.status</spanclass="`px-3></td>
                        <td className="pr-6 py-4 base-100space-nowrap">item.plan</td>
                        <td className="pr-6 py-4 base-100space-nowrap">item.price</td>
                        <td className="text-right base-100space-nowrap">
                            <a href="javascript:void(0)" className="py-1.5 px-3 text-base-content hover:text-base-content duration-150 hover:bg-base-200 border rounded-lg">Manage</a>
                        </td>
                    </tr>
                
            </tbody>
        </table>
    </div>
</div>