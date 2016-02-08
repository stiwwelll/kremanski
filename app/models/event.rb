class Event < ActiveRecord::Base
  scope :future_dates, ->{ where("date >= ?", Date.today) }
end


