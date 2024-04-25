<div x-data="{ members: [\n    {\n        avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',\n        name: 'John lorin',\n        email: 'john@example.com'\n    }, {\n        avatar: 'https://randomuser.me/api/portraits/men/86.jpg',\n        name: 'Chris bondi',\n        email: 'chridbondi@example.com'\n    }, {\n        avatar: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',\n        name: 'yasmine',\n        email: 'yasmine@example.com'\n    }, {\n        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f',\n        name: 'Joseph',\n        email: 'joseph@example.com'\n    },\n]}" className="max-w-2xl mx-auto px-4">
    <div className="items-start justify-between sm:flex">
        <div>
            <h4 className="text-base-content text-xl font-semibold">Team members</h4>
            <p className="mt-2 text-base-content text-base sm:text-sm">Give your team members access to manage the system.</p>
        </div>
        <a href="javascript:void(0)" className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-base-100 bg-primary hover:bg-primary/90 active:bg-primary rounded-lg sm:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
            New member
        </a>
    </div>
    <ul className="mt-12 divide-y">
        <template x-for="(item, idx) in members" key="idx" />
    </ul>
</div>