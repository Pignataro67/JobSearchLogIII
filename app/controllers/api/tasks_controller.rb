class Api::TasksController < ApiController
  before_action :set_task, only: [:show, :update, :destroy]

  def index
    @tasks = Task.all  
    render json: @tasks
  end
  
  def show
    if @task
      render json: @task, status: 200
     else
      render json: { message: "Resource not found." }, status: 404
     end
  end
 
  def create
    @task = Task.new(task_params)
  
    if @task.save
      render json: {status: "success", task: @task}, status: 200
    else
      render json: {status: "error", task: @task.errors}, status: 400
    end
  end

  def update
    if @task.update(task_params)
      render json: @task, status: 200
    else
      render json: { message: @task.errors }, status: 400
    end
  end

  def destroy
    if @task.destroy
      render status: 204
    else
      render json: { message: "Unable to remove." }, status: 404
    end
  end
  
  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:id, :name, :date, :description, :type_id, :notes)
  end
end