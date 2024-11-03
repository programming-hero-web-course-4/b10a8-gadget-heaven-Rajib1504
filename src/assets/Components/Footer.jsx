const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 justify-around opacity-80 text-black p-10 border-t-2 ">
        <nav>
          <h6 className="footer-title opacity-100">Services</h6>
          <a className="link opacity-80 link-hover"> Product Support</a>
          <a className="link opacity-80 link-hover">Order Tracking</a>
          <a className="link opacity-80 link-hover">Shipping & Delivery</a>
          <a className="link opacity-80 link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100">Company</h6>
          <a className="link opacity-80 link-hover">About Us</a>
          <a className="link opacity-80 link-hover">Careers</a>
          <a className="link opacity-80 link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100">Legal</h6>
          <a className="link opacity-80  link-hover">Terms of use</a>
          <a className="link opacity-80 link-hover">Privacy policy</a>
          <a className="link opacity-80 link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
