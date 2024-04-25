<div x-data="{ \n    tableItems: [\n        {\n            avatar: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',\n            name: 'Liam James',\n            email: 'liamjames@example.com',\n            phone_nimber: '+1 (555) 000-000',\n            position: 'Software engineer',\n            salary: '$100K'\n        },\n        {\n            avatar: 'https://randomuser.me/api/portraits/men/86.jpg',\n            name: 'Olivia Emma',\n            email: 'oliviaemma@example.com',\n            phone_nimber: '+1 (555) 000-000',\n            position: 'Product designer',\n            salary: '$90K'\n        },\n        {\n            avatar: 'https://randomuser.me/api/portraits/women/79.jpg',\n            name: 'William Benjamin',\n            email: 'william.benjamin@example.com',\n            phone_nimber: '+1 (555) 000-000',\n            position: 'Front-end developer',\n            salary: '$80K'\n        },\n        {\n            avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',\n            name: 'Henry Theodore',\n            email: 'henrytheodore@example.com',\n            phone_nimber: '+1 (555) 000-000',\n            position: 'Laravel engineer',\n            salary: '$120K'\n        },\n        {\n            avatar: 'https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',\n            name: 'Amelia Elijah',\n            email: 'amelia.elijah@example.com',\n            phone_nimber: '+1 (555) 000-000',\n            position: 'Open source manager',\n            salary: '$75K'\n        },\n    ] \n}">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
            <h3 className="text-base-content text-xl font-bold sm:text-2xl">
                Team members
            </h3>
            <p className="text-base-content mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
                <thead className="bg-base-200 text-base-content font-medium border-b">
                    <tr>
                        <th className="py-3 px-6">Username</th>
                        <th className="py-3 px-6">Phone number</th>
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
</div>