function Footer() {
  return (
    <footer className="bg-green-400 w-full h-16 flex items-center justify-center poetsen">
      <div className="text-yellow-300 title text-xl flex flex-col justify-center items-center">
        <div>
          Developed by
          <a className="ml-1 hover:text-purple-500" href="https://ivanrobles.pro/" target="blank">
            Ivan Robles
          </a>
        </div>
        <div>
          <a className="hover:text-purple-500" href="https://github.com/Sharmaz/151">
            View code on github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
