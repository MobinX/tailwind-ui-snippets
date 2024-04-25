<div className="max-w-md mx-auto px-4">
      <h2 className="text-base-content font-medium">Select your payment method</h2>
      <ul className="mt-6 space-y-3">
       { /*-use a map loop*/ }
          <li>
            <labelfor="item.name" className="block relative">
              <input id="item.name" type="radio" checked="selectedPaymentMethod === item.name" onClick={event => {}} name="payment" className="sr-only peer" />
              <div className="w-full flex gap-x-3 items-start p-4 cursor-pointer rounded-lg border bg-base-100 shadow-sm ring-primary peer-checked:ring-2 duration-200">
                <div className="flex-none">
                  <div>item.icon</div>
                </div>
                <div>
                  <h3 className="leading-none text-base-content font-medium pr-3">item.name</h3>
                  <p className="mt-1 text-sm text-base-content">item.description</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex-none flex items-center justify-center w-4 h-4 rounded-full border peer-checked:bg-primary text-base-100 peer-checked:text-base-100 duration-200">
                <svg className="w-2.5 h-2.5" viewBox="0 0 12 10">
                  <polyline fill="none" strokeWidth="2px" stroke="currentColor" strokeDasharray="16px" points="1.5 6 4.5 9 10.5 1" />
                </svg>
              </div>
            
          </labelfor="item.name"></li>
        
      </ul>
</div>