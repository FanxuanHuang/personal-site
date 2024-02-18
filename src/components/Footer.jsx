export default function Footer() {
  return (
    <footer className="mx-auto max-w-[80ch] py-20 fade-in px-4">
      <h2 className="mb-8 font-europa_bold text-2xl">Connect</h2>
      <ul className='grid gap-4 font-europa_regular text-xl'>
        <li>
          <a className='opacity-80 hover:opacity-100 underline'  href="https://www.linkedin.com/in/nicole-huang-4a99b82a1/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a className='opacity-80 hover:opacity-100 underline' href="https://github.com/FanxuanHuang" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a className='opacity-80 hover:opacity-100 underline'  href="mailto:hfx666666@gmail.com?subject=Email from your website" target="_blank" rel="noreferrer">
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
}
