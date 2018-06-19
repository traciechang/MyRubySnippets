class User < ApplicationRecord
    validates :provider, :uid, :email, :first_name, presence: true
    validates :uid, uniqueness: { scope: :provider }

    after_create :create_snippet

    has_one :snippet, dependent: :destroy

    def self.find_or_create_from_auth_hash(auth)
        where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
            user.provider = auth.provider
            user.uid = auth.uid
            user.email = auth.info.email
            user.first_name = auth.info.first_name
            user.save!
        end
    end

    private
    def create_snippet
        Snippet.create("snippet": "", "user_id": self.id)
    end
end
