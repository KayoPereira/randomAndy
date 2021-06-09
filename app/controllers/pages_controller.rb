class PagesController < ApplicationController
  def home
    @locale = Locale.all
  end
end