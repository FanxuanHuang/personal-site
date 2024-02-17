function Nav() {
  return (
    <nav className="max-w-[1280px] mx-auto flex justify-between px-4">
      <a href="/">
        <figure className="flex items-center gap-2">
          <svg role="img" width="50" height="50" viewBox="0 0 50 50">
            <circle r="25" cx="25" cy="25" fill="var(--green2)" />
            <circle id="circle" r="6" cx="25" cy="37" fill="var(--base)" />
          </svg>
          {/* <figcaption>
            <b className="uppercase">Nicole Huang</b>
          </figcaption> */}
        </figure>
      </a>
      <div className='justify-end items-center gap-8 hidden lg:flex font-europa_regular'>
        <a className='nav-link' href='/'>Home</a>
        <a className='nav-link' href='/thoughts'>Thoughts</a>
        <a className='nav-link' href='/experiments'>Experiments</a>
        <a className='nav-link' href='/work'>Work</a>
      </div>
    </nav>
  );
}
export default Nav;
