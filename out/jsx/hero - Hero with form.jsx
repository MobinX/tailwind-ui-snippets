<div className="hero min-h-[30rem] rounded bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h3 className="text-5xl font-bold">Login now!</h3>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label" htmlFor="input1"><span className="label-text">Email</span></label>
          <input type="email" placeholder="email" className="input input-bordered" required id="input1" />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="input2"><span className="label-text">Password</span></label>
          <input type="password" placeholder="password" className="input input-bordered" required htmlFor="input2" />
          <label className="label"><button className="label-text-alt link link-hover">
              Forgot password?
            </button></label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>