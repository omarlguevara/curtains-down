require 'nokogiri'
require 'open-uri'
require 'json'
require 'csv'


class TheaterScraper

  attr_reader :theater, :url
  BASE_URL = "https://www.playbill.com/broadway-theatres"

  def initialize(theater)
    @theater = theater
    @url = "#{BASE_URL}/#{theater.name}  ".sub(" ", "_")
    @information_array = []
  end

  def self.scrape
    @theaters = []
    document = Nokogiri::HTML(open(BASE_URL))
    theater_nodes = document.css('li.image-align-left')

    theater_nodes.each do |theater_node|
      theater = Theater.new
      theater.title = theater_node.css('.bsp-list-promo-title').text
      theater.image = theater_node.css('img').attr('data-lazy').value
      theater_node.css('.bsp-list-promo-desc').search('br').each do |br| br.replace('')end
        theater.description = theater_node.css('.bsp-list-promo-desc').text
          theater.site = BASE_URL
        theater.save
      end
    end
  end
