class MainPagesController < ApplicationController
  
  def index
  	@name = params[:name]
    @email = params[:email]
    @message = params[:message]
    UserMailer.contact_form(@email, @name, @message).deliver
  end

end
