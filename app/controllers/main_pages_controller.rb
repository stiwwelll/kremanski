class MainPagesController < ApplicationController
  
  layout 'pdf', only: [:coffee, :breakfast, :lunch]

  def index
  	@events = Event.future_dates.limit(3)
  end

  def contact_form
  	@name    = params[:name]
    @email   = params[:email]
    @message = params[:message]
    render json: { message: "Deine Nachricht wurde erfolgreich übermittelt. Vielen Dank!", status: "success" }
    UserMailer.contact_form(@email, @name, @message).deliver_now
  end

end
