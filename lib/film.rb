
class Film
  include ActionView::Helpers

   attr_accessor :name, :tmdb_id, :movie_art, :summary, :overview, :date

   def initialize(film)
     self.name = film.title
     self.tmdb_id = film.id
     self.date = film.release_date
     self.overview = film.overview
     self.movie_art = film.poster_path
     summaryset
     movieposterset
     datefix
   end

   def movieposterset
    if self.movie_art == nil
      self.movie_art = "/images/searchImageTV.jpg"
    else
      self.movie_art = "http://image.tmdb.org/t/p/w342" + movie_art
    end
   end

   def datefix
     if (self.date && self.date.length > 4)
       self.date = DateTime.parse(self.date).strftime("%B %e, %Y")
     end
   end


   def summaryset
     if self.overview
       self.summary = truncate(overview, length: 200)
     end
   end

end
