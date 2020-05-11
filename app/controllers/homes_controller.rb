class HomesController < ApplicationController
 before_action :authorize_user, except: [:index]

  def index
  end

  def user_check
  end

  protected

  def authorize_user
    if !user_signed_in || !current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end
