<div x-data="{ \n  tableItems: [\n      {\n          name: 'Liam James',\n          email: 'liamjames@example.com',\n          position: 'Software engineer',\n          salary: '$100K'\n      },\n      {\n          name: 'Olivia Emma',\n          email: 'oliviaemma@example.com',\n          position: 'Product designer',\n          salary: '$90K'\n      },\n      {\n          name: 'William Benjamin',\n          email: 'william.benjamin@example.com',\n          position: 'Front-end developer',\n          salary: '$80K'\n      },\n      {\n          name: 'Henry Theodore',\n          email: 'henrytheodore@example.com',\n          position: 'Laravel engineer',\n          salary: '$120K'\n      },\n      {\n          name: 'Amelia Elijah',\n          email: 'amelia.elijah@example.com',\n          position: 'Open source manager',\n          salary: '$75K'\n      }\n  ]\n}" className="max-w-screen-xl mx-auto px-4 md:px-8">
  <div className="max-w-lg">
    <h3 className="text-base-content text-xl font-bold sm:text-2xl">
      Team members
    </h3>
    <p className="text-base-content mt-2">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </p>
  </div>
  <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
    <table className="w-full table-auto text-sm text-left">
      <thead className="bg-base-200 text-base-content font-medium border-b">
        <tr>
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