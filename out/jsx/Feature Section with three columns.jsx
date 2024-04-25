<section className="py-14">
  <div className="max-w-screen-xl mx-auto px-4 text-base-content md:px-8">
    <div className="max-w-xl mx-auto space-y-3 sm:text-center">
      <h3 className="text-primary font-semibold">Features</h3>
      <p className="text-base-content text-3xl font-semibold sm:text-4xl">
        Do more with less complexity
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        congue, nisl eget molestie varius, enim ex faucibus purus
      </p>
    </div>
    <div className="mt-12">
      <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
       { /*-use a map loop*/ }
          <li className="flex gap-x-4">
            <div className="flex-none w-12 h-12 bg-primary/80 text-primary rounded-lg flex items-center justify-center">item.icon</div>
            <div>
              <h4 className="text-lg text-base-content font-semibold">item.title</h4>
              <p className="mt-3">item.desc</p>
            </div>
          </li>
        
      </ul>
    </div>
  </div>
</section>