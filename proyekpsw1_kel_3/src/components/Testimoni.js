import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimoni.css"; // Pastikan path ini benar, sesuai lokasi file Testimoni.css Anda

function Testimoni() {
  // Ambil data dari localStorage jika ada
  const [testimonials, setTestimonials] = useState(() => {
    const savedTestimonials = localStorage.getItem("testimonials");
    return savedTestimonials ? JSON.parse(savedTestimonials) : [];
  });
  const [rating, setRating] = useState(0); // Untuk menyimpan bintang yang dipilih
  const [comment, setComment] = useState(""); // Untuk menyimpan komentar

  // Simpan data ke localStorage setiap kali testimonials berubah
  useEffect(() => {
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  // Fungsi untuk menangani pengiriman testimoni
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === "") {
      alert("Mohon isi komentar dan pilih jumlah bintang!");
      return;
    }
    // Menambahkan testimoni baru ke daftar
    setTestimonials([...testimonials, { rating, comment }]);
    // Reset form
    setRating(0);
    setComment("");
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Halaman Testimoni</h1>

      {/* Form untuk memberikan testimoni */}
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* Menampilkan Rating di atas komentar */}
          <label className="form-label">Pilih Rating Anda</label>
          <div>
            {[1, 2, 3, 4, 5, 6].map((star) => (
              <button
                type="button"
                key={star}
                className={`btn btn-sm me-2 ${
                  star <= rating ? "btn-warning" : "btn-outline-secondary"
                }`}
                onClick={() => setRating(star)}
              >
                ⭐
              </button>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
          </label>
          <textarea
            id="comment"
            className="form-control"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tulis komentar Anda di sini..."
          ></textarea>
        </div>

        {/* Tombol kirim testimoni */}
        <button type="submit" className="btn btn-primary">
          Kirim Testimoni
        </button>
      </form>

      {/* Daftar testimoni */}
      <div>
        <h2 className="mb-3">Testimoni Pengguna</h2>
        {testimonials.length === 0 ? (
          <p className="text-muted">
            Belum ada testimoni. Jadilah yang pertama!
          </p>
        ) : (
          <ul className="list-group">
            {testimonials.map((testimonial, index) => (
              <li key={index} className="list-group-item">
                <div className="d-flex align-items-center mb-2">
                  {/* Rating ditampilkan di atas komentar */}
                  <strong className="me-2">Rating:</strong>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-warning">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="mb-0">{testimonial.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Testimoni;
