<div className="max-w-2xl mx-auto px-4 md:px-0">
    <ul aria-label="Steps" className="items-center text-base-content font-medium md:flex">
       { /*-use a map loop*/ }
            <liaria-current="steps.currentstep 1="" =="idx" +="" ?="" 'step'="" false"="" className="flex gap-x-3 md:flex-col md:flex-1 md:gap-x-0">
                <div className="flex flex-col items-center md:flex-row md:flex-1">
                    <hr className="{'w-full border=" "="" hidden md:block':="" true,="" 'border-none':="" idx="=" 0,="" 'border-primary':="" steps.currentstep="" />= idx + 1}&quot; /&gt;
                    <divclass="{'w-8 h-8="" rounded-full="" border-2="" flex-none="" flex="" items-center="" justify-center':="" true,="" 'bg-primary="" border-primary':="" steps.currentstep=""> idx + 1, &apos;border-primary&apos;: steps.currentStep == idx + 1}&quot;&gt;
                        <spanclass="{'w-2.5 h-2.5="" rounded-full="" bg-primary':="" true,="" 'hidden':="" steps.currentstep="" !="idx" +="" 1}"="">
                        <template x-if="steps.currentStep > idx + 1" /></spanclass="{'w-2.5></divclass="{'w-8></div></liaria-current="steps.currentstep></ul></div>