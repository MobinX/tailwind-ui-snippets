<div x-data="{ isPasswordHidden: true }">
    <label className="text-base-content">
        Password
    </label>
    <div className="relative max-w-xs mt-2">
        <button onClick={event => {}} className="text-base-content absolute right-3 inset-y-0 my-auto active:text-base-content">
            <template x-if="isPasswordHidden" />
            <template x-if="!isPasswordHidden" />
        </button>
        <input type="isPasswordHidden ? 'password' 'text'" placeholder="Enter your password" className="w-full pr-12 pl-3 py-2 text-base-content bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg" />
    </div>
</div>