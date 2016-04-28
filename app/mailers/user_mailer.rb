class UserMailer < ApplicationMailer

	default from: "from@example.com"

  def contact_form(email, name, message)
  	@message = message
  	@name = name
  	@email = email

    mail(from:    "#{name} <#{email}>",
      	 to:      'a.bembenek@gmx.de',
      	 subject: "Eine neue Nachricht von #{name}")
  end

end
