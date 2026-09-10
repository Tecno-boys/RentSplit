function Testimonial() {
  return (
    <section className="rs-testimonial-section" id="testimonials">
      <div className="rs-container rs-testimonial-wrap">
        <div className="rs-testimonial-card">
          <div className="rs-stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <blockquote className="rs-testimonial-quote">
            "Before RentSplit, our group chat was just passive-aggressive screenshots of the electricity bill.
            Now it handles the math and everyone pays on time without any weird tension."
          </blockquote>
          <div className="rs-reviewer">
            <div className="rs-reviewer-avatar">MK</div>
            <div>
              <div className="rs-reviewer-name">Marcus &amp; 3 Flatmates</div>
              <div className="rs-reviewer-meta">Brooklyn, NY • Sharing 2 years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;