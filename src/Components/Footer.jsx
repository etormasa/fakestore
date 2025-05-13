const date = new Date();
const newDate = date.getFullYear();

function Footer() {
  return (
    <footer className="bg-dark text-light w-100">
      <div className="container-fluid text-center">
        <p className="fs-5 fw-bold mb-0">copyrights: {newDate} @etormesa</p>
      </div>
    </footer>
  );
}

export default Footer;
