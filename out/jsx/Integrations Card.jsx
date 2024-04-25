<div>
  <section className="py-16">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-md">
        <h1 className="text-base-content text-xl font-extrabold sm:text-2xl">
          Integrations
        </h1>
        <p className="text-base-content mt-2">
          Extend and automate your workflow by using integrations for your
          favorite tools.
        </p>
      </div>
      <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
       { /*-use a map loop*/ }
          <li className="border rounded-lg">
            <div className="flex items-start justify-between p-4">
              <div className="space-y-2">
               { /*-use a map loop*/ }
                <h4 className="text-base-content font-semibold">item.title</h4>
                <p className="text-base-content text-sm">item.desc</p>
              </div>
              <button className="text-base-content text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-base-300">
                Connect
              </button>
            </div>
            <div className="py-5 px-4 border-t text-right">
              <a href="javascript:void(0)" className="text-primary hover:text-primary/90 text-sm font-medium">
                View integration
              </a>
            </div>
          </li>
        
      </ul>
    </div>
  </section>
</div>