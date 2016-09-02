

class Sample
  include ActionView::Helpers

   attr_accessor :media_id, :picture, :media_type

   def initialize(sample)
     self.media_type = sample.class.to_s
     assignpicture(sample)
     assignmediaid(sample)

   end

   def assignmediaid(sample)
     id = media_type
     case id
       when "Movie"
         self.media_id = sample.tmdb_id
       when "Album"
         self.media_id = sample.gn_id
       when "Show"
         self.media_id = sample.gn_id
       else
     end
   end


   def assignpicture(sample)
     picture = media_type
     case picture
       when "Movie"
         self.picture = sample.movie_art
       when "Album"
         self.picture = sample.album_art
       when "Show"
         self.picture = sample.show_image
       else
     end
   end

end
