<div x-data="{ steps: { stepsItems: ['Profile', 'Contact', 'Identity', 'Passport'], currentStep: 2 } }" className="max-w-2xl mx-auto px-4 md:px-0">
    <ul aria-label="Steps" className="items-center text-base-content font-medium md:flex">
        <template x-for="(item, idx) in steps.stepsItems" key="idx" />
    </ul>
</div>