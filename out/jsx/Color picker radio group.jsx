<div className="max-w-md mx-auto px-4">
    <h2 className="text-base-content font-medium">Pick your favorite color</h2>
    <ul className="mt-4 flex items-center flex-wrap gap-4" x-data="{ selectedColor: 1 }">
        <template x-for="(color, index) in [\n            { bg: 'bg-[#2563EB]', ring: 'ring-[#2563EB]' },\n            { bg: 'bg-[#8B5CF6]', ring: 'ring-[#8B5CF6]' },\n            { bg: 'bg-[#DB2777]', ring: 'ring-[#DB2777]' },\n            { bg: 'bg-[#475569]', ring: 'ring-[#475569]' },\n            { bg: 'bg-[#EA580C]', ring: 'ring-[#EA580C]' }\n        ]" key="index" />
    </ul>
</div>