class Product < ApplicationRecord
  before_validation :parse_image
  attr_accessor :image_base, :picture_file_name

  validates :name, presence: true
  validates :size, presence: true

  has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>" }
  do_not_validate_attachment_file_type :picture

  private
  def parse_image
    image = Paperclip.io_adapters.for(image_base)
    image.original_filename = "#{self.name}.jpg"
    self.picture = image
    byebug
  end
end
