class Showparse

  def self.gracenote_showresponse(data)
    data["RESPONSES"]["RESPONSE"]["SERIES"].map do |show|
      {title: show["TITLE"],
      image: show["URL"],
      synopsis: show["SYNOPSIS"]}
    end
  end

end
