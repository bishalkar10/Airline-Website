import Navbar from "../components/Navbar";
import BookTicket from "../components/BookTicket";

export default function Homepage() {
  return (
    <div className="container">
      <Navbar />
      <div className="image-container">
        <img src="image_3.png" width="300px" alt="plane" />
        <div className="text-container">
          <h1>Expand Your Experience by Travelling Abroad</h1>
          <p>
            Expand your experience by travelling abroad or visiting with loved
            ones with our services
          </p>
        </div>
      </div>
      <BookTicket />
    </div>
  );
}
