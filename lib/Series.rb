

class Series
  include ActionView::Helpers

   attr_accessor :title, :synopsis, :gn_id, :show_image, :date, :genre, :seasons, :type, :contributor, :shortdesc

   def initialize(series)
     self.title = series['TITLE']
     self.synopsis = series['SYNOPSIS']
     self.show_image = series['URL']
     self.gn_id = series['GN_ID']
     self.date = series['DATE']
     self.genre = [series['GENRE']]
     self.seasons = series['SEASON']
     self.type = series['PRODUCTION_TYPE']
     self.contributor = series['CONTRIBUTOR']
     seasonstotal
     genreparse
     contributorparse
     datefix
     truncated

   end

   def assignimage
     if self.show_image == nil
       self.show_image = "/searchImageTV.jpg"
     end
   end

   def truncated
     if self.synopsis
      #temp = simple_format(self.synopsis, wrapper_tag: "")

      self.shortdesc = simple_format(self.synopsis, {}, wrapper_tag: '')
      # truncate(temp, length: 200)
    end
  end

   def datefix
     if self.date.length > 4
       self.date = DateTime.parse(self.date).strftime("%B %e, %Y")
     end
   end

   def seasonstotal
     if self.seasons
       self.seasons = self.seasons.length
     end
   end

   def genreparse
     if self.genre
       self.genre = self.genre.join(", ")
     end
   end

   def contributorparse
     if self.contributor
       self.contributor = self.contributor.map{|x| x["NAME"]}.join(", ")
     end
   end


end
