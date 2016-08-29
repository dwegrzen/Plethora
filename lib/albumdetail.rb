
class Albumdetail
  include ActionView::Helpers

   attr_accessor :name, :gn_id, :artist, :album_art, :date, :genre, :tracks, :trackname

   def initialize(album)
     self.name = album['title']
     self.artist = album["artists"].map{|x| x["name"]}.first.gsub(/\(.*?\)/, "")
     self.album_art = album["images"].first["uri"]
     self.gn_id = album['id']
     self.date = album['year'].to_s
     self.genre = album['genres']
     self.trackname = album['tracklist']
     self.tracks = album['notes']
    #  self.image = album["images"].first["uri"]
     genreparse
     trackparse
     assignimage
    #  datefix

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

   def trackcounter
     if self.trackname
       self.tracks = trackname.length
     end
   end

   def trackparse
     if self.trackname
       self.trackname = trackname.map{|x| "#{x["position"]} -  #{x["title"]}"}
     end
   end


end
