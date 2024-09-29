export default function Quote() {
    return (
      <section className="quote mx-auto py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Design Your Experience</h3>
          <p className="mt-4">Choose from a variety of experiences at Caldeira Estate.</p>
          <div className="flex justify-center mt-8 space-x-4">
            <div className="w-1/4">
              <img src="/images/experience1.jpg" alt="Wine Tour" />
              <p>Wine Tour & Tasting</p>
            </div>
            <div className="w-1/4">
              <img src="/images/experience2.jpg" alt="Olive Grove Tour" />
              <p>Olive Grove Tour</p>
            </div>
            <div className="w-1/4">
              <img src="/images/experience3.jpg" alt="In-home Dining" />
              <p>In-Home Dining</p>
            </div>
            <div className="w-1/4">
              <img src="/images/experience4.jpg" alt="Concierge" />
              <p>Concierge Services</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  