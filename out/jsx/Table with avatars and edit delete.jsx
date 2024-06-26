<div className="max-w-screen-xl mx-auto px-4 md:px-8">
  <div className="items-start justify-between md:flex">
    <div className="max-w-lg">
      <h3 className="text-base-content text-xl font-bold sm:text-2xl">
        Team members
      </h3>
      <p className="text-base-content mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    <div className="mt-3 md:mt-0">
      <a href="javascript:void(0)" className="inline-block px-4 py-2 text-base-100 duration-150 font-medium bg-primary rounded-lg hover:bg-primary/90 active:bg-primary md:text-sm">Add member</a>
    </div>
  </div>
  <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
    <table className="w-full table-auto text-sm text-left">
      <thead className="bg-base-200 text-base-content font-medium border-b">
        <tr>
          <th className="py-3 px-6">Username</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Position</th>
          <th className="py-3 px-6">Salary</th>
          <th className="py-3 px-6" />
        </tr>
      </thead>
      <tbody className="text-base-content divide-y">
       { /*-use a map loop*/ }
          <tr>
            <td className="flex items-center gap-x-3 py-3 px-6 base-100space-nowrap">
              <imgsrc="item.avatar" className="w-10 h-10 rounded-full">
              <div>
                <span className="block text-base-content text-sm font-medium">item.name</span>
                <span className="block text-base-content text-xs">item.email</span>
              </div>
            </imgsrc="item.avatar"></td>
            <td className="px-6 py-4 base-100space-nowrap">item.phone_nimber</td>
            <td className="px-6 py-4 base-100space-nowrap">item.position</td>
            <td className="px-6 py-4 base-100space-nowrap">item.salary</td>
            <td className="text-right px-6 base-100space-nowrap">
              <a href="javascript:void()" className="py-2 px-3 font-medium text-primary hover:text-primary/90 duration-150 hover:bg-base-200 rounded-lg">Edit</a>
              <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-error hover:text-error duration-150 hover:bg-base-200 rounded-lg">
                Delete
              </button>
            </td>
          </tr>
        
      </tbody>
    </table>
  </div>
</div>