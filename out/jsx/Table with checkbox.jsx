<div className="max-w-screen-xl mx-auto px-4 md:px-8">
    <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
            <h3 className="text-base-content text-xl font-bold sm:text-2xl">
                Team members
            </h3>
            <p className="text-base-content mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
        <div className="mt-3 md:mt-0">
            <a href="javascript:void(0)" className="inline-block px-4 py-2 text-base-100 duration-150 font-medium bg-primary rounded-lg hover:bg-primary/90 active:bg-primary md:text-sm">
                Add member
            </a>
        </div>
    </div>
    <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
            <thead className="text-base-content font-medium border-b">
                <tr>
                    <th className="py-3 px-6 flex items-center gap-x-4">
                        <div>
                            <input type="checkbox" id="checkbox-all-items" className="checkbox-item peer hidden" x-model="areAllChecked" onClick={event => {}} />
                            <label htmlFor="checkbox-all-items" className="relative flex w-5 h-5 bg-base-100 peer-checked:bg-primary rounded-md border ring-offset-2 ring-primary duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-base-100 after:rotate-45" />
                        </div>
                        Username
                    </th>
                    <th className="py-3 px-6">Email</th>
                    <th className="py-3 px-6">Position</th>
                    <th className="py-3 px-6">Salary</th>
                    <th className="py-3 px-6" />
                </tr>
            </thead>
            <tbody className="text-base-content divide-y">
               { /*-use a map loop*/ }
                    <tr className="odd:bg-base-200 even:bg-base-100">
                        <td className="px-6 py-4 base-100space-nowrap flex items-center gap-x-4">
                            <div>
                                <input type="checkbox" id="'checkbox-' + idx" name="'checkbox-' + idx" className="checkbox-item peer hidden" checked="checkboxItems[`checkbox${idx}`]" onClick={event => {}} />
                                <labelfor="'checkbox-' +="" idx"="" className="relative flex w-5 h-5 bg-base-100 peer-checked:bg-primary rounded-md border ring-offset-2 ring-primary duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-base-100 after:rotate-45">
                            </labelfor="'checkbox-'></div>
                            <span>item.name</span>
                        </td>
                        <td className="px-6 py-4 base-100space-nowrap">item.email</td>
                        <td className="px-6 py-4 base-100space-nowrap">item.position</td>
                        <td className="px-6 py-4 base-100space-nowrap">item.salary</td>
                        <td className="text-right px-6 base-100space-nowrap">
                            <a href="javascript:void(0)" className="py-2 px-3 font-medium text-primary hover:text-primary/90 duration-150 hover:bg-base-200 rounded-lg">Edit</a>
                            <button href="javascript:void(0)" className="py-2 leading-none px-3 font-medium text-error hover:text-error duration-150 hover:bg-base-200 rounded-lg">Delete</button>
                        </td>
                    </tr>
                
            </tbody>
        </table>
    </div>
</div>