export default function Footer() { 
  return (
    <footer className="footer m-3">
      <div className="footer-container">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Amritendu Panja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}