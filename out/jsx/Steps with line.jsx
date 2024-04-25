<div x-data="{ steps: ['Profile', 'Contact', 'Identity', 'Passport'], currentStep: 2 }" className="max-w-screen-xl mx-auto px-4 md:px-8">
    <ul aria-label="Steps" className="items-center text-base-content md:flex">
        <template x-for="(item, idx) in steps" key="idx" />
    </ul>
</div>