<section>
  <div className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 text-base-content md:px-8">
      <div className="max-w-xl space-y-3">
        <h3 className="text-base-content text-3xl font-semibold sm:text-4xl">
          Simple solutions for complex issues
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          congue, nisl eget molestie varius, enim ex faucibus purus.
        </p>
      </div>
      <div className="mt-12">
        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
         { /*-use a map loop*/ }
            <li className="flex gap-x-4">
              <div className="flex-none w-12 h-12 bg-primary text-base-100 rounded-lg flex items-center justify-center">item.icon</div>
              <div className="space-y-3">
                <h4 className="text-lg text-base-content font-semibold">item.title</h4>
                <p>item.desc</p>
                <a href="item.href" className="text-sm text-primary duration-150 hover:text-primary/85 font-medium inline-flex items-center gap-x-1">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </li>
          
        </ul>
      </div>
    </div>
  </div>
</section>