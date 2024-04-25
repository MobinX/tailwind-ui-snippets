<div x-data="{\n    tableItems: [\n        { name: 'Liam James', email: 'liamjames@example.com', position: 'Software engineer', salary: '$100K' },\n        { name: 'Olivia Emma', email: 'oliviaemma@example.com', position: 'Product designer', salary: '$90K' },\n        { name: 'William Benjamin', email: 'william.benjamin@example.com', position: 'Front-end developer', salary: '$80K' },\n        { name: 'Henry Theodore', email: 'henrytheodore@example.com', position: 'Laravel engineer', salary: '$120K' },\n        { name: 'Amelia Elijah', email: 'amelia.elijah@example.com', position: 'Open source manager', salary: '$75K' }\n    ]\n}" className="max-w-screen-xl mx-auto px-4 md:px-8">
    <div className="max-w-lg">
        <h3 className="text-base-content text-xl font-bold sm:text-2xl">Team members</h3>
        <p className="text-base-content mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
            <thead className="bg-base-200 text-base-content font-medium border-b">
                <tr className="divide-x">
                    <th className="py-3 px-6">Username</th>
                    <th className="py-3 px-6">Email</th>
                    <th className="py-3 px-6">Position</th>
                    <th className="py-3 px-6">Salary</th>
                </tr>
            </thead>
            <tbody className="text-base-content divide-y">
                <template x-for="(item, idx) in tableItems" key="idx" />
            </tbody>
        </table>
    </div>
</div>