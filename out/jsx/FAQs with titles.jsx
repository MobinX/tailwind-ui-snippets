<section>
  <div className="max-w-screen-xl mx-auto px-4 md:px-8">
    <div className="max-w-lg">
      <h3 className="mt-3 text-base-content text-3xl font-extrabold sm:text-4xl">
        Frequently asked questions
      </h3>
      <div className="mt-3 text-base-content dark:text-base-content">
        <p>
          Can&rsquor;t find the answer you&rsquor;re looking for? feel free to
          <a className="text-primary font-semibold base-100space-nowrap" href="support@floatui.com">
            contact us </a>.
        </p>
      </div>
    </div>
    <div className="mt-12 divide-y sm:mt-20">
     { /*-use a map loop*/ }
        <div className="py-5 gap-x-12 first:pt-0 sm:flex">
          <div className="max-w-sm pt-8 pb-6 sm:pt-0 lg:flex-grow">
            <h4 className="text-base-content font-semibold">list.label</h4>
          </div>
          <ul className="flex-1 space-y-6 sm:last:pb-6 sm:space-y-8">
           { /*-use a map loop*/ }
              <li>
                <summary className="flex items-center justify-between font-semibold text-base-content">item.q</summary>
                <p className="mt-3 text-base-content leading-relaxed">item.a</p>
              </li>
            
          </ul>
        </div>
      
    </div>
  </div>
</section>