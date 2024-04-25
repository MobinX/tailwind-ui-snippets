<section className="py-14">
  <div className="max-w-screen-xl mx-auto px-4 md:px-8">
    <div className="max-w-xl mx-auto sm:text-center">
      <h3 className="text-base-content text-3xl font-semibold sm:text-4xl">
        Our team
      </h3>
      <p className="text-base-content mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown.
      </p>
    </div>
    <div className="mt-12">
      <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
       { /*-use a map loop*/ }
          <li>
            <div className="w-full h-60 sm:h-52 md:h-56">
              <img src="item.avatar" className="w-full h-full object-cover object-center shadow-md rounded-xl" alt="" />
            </div>
            <div className="mt-4">
              <h4 className="text-lg text-base-content font-semibold">item.name</h4>
              <p className="text-primary">item.title</p>
            </div>
          </li>
        
      </ul>
    </div>
  </div>
</section>