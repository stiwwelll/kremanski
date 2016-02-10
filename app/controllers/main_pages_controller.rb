class MainPagesController < ApplicationController
  
  def index
  	@events = Event.future_dates.limit(3)
  end

  def contact_form
  	@name = params[:name]
    @email = params[:email]
    @message = params[:message]
    render json: { message: "success!" }
    UserMailer.contact_form(@email, @name, @message).deliver_now
  end

end
