<section className="py-14" x-data="{ stats: [{ data: '35K', title: 'Customers' }, { data: '10K+', title: 'Downloads' }, { data: '40+', title: 'Countries' }, { data: '30M+', title: 'Total revenue' }] }">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <ul className="flex flex-col items-center justify-center gap-x-12 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
            <template x-for="(item, idx) in stats" key="idx" />
        </ul>
    </div>
</section>