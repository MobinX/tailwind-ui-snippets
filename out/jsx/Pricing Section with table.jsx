<div>
  <section className="py-14 text-base-content">
    <div className="relative max-w-xl mx-auto space-y-3 px-4 sm:text-center md:px-0">
      <h3 className="text-primary font-semibold">Pricing</h3>
      <p className="text-base-content text-3xl font-semibold sm:text-4xl">
        Compare our plans and find yours
      </p>
      <div className="max-w-xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          efficitur consequat nunc.
        </p>
      </div>
    </div>
    <div className="mt-16">
      <div className="sticky top-0 py-6 border-b bg-base-100">
        <div className="max-w-screen-xl mx-auto">
          <ul className="ml-auto flex gap-x-6 px-4 md:px-8 lg:max-w-3xl">
           { /*-use a map loop*/ }
              <li className="{`space-y-4 w-full`: true, `hidden lg:block`: selectedPlan !== plan.name}">
                <div className="flex items-center justify-between">
                  <span className="text-base-content font-medium">plan.name</span>
                  <div className="relative text-base-content hover:text-base-content lg:hidden">
                    { /* Dropdown for small devices */ }
                    <svg className="w-5 h-5 absolute right-0 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillrule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" cliprule="evenodd" />
                    </svg>
                    <select className="bg-transparent appearance-none outline-none px-8 cursor-pointer" x-model="selectedPlan">
                      <option disabled={true}>Switch plan</option>
                     { /*-use a map loop*/ }
                        <option x-bind:value="option.name">option.name</option>
                      
                    </select>
                  </div>
                </div>
                <div className="text-base-content text-3xl font-semibold">
                  <span>`$${ /*$merge: {plan.price}*/ }`</span>
                  <span className="text-xl text-base-content font-normal">/mo</span>
                </div>
                <p className="text-sm">plan.desc</p>
                <button className="w-full  btn btn-primary duration-150 text-sm">                 Get Started
                </button>
              </li>
            
          </ul>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-10 space-y-4 px-4 overflow-auto md:overflow-visible md:px-8">
       { /*-use a map loop*/ }
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-base-content font-medium border-b">
              <tr>
                <th className="z-20 top-12 py-6 lg:sticky">
                  <div className="flex items-center gap-x-3">
                    <div className="w-12 h-12 text-primary rounded-full border flex items-center justify-center">table.label_icon</div>
                    <h4 className="text-base-content text-xl font-medium">table.label</h4>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-base-content divide-y">
             { /*-use a map loop*/ }
                <tr>
                  <td className="px-6 py-4 base-100space-nowrap">item.name</td>
                  <td className="text-center w-[250px] px-6 py-4 base-100space-nowrap hidden lg:table-cell">item.basic</td>
                  <td className="text-center w-[250px] px-6 py-4 base-100space-nowrap hidden lg:table-cell">item.business</td>
                  <td className="text-center w-[250px] px-6 py-4 base-100space-nowrap hidden lg:table-cell">item.enterprise</td>
                  <td className="text-center w-[250px] px-6 py-4 base-100space-nowrap lg:hidden">item[selectedPlan.toLowerCase()]</td>
                </tr>
              
            </tbody>
          </table>
        
      </div>
    </div>
  </section>
</div>