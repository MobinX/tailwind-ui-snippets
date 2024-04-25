<div x-data="{ stepsCount: [1, 2, 3, 4], currentStep: 2 }" className="max-w-lg mx-auto px-4 sm:px-0">
    <ul aria-label="Steps" className="flex items-center">
        <template x-for="(item, idx) in stepsCount" key="idx" />
    </ul>
</div>