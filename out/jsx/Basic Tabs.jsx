<div x-data="{ selectedTab: 'Overview', tabItems: ['Overview', 'Integration', 'Billing', 'Transactions', 'plans'] }">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="w-full border-b flex items-center gap-x-3 overflow-x-auto text-sm" aria-label="Manage your account">
            <template x-for="(item, index) in tabItems" key="index" />
        </div>
        <template x-for="(item, index) in tabItems" key="index" />
    </div>
</div>