class MainPagesController < ApplicationController
  
  def index
  end

  def form
  	@name = params[:name]
    @email = params[:email]
    @message = params[:message]
    UserMailer.contact_form(@email, @name, @message).deliver
  end

end
