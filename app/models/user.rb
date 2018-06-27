class User < ApplicationRecord
    validates :provider, :uid, :email, :first_name, presence: true
    validates :uid, uniqueness: { scope: :provider }
    validates :username, uniqueness: true, allow_nil: true

    after_create :create_snippet

    has_one :snippet, dependent: :destroy
    has_many :shared_snippets, dependent: :destroy

    def self.find_or_create_from_auth_hash(auth)
        where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
            user.provider = auth.provider
            user.uid = auth.uid
            user.email = auth.info.email
            if auth.provider == "github"
                user.first_name = auth.info.nickname
            else
                # user.email = auth.info.email
                user.first_name = auth.info.first_name
            end
            user.save!
        end
    end

    private
    def create_snippet
        Snippet.create("snippet": "", "user_id": self.id)
    end
end

# perhaps take out user email since we don't need?
# Will then also have to change Navbar "signed in as" to first_name