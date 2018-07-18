class SnippetsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "snippets_channel"
  end

  def unsubscribed
  end

  def receive(data)
    ActionCable.server.broadcast 'snippets_channel',
      id: data["id"],
      snippet: data["snippet"],
      url: data["url"]
  end
end
