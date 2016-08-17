class Showparse

  def self.gracenote_showresponse(data)
    data["RESPONSES"]["RESPONSE"]["SERIES"].map do |show|
      {title: show["TITLE"],
      image: show["URL"],
      synopsis: show["SYNOPSIS"],
      gn_id: show["GN_ID"]}
    end
  end

  def self.grace_artistresponse(data)
  end

end
