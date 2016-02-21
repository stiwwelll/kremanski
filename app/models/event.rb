class Event < ActiveRecord::Base

  scope :future_dates, ->{ where("date >= ?", Date.today) }

  require 'aws-sdk-v1'
  require 'aws-sdk'
  has_attached_file :image, 
  									s3_protocol: :https,
  									styles: { medium: "460x315>", thumb: "175x120>" }, default_url: "http://placehold.it/200x200"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end


	