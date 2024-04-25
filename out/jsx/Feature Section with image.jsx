<section>
  <div className="max-w-screen-xl mx-auto px-4 gap-16 justify-between md:px-8 lg:flex">
    <div>
      <div className="max-w-xl space-y-3">
        <h3 className="text-primary font-semibold">Features</h3>
        <p className="text-base-content text-3xl font-semibold sm:text-4xl">
          Simple solutions for complex issues
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          congue, nisl eget molestie varius, enim ex faucibus purus
        </p>
      </div>
      <div className="mt-12 max-w-lg lg:max-w-none">
        <ul className="space-y-8">
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
    <div className="mt-12 lg:mt-0">
      <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png" className="w-full shadow-lg rounded-lg border" />
    </div>
  </div>
</section>