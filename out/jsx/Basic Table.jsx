<div className="max-w-screen-xl mx-auto px-4 md:px-8">
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
       { /*-use a map loop*/ }
          <tr>
            <td className="px-6 py-4 base-100space-nowrap">item.name</td>
            <td className="px-6 py-4 base-100space-nowrap">item.email</td>
            <td className="px-6 py-4 base-100space-nowrap">item.position</td>
            <td className="px-6 py-4 base-100space-nowrap">item.salary</td>
          </tr>
        
      </tbody>
    </table>
  </div>
</div>