<div x-data="{\n    tableItems: [\n        { name: \"Liam James\", email: \"liamjames@example.com\", position: \"Software engineer\", salary: \"$100K\" },\n        { name: \"Olivia Emma\", email: \"oliviaemma@example.com\", position: \"Product designer\", salary: \"$90K\" },\n        { name: \"William Benjamin\", email: \"william.benjamin@example.com\", position: \"Front-end developer\", salary: \"$80K\" },\n        { name: \"Henry Theodore\", email: \"henrytheodore@example.com\", position: \"Laravel engineer\", salary: \"$120K\" },\n        { name: \"Amelia Elijah\", email: \"amelia.elijah@example.com\", position: \"Open source manager\", salary: \"$75K\" }\n    ],\n    areAllChecked: false,\n    checkboxItems: {},\n    handleCheckboxItems() {\n        this.areAllChecked = !this.areAllChecked;\n        this.tableItems.forEach((_, idx) => {\n            this.checkboxItems[`checkbox${idx}`] = this.areAllChecked;\n        });\n    },\n    handleCheckboxChange(e, idx) {\n        this.areAllChecked = false;\n        this.checkboxItems[`checkbox${idx}`] = e.target.checked;\n        if (Object.values(this.checkboxItems).every(val => val === true)) this.areAllChecked = true;\n    },\n    init() {\n        this.tableItems.forEach((_, idx) => {\n            this.checkboxItems[`checkbox${idx}`] = false;\n        });\n    }\n}" className="max-w-screen-xl mx-auto px-4 md:px-8">
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
                <template x-for="(item, idx) in tableItems" key="idx" />
            </tbody>
        </table>
    </div>
</div>