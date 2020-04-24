class Api::TypesController < ApiController
  def index
    @types = Type.all
    
    render json: @types
  end
 
  def show
    @type = Type.find(params[:id])
    
    render json: @type
  end
end