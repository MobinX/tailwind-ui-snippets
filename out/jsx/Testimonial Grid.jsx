<div>
  <section className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-xl sm:text-center md:mx-auto">
        <h3 className="text-base-content text-3xl font-semibold sm:text-4xl">
          See what others saying about us
        </h3>
        <p className="mt-3 text-base-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
          est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum
          magna lorem, euismod volutpat arcu volutpat et.
        </p>
      </div>
      <div className="mt-12">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
         { /*-use a map loop*/ }
            <li className="bg-base-200 p-4 rounded-xl">
              <figure>
                <div className="flex items-center gap-x-4">
                  <imgsrc="item.avatar" className="w-16 h-16 rounded-full">
                  <div>
                    <span className="block text-base-content font-semibold">item.name</span>
                    <span className="block text-base-content text-sm mt-0.5">item.title</span>
                  </div>
                </imgsrc="item.avatar"></div>
                <blockquote>
                  <p className="mt-6 text-base-content">item.quote</p>
                </blockquote>
              </figure>
            </li>
          
        </ul>
      </div>
    </div>
  </section>
</div>