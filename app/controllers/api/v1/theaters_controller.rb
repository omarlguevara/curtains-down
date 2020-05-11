class Api::V1::TheatersController < ApplicationController
  before_action :authorize_user, except: [:index, :show, :create]

  def index
    render json: Theater.all
  end

  def show
    theater = Theater.find(params[:id])
    render json: {
      theater: serialized_data(theater, TheaterSerializer),
      current_user: current_user
    }
  end

  def create
    theater = Theater.new(theater_params)

    if theater.save
      render json: theater
    else
      render json: {error: theater.errors.full_messages.to_sentence}
    end
  end

  def serialized_data(data, serializer)
    ActiveModelSerializers::SerializableResource.new(data, serializer: serializer)
  end

  protected

  def theater_params
    params.require(:theater).permit(:title, :image, :description, :genre, :site)
  end

  def authorize_user
    if !user_signed_in || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

end
