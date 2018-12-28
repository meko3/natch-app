class UserController < ApplicationController

  def get
    render json: { name: "TestUser" }
  end

end
