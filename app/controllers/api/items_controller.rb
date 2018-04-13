class Api::ItemsController < ApplicationController
    def index
        @shop = Shop.find(params[:shop_id])
        @items = @shop.items
        render json: {
            items: @items
        }
    end
    def show
        @item = Item.find(params[:id])
        render json: {
            item: @item
        }
    end
    def create
        @shop = Shop.find(params[:shop_id])
        @item = @shop.items.create(item_params)
        render json: {
            item: @item
        }
    end
    def update
        @shop = Shop.find(params[:shop_id])
        @item = @shop.items.find(params[:id])
        @item.update!(item_params)
        render json: {
            item: @item
        }
    end
    def destroy
        Item.find(params[:id]).destroy
        render json: {
            message: "Item is destroyed"
        }
    end
    
    private

    def item_params
        params.require(:item).permit(:name, :cost, :category, :description_url)
    end
end
