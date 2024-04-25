<div className="max-w-md mx-auto px-4">
    <h2 className="text-base-content font-medium">Pick your favorite color</h2>
    <ul className="mt-4 flex items-center flex-wrap gap-4">
       { /*-use a map loop*/ }
            <li className="flex-none">
                <labelfor="color.bg" className="block relative w-8 h-8">
                    <inputid="color.bg" type="radio" name="color" className="sr-only peer" checked="index === selectedColor" onClick={event => {}} change="selectedColor = index">
                    <spanclass="`inline-flex justify-center="" items-center="" w-full="" h-full="" rounded-full="" cursor-pointer="" duration-150@{color.bg}@{color.ring}`"="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-base-100 absolute inset-0 m-auto z-0 pointer-events-none hidden peer-checked:block duration-150">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                
            </spanclass="`inline-flex></inputid="color.bg"></labelfor="color.bg"></li>
        
    </ul>
</div>