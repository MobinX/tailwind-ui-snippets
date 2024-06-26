<section className="py-14">
  <div className="max-w-screen-xl mx-auto px-4 text-center text-base-content md:px-8">
    <div className="max-w-2xl mx-auto">
      <h3 className="text-base-content text-3xl font-semibold sm:text-4xl">
        The fastest way to launch a product
      </h3>
      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        congue, nisl eget molestie varius, enim ex faucibus purus.
      </p>
    </div>
    <div className="mt-12">
      <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
       { /*-use a map loop*/ }
          <li className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-primary/80 text-primary rounded-full flex items-center justify-center">item.icon</div>
            <h4 className="text-lg text-base-content font-semibold">item.title</h4>
            <p>item.desc</p>
          </li>
        
      </ul>
    </div>
  </div>
</section>