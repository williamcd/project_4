class Api::ShopsController < ApplicationController
    def index
        @shops = Shop.all
        render json: {
            shops: @shops
        }
    end
    def show
        @shop = Shop.find(params[:id])
        render json: {
            shop: @shop
        }
    end
    def update
        @updated_shop = Shop.find(params[:id])
        @updated_shop.update!(shop_params)
        render json: {
            shop: @updated_shop
        }
    end
    def create
    end
    def destroy
        Shop.find(params[:id]).destroy
        render json: {
            message: "Shop is closed"
        }
    end
    
    private

    def shop_params
        params.require(:shop).permit(:name, :photo_url, :description)
    end
end
