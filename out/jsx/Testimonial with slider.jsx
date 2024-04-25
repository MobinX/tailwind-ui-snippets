<div x-data="{\n    testimonials: [\n        {\n            avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',\n            name: 'Martin Escobar',\n            title: 'Founder of Meta',\n            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.'\n        },\n        {\n            avatar: 'https://randomuser.me/api/portraits/women/79.jpg',\n            name: 'Angela Stian',\n            title: 'Product Designer',\n            quote: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.'\n        },\n        {\n            avatar: 'https://randomuser.me/api/portraits/men/86.jpg',\n            name: 'Karim Ahmed',\n            title: 'DevOp Engineer',\n            quote: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.'\n        }\n    ],\n    currentTestimonial: 0\n}">
    <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-primary font-semibold pb-6">What people are saying</h3>
                <template x-for="(testimonial, index) in testimonials" key="index" />
            </div>
            <div className="mt-6">
                <ul className="flex gap-x-3 justify-center">
                    <template x-for="(testimonial, index) in testimonials" key="index" />
                </ul>
            </div>
        </div>
    </section>
</div>