<div className="join">
  <div>
    <div>
      <input className="input input-bordered join-item w-[5.3rem] md:w-52" placeholder="Search" />
    </div>
  </div>
  <select className="select select-bordered join-item w-[5.8rem] md:w-auto">
    <option disabled={true} selected={true} value="Filter">Filter</option>
    <option value="Sci-fi">Sci-fi</option>
    <option value="Drama">Drama</option>
    <option value="Action">Action</option>
  </select>
  <div className="indicator">
    <span className="indicator-item badge badge-secondary">new</span>
    <button className="btn join-item">Search</button>
  </div>
</div>