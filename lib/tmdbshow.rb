

class Tmdbshow
  include ActionView::Helpers

   attr_accessor :title, :synopsis, :gn_id, :show_image, :date, :genre, :seasons, :type, :contributor, :fulldesc

   def initialize(series)
     self.title = series.name
     self.fulldesc = series.overview
     self.show_image = series.poster_path
     self.gn_id = series.id
     self.date = series.first_air_date
     datefix
     truncated
     assignimage

   end

   def assignimage
     if self.show_image == nil
       self.show_image = "/images/searchImageTV.jpg"
     else
       self.show_image = "http://image.tmdb.org/t/p/w342" + show_image
     end
    end

  def truncated
    if self.fulldesc
      self.synopsis = truncate(fulldesc, length: 200, :escape => false)
    end
  end

   def datefix
     if (self.date && self.date.length > 4)
       self.date = DateTime.parse(date).strftime("%B %e, %Y")
     end
   end

end
