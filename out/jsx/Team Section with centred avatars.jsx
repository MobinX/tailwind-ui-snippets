<div x-data="{ team: [\n        {\n            avatar: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',\n            name: 'Martiana dialan',\n            title: 'Product designer',\n        },\n        {\n            avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',\n            name: 'Micheal colorand',\n            title: 'Software engineer',\n        },\n        {\n            avatar: 'https://randomuser.me/api/portraits/women/79.jpg',\n            name: 'Brown Luis',\n            title: 'Full stack engineer',\n        },\n        {\n            avatar: 'https://randomuser.me/api/portraits/women/63.jpg',\n            name: 'Lysa sandiago',\n            title: 'Head of designers',\n        },\n        {\n            avatar: 'https://randomuser.me/api/portraits/men/86.jpg',\n            name: 'Daniel martin',\n            title: 'Product designer',\n        },\n        {\n            avatar: 'https://randomuser.me/api/portraits/men/46.jpg',\n            name: 'Vicky tanson',\n            title: 'Product manager',\n        },\n        {\n            avatar: 'https://randomuser.me/api/portraits/men/29.jpg',\n            name: 'Nilson kalin',\n            title: 'DevOp engineer',\n        },\n        {\n            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',\n            name: 'Tina watersone',\n            title: 'Brand designer',\n        },\n    ] }">
    <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
            <div className="max-w-xl mx-auto">
                <h3 className="text-base-content text-3xl font-semibold sm:text-4xl">
                    Meet our team
                </h3>
                <p className="text-base-content mt-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry&apos;s standard dummy.
                </p>
            </div>
            <div className="mt-12">
                <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <template x-for="(item, idx) in team" key="idx" />
                </ul>
            </div>
        </div>
    </section>
</div>