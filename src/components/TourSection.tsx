
// Mock data - would be replaced with real data in a production app
const tourDates = [
  { id: 1, date: "MAY 15 - WED", venue: "LYRIC THEATRE @ 8:00PM", location: "BIRMINGHAM, AL, UNITED STATES" },
  { id: 2, date: "MAY 15 - WED", venue: "LYRIC THEATRE @ 8:00PM", location: "BIRMINGHAM, AL, UNITED STATES" },
  { id: 3, date: "MAY 15 - WED", venue: "LYRIC THEATRE @ 8:00PM", location: "BIRMINGHAM, AL, UNITED STATES" },
  { id: 4, date: "MAY 15 - WED", venue: "LYRIC THEATRE @ 8:00PM", location: "BIRMINGHAM, AL, UNITED STATES" },
  { id: 5, date: "MAY 15 - WED", venue: "LYRIC THEATRE @ 8:00PM", location: "BIRMINGHAM, AL, UNITED STATES" },
  { id: 6, date: "MAY 15 - WED", venue: "LYRIC THEATRE @ 8:00PM", location: "BIRMINGHAM, AL, UNITED STATES" },
  { id: 7, date: "MAY 15 - WED", venue: "LYRIC THEATRE @ 8:00PM", location: "BIRMINGHAM, AL, UNITED STATES" },
  { id: 8, date: "MAY 15 - WED", venue: "LYRIC THEATRE @ 8:00PM", location: "BIRMINGHAM, AL, UNITED STATES" },
];

const TourSection = () => {
  return (
    <section id="tour" className="py-16 bg-tan">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-maroon font-bold text-center mb-12">TOUR</h2>
        
        <div className="max-w-4xl mx-auto">
          {tourDates.map((event) => (
            <div key={event.id} className="flex items-center py-4 tour-row">
              <div className="w-1/6">
                <p className="font-medium text-maroon text-sm">{event.date}</p>
              </div>
              <div className="w-1/3">
                <p className="font-medium text-maroon text-sm">{event.venue}</p>
              </div>
              <div className="w-1/3">
                <p className="font-medium text-maroon text-sm">{event.location}</p>
              </div>
              <div className="w-1/6 text-right">
                <button className="bg-maroon text-white uppercase px-4 py-1 text-xs rounded tracking-wider">
                  Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourSection;
