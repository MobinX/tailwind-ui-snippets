<div>
  <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
    <div className="space-y-3 text-center">
      <h1 className="text-3xl text-base-content font-semibold">
        Frequently Asked Questions
      </h1>
      <p className="text-base-content max-w-lg mx-auto text-lg">
        Answered all frequently asked questions, Still confused? feel free
        to contact us.
      </p>
    </div>
    <div className="mt-14 max-w-2xl mx-auto">
     { /*-use a map loop*/ }
        <div className="space-y-3 mt-5 overflow-hidden border-b" onClick={event => {}}>
          <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-base-content font-medium">
            <span>item.q</span>
            <svg x-show="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
            <svg x-show="selectedFaq !== index" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </h4>
          <div x-ref="answerElRef" className="transition-[max-height,opacity] overflow-hidden duration-500 ease-in-out" style={{}}>
            <div>
              <p className="text-base-content pb-4">item.a</p>
            </div>
          </div>
        </div>
      
    </div>
  </section>
</div>