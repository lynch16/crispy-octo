class Product < ApplicationRecord
  attr_accessor :image_base, :picture_file_name

  validates :name, presence: true

  has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>" }
  do_not_validate_attachment_file_type :picture

  has_many :product_listings

  def parse_image(url)
    image = Paperclip.io_adapters.for(image_base)
    image.original_filename = "#{self.name}.jpg"
    self.picture = image
    self.picture_url = "http://" + url + self.picture.url
    self.save
  end
end
