class Api::ShopsController < ApplicationController
    def index
        @shops = Shop.all
        render json: {
            shops: @shops
        }
    end
    def show
        @shop = Shop.find(params[:id])
        @items = @shop.items
        render json: {
            shop: @shop,
            items: @items
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
        @new_shop = Shop.create(shop_params)
        render json: {
            shop: @new_shop
        }
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
