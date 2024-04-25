<>{ /* This example uses this library from Tailwind Labs: https://github.com/tailwindlabs/tailwindcss-forms */ }<div>
    <h2 className="text-base-content font-medium">Select user role</h2>
    <ul className="mt-3 space-y-3">
        { /* Radio */ }
        <li className="flex items-center gap-x-2.5">
            <input type="radio" name="role" x-model="selectedRadio" id="admin" value="admin" className="form-radio border-base-content text-primary focus:ring-primary duration-150" />
            <label htmlFor="admin" className="text-sm text-base-content font-medium">
                Admin
            </label>
        </li>
        { /* Radio groups */ }
       { /*-use a map loop*/ }
            <li className="flex items-center gap-x-2.5">
                <input type="radio" name="role" x-model="selectedRadio" id="idx" value="item" className="form-radio border-base-content text-primary focus:ring-primary duration-150" />
                <labelfor="idx" className="text-sm text-base-content font-medium">item</labelfor="idx"></li>
        
    </ul>
</div></>