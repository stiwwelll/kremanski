class UserMailer < ApplicationMailer

	default from: "from@example.com"

  def contact_form(email, name, message)
  @message = message
    mail(:from => email,
        :to => 'marco.steffensky@gmail.com',
        :subject => "Eine neue Nachricht von #{name}")
  end

end
