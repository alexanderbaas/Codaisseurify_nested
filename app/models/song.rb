class Song < ApplicationRecord
  belongs_to :artist

  validates :title, presence: true, length: { maximum: 20 }
end
