
class Albumtemp
  include ActionView::Helpers

   attr_accessor :name, :gn_id, :artist, :album_art, :date, :genre, :tracks, :trackname, :image

   def initialize(album)
     self.name = album['title']
     self.album_art = album['thumb']
     self.gn_id = album['id'].to_s
     self.date = album['year']
     self.genre = album['genres']
     self.trackname = album['tracklist']
    #  self.image = album["images"].first["uri"]
     genreparse
     trackparse
     assignimage
     datefix
     nameandartistfix

   end

   def nameandartistfix
     if self.name
       self.artist = name.split(" - ").first.gsub(/\(.*?\)/, "")
       self.name = name.split(" - ").last
     end
   end

   def assignimage
     if self.album_art == nil
       self.album_art = "/images/searchImageTV.jpg"
     end
   end

   def datefix
     if (self.date && self.date.length > 4)
       self.date = DateTime.parse(self.date).strftime("%B %e, %Y")
     end
   end

   def genreparse
     if self.genre
       self.genre = self.genre.join(", ")
     end
   end

   def trackparse
     if self.trackname
       self.trackname = trackname.map{|x| "#{x["position"]} -  #{x["title"]}"}
     end
   end


end
